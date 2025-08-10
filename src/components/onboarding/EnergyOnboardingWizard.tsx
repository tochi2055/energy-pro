// "use client";

// import type React from "react";
// import { useState, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { FormProvider, useForm } from "react-hook-form";
// import { Check } from "lucide-react";
// import StepOne from "./steps/StepOne";
// import StepTwo from "./steps/StepTwo";
// import StepThree from "./steps/StepThree";
// import ThankYou from "./steps/ThankYou";

// export interface EnergyOnboardingData {
//   fullName: string;
//   email: string;
//   phone: string;
//   businessType: string;
//   experienceLevel: string;
//   services: string[];
//   location: string;
//   verificationMethod: string;
//   portfolioUrl?: string;
//   goals: string[];
// }

// const STORAGE_KEY = "energy-onboarding-data";

// const sidebarSteps = [
//   {
//     id: "profile",
//     title: "Profile",
//     description: "Your basic information",
//     step: 1,
//   },
//   {
//     id: "experience",
//     title: "Experience",
//     description: "Your skills and services",
//     step: 2,
//   },
//   {
//     id: "verification",
//     title: "Verification",
//     description: "Credentials and goals",
//     step: 3,
//   },
// ];

// const EnergyOnboardingWizard: React.FC = () => {
//   const [currentStep, setCurrentStep] = useState(1);
//   const [isComplete, setIsComplete] = useState(false);

//   const methods = useForm<EnergyOnboardingData>({
//     mode: "onChange",
//     defaultValues: {
//       fullName: "",
//       email: "",
//       phone: "",
//       businessType: "",
//       experienceLevel: "",
//       services: [],
//       location: "",
//       verificationMethod: "",
//       portfolioUrl: "",
//       goals: [],
//     },
//   });

//   const {
//     handleSubmit,
//     watch,
//     trigger,
//     formState: { isValid },
//   } = methods;

//   // Load saved data on mount
//   useEffect(() => {
//     const savedData = localStorage.getItem(STORAGE_KEY);
//     if (savedData) {
//       try {
//         const parsedData = JSON.parse(savedData);
//         methods.reset(parsedData);
//       } catch (error) {
//         console.error("Error loading saved data:", error);
//       }
//     }
//   }, [methods]);

//   // Save data to localStorage whenever form data changes
//   const formData = watch();
//   useEffect(() => {
//     localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
//   }, [formData]);

//   const nextStep = async () => {
//     const fieldsToValidate = getFieldsForStep(currentStep);
//     const isStepValid = await trigger(fieldsToValidate);

//     if (isStepValid) {
//       if (currentStep < 3) {
//         setCurrentStep(currentStep + 1);
//       } else {
//         handleSubmit(onSubmit)();
//       }
//     }
//   };

//   const prevStep = () => {
//     if (currentStep > 1) {
//       setCurrentStep(currentStep - 1);
//     }
//   };

//   const getFieldsForStep = (step: number): (keyof EnergyOnboardingData)[] => {
//     switch (step) {
//       case 1:
//         return ["fullName", "email", "phone", "businessType"];
//       case 2:
//         return ["experienceLevel", "services", "location"];
//       case 3:
//         return ["verificationMethod", "portfolioUrl", "goals"];
//       default:
//         return [];
//     }
//   };

//   const onSubmit = (data: EnergyOnboardingData) => {
//     console.log("Energy platform onboarding completed:", data);
//     localStorage.removeItem(STORAGE_KEY);
//     setIsComplete(true);
//   };

//   const renderStep = () => {
//     switch (currentStep) {
//       case 1:
//         return <StepOne />;
//       case 2:
//         return <StepTwo />;
//       case 3:
//         return <StepThree />;
//       default:
//         return <StepOne />;
//     }
//   };

//   if (isComplete) {
//     return <ThankYou />;
//   }

//   return (
//     <div className="min-h-screen bg-gray-100">
//       <div className="flex">
//         {/* Sidebar */}
//         <div className="hidden md:block w-80 bg-white shadow-sm">
//           <div className="p-6">
//             <h1 className="text-xl font-semibold text-gray-900 mb-8">
//               Energy Pros Connect
//             </h1>
//             <div className="space-y-4">
//               {sidebarSteps.map((step) => (
//                 <div
//                   key={step.id}
//                   className={`p-4 rounded-lg transition-colors ${
//                     currentStep === step.step
//                       ? "bg-blue-50 border border-blue-200"
//                       : currentStep > step.step
//                       ? "bg-gray-50"
//                       : "bg-white"
//                   }`}
//                 >
//                   <div className="flex items-center justify-between">
//                     <div>
//                       <h3 className="font-medium text-gray-900">
//                         {step.title}
//                       </h3>
//                       <p className="text-sm text-gray-500">
//                         {step.description}
//                       </p>
//                     </div>
//                     {currentStep > step.step && (
//                       <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center">
//                         <Check className="w-4 h-4 text-white" />
//                       </div>
//                     )}
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>

//         {/* Main Content */}
//         <div className="flex-1 p-4 md:p-8">
//           <div className="max-w-md mx-auto">
//             <FormProvider {...methods}>
//               <motion.div
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 className="bg-white rounded-lg shadow-md p-6"
//               >
//                 {/* Mobile Progress Indicator */}
//                 <div className="md:hidden mb-6">
//                   <div className="flex justify-between items-center mb-2">
//                     <span className="text-sm font-medium text-gray-600">
//                       Step {currentStep} of 3
//                     </span>
//                     <span className="text-sm text-gray-500">
//                       {Math.round((currentStep / 3) * 100)}%
//                     </span>
//                   </div>
//                   <div className="w-full bg-gray-200 rounded-full h-2">
//                     <motion.div
//                       className="bg-indigo-600 h-2 rounded-full"
//                       initial={{ width: 0 }}
//                       animate={{ width: `${(currentStep / 3) * 100}%` }}
//                       transition={{ duration: 0.5, ease: "easeInOut" }}
//                     />
//                   </div>
//                 </div>

//                 <AnimatePresence mode="wait">
//                   <motion.div
//                     key={currentStep}
//                     initial={{ opacity: 0, x: 20 }}
//                     animate={{ opacity: 1, x: 0 }}
//                     exit={{ opacity: 0, x: -20 }}
//                     transition={{ duration: 0.3 }}
//                   >
//                     {renderStep()}
//                   </motion.div>
//                 </AnimatePresence>

//                 <div className="flex justify-between mt-8 pt-6 border-t border-gray-100">
//                   <button
//                     type="button"
//                     onClick={prevStep}
//                     disabled={currentStep === 1}
//                     className={`px-6 py-2 rounded font-medium transition-colors ${
//                       currentStep === 1
//                         ? "text-gray-400 cursor-not-allowed"
//                         : "text-gray-600 hover:text-gray-800 hover:bg-gray-100"
//                     }`}
//                   >
//                     Back
//                   </button>

//                   <button
//                     type="button"
//                     onClick={nextStep}
//                     className="px-6 py-2 bg-indigo-600 text-white rounded font-medium hover:bg-indigo-700 transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
//                   >
//                     {currentStep === 3 ? "Complete" : "Continue"}
//                   </button>
//                 </div>
//               </motion.div>
//             </FormProvider>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default EnergyOnboardingWizard;

"use client";

import type React from "react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FormProvider, useForm, type SubmitHandler } from "react-hook-form";
import { Check, ArrowRight, ArrowLeft } from "lucide-react";
import StepOne from "./steps/StepOne";
import StepTwo from "./steps/StepTwo";
import StepThree from "./steps/StepThree";
import StepFour from "./steps/StepFour";
import ThankYou from "./steps/ThankYou";

export interface EnergyOnboardingData {
  fullName: string;
  email: string;
  phoneNumber: string;
  address: string;
  city: string;
  state: string;
  zipCode: string;
  serviceType: string;
  energyGoal: string;
  currentProvider: string;
  averageBill: string;
  roofType: string;
  shadeLevel: string;
  homeOwnership: string;
  creditScore: string;
  preferredInstallDate: Date | null;
  additionalNotes: string;
}

const sidebarSteps = [
  {
    id: 1,
    step: 1,
    title: "Personal Info",
    description: "Your contact and address details",
  },
  {
    id: 2,
    step: 2,
    title: "Energy Needs",
    description: "Understand your energy consumption",
  },
  {
    id: 3,
    step: 3,
    title: "Property Details",
    description: "Information about your home",
  },
  {
    id: 4,
    step: 4,
    title: "Financials & Schedule",
    description: "Credit and installation preferences",
  },
];

const EnergyOnboardingWizard: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [isComplete, setIsComplete] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const methods = useForm<EnergyOnboardingData>({
    mode: "onChange",
    defaultValues: {
      fullName: "",
      email: "",
      phoneNumber: "",
      address: "",
      city: "",
      state: "",
      zipCode: "",
      serviceType: "",
      energyGoal: "",
      currentProvider: "",
      averageBill: "",
      roofType: "",
      shadeLevel: "",
      homeOwnership: "",
      creditScore: "",
      preferredInstallDate: null,
      additionalNotes: "",
    },
  });

  const {
    handleSubmit,
    trigger,
    formState: { errors },
  } = methods;

  const nextStep = async () => {
    let isValid = false;
    if (currentStep === 1) {
      isValid = await trigger([
        "fullName",
        "email",
        "phoneNumber",
        "address",
        "city",
        "state",
        "zipCode",
      ]);
    } else if (currentStep === 2) {
      isValid = await trigger([
        "serviceType",
        "energyGoal",
        "currentProvider",
        "averageBill",
      ]);
    } else if (currentStep === 3) {
      isValid = await trigger(["roofType", "shadeLevel", "homeOwnership"]);
    } else if (currentStep === 4) {
      isValid = await trigger(["creditScore", "preferredInstallDate"]);
    }

    if (isValid) {
      if (currentStep < sidebarSteps.length) {
        setCurrentStep((prev) => prev + 1);
      } else {
        handleSubmit(onSubmit)();
      }
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  const onSubmit: SubmitHandler<EnergyOnboardingData> = async (data) => {
    setIsSubmitting(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));
    console.log("Onboarding Data:", data);
    setIsSubmitting(false);
    setIsComplete(true);
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return <StepOne />;
      case 2:
        return <StepTwo />;
      case 3:
        return <StepThree />;
      case 4:
        return <StepFour />;
      default:
        return <StepOne />;
    }
  };

  if (isComplete) {
    return <ThankYou />;
  }

  if (isSubmitting) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin mx-auto mb-4"></div>
          <h2 className="text-xl font-semibold text-gray-900 mb-2">
            Submitting your information...
          </h2>
          <p className="text-gray-600">Please wait a moment.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-lg flex w-full max-w-6xl overflow-hidden">
        {/* Sidebar */}
        <div className="hidden md:block w-80 bg-white shadow-sm">
          <div className="p-6">
            <h1 className="text-xl font-semibold text-gray-900 mb-8">
              Energy Pros Connect
            </h1>
            <div className="space-y-4">
              {sidebarSteps.map((step) => (
                <div
                  key={step.id}
                  className={`p-4 rounded-lg transition-colors ${
                    currentStep === step.step
                      ? "bg-blue-50 border border-blue-200"
                      : currentStep > step.step
                      ? "bg-gray-50"
                      : "bg-white"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-medium text-gray-900">
                        {step.title}
                      </h3>
                      <p className="text-sm text-gray-500">
                        {step.description}
                      </p>
                    </div>
                    {currentStep > step.step && (
                      <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center">
                        <Check className="w-4 h-4 text-white" />
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Main Content Area */}
        <div className="flex-1 p-8 overflow-y-auto">
          <FormProvider {...methods}>
            <AnimatePresence mode="wait">
              <motion.div
                key={currentStep}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                {renderStep()}
              </motion.div>
            </AnimatePresence>

            <div className="flex justify-between mt-8 pt-6 border-t border-gray-200">
              <button
                type="button"
                onClick={prevStep}
                disabled={currentStep === 1}
                className={`flex items-center px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                  currentStep === 1
                    ? "text-gray-400 cursor-not-allowed"
                    : "text-gray-600 hover:text-gray-800 hover:bg-gray-100"
                }`}
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back
              </button>

              <button
                type="button"
                onClick={nextStep}
                className="flex items-center px-6 py-2 bg-blue-600 text-white text-sm font-medium rounded-md hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                {currentStep === sidebarSteps.length
                  ? "Submit Application"
                  : "Next Step"}
                <ArrowRight className="w-4 h-4 ml-2" />
              </button>
            </div>
          </FormProvider>
        </div>
      </div>
    </div>
  );
};

export default EnergyOnboardingWizard;


// "use client";

// import type React from "react";
// import { useState, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { FormProvider, useForm } from "react-hook-form";
// import { Check } from "lucide-react";
// import StepOne from "./steps/StepOne";
// import StepTwo from "./steps/StepTwo";
// import StepThree from "./steps/StepThree";
// import ThankYou from "./steps/ThankYou";

// export interface EnergyOnboardingData {
//   fullName: string;
//   email: string;
//   phone: string;
//   businessType: string;
//   experienceLevel: string;
//   services: string[];
//   location: string;
//   verificationMethod: string;
//   portfolioUrl?: string;
//   goals: string[];
// }

// const STORAGE_KEY = "energy-onboarding-data";

// const sidebarSteps = [
//   {
//     id: "profile",
//     title: "Profile",
//     description: "Your basic information",
//     step: 1,
//   },
//   {
//     id: "experience",
//     title: "Experience",
//     description: "Your skills and services",
//     step: 2,
//   },
//   {
//     id: "verification",
//     title: "Verification",
//     description: "Credentials and goals",
//     step: 3,
//   },
// ];

// const EnergyOnboardingWizard: React.FC = () => {
//   const [currentStep, setCurrentStep] = useState(1);
//   const [isComplete, setIsComplete] = useState(false);

//   const methods = useForm<EnergyOnboardingData>({
//     mode: "onChange",
//     defaultValues: {
//       fullName: "",
//       email: "",
//       phone: "",
//       businessType: "",
//       experienceLevel: "",
//       services: [],
//       location: "",
//       verificationMethod: "",
//       portfolioUrl: "",
//       goals: [],
//     },
//   });

//   const {
//     handleSubmit,
//     watch,
//     trigger,
//     formState: { isValid },
//   } = methods;

//   // Load saved data on mount
//   useEffect(() => {
//     const savedData = localStorage.getItem(STORAGE_KEY);
//     if (savedData) {
//       try {
//         const parsedData = JSON.parse(savedData);
//         methods.reset(parsedData);
//       } catch (error) {
//         console.error("Error loading saved data:", error);
//       }
//     }
//   }, [methods]);

//   // Save data to localStorage whenever form data changes
//   const formData = watch();
//   useEffect(() => {
//     localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
//   }, [formData]);

//   const nextStep = async () => {
//     const fieldsToValidate = getFieldsForStep(currentStep);
//     const isStepValid = await trigger(fieldsToValidate);

//     if (isStepValid) {
//       if (currentStep < 3) {
//         setCurrentStep(currentStep + 1);
//       } else {
//         handleSubmit(onSubmit)();
//       }
//     }
//   };

//   const prevStep = () => {
//     if (currentStep > 1) {
//       setCurrentStep(currentStep - 1);
//     }
//   };

//   const getFieldsForStep = (step: number): (keyof EnergyOnboardingData)[] => {
//     switch (step) {
//       case 1:
//         return ["fullName", "email", "phone", "businessType"];
//       case 2:
//         return ["experienceLevel", "services", "location"];
//       case 3:
//         return ["verificationMethod", "portfolioUrl", "goals"];
//       default:
//         return [];
//     }
//   };

//   const onSubmit = (data: EnergyOnboardingData) => {
//     console.log("Energy platform onboarding completed:", data);
//     localStorage.removeItem(STORAGE_KEY);
//     setIsComplete(true);
//   };

//   const renderStep = () => {
//     switch (currentStep) {
//       case 1:
//         return <StepOne />;
//       case 2:
//         return <StepTwo />;
//       case 3:
//         return <StepThree />;
//       default:
//         return <StepOne />;
//     }
//   };

//   if (isComplete) {
//     return <ThankYou />;
//   }

//   // Helper function to determine step status
//   const getStepStatus = (stepNumber: number) => {
//     if (currentStep > stepNumber) return "completed";
//     if (currentStep === stepNumber) return "current";
//     return "pending";
//   };

//   // Helper function to render step icon based on status
//   const getStepIcon = (
//     status: "completed" | "current" | "pending",
//     stepNumber: number
//   ) => {
//     if (status === "completed") {
//       return (
//         <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center text-white flex-shrink-0">
//           <Check className="w-4 h-4" />
//         </div>
//       );
//     } else if (status === "current") {
//       return (
//         <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
//           {stepNumber}
//         </div>
//       );
//     } else {
//       return (
//         <div className="w-8 h-8 border-2 border-gray-300 text-gray-500 rounded-full flex items-center justify-center font-bold flex-shrink-0">
//           {stepNumber}
//         </div>
//       );
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gray-100">
//       <div className="flex">
//         {/* Progress Sidebar */}
//         <div className="hidden lg:flex lg:w-1/3 xl:w-1/4 bg-white shadow-sm">
//           <div className="flex flex-col justify-center px-8 py-12 w-full">
//             <div className="mb-12">
//               <h2 className="text-xl font-bold text-gray-900 mb-2">
//                 Application Progress
//               </h2>
//               <p className="text-gray-600">Track your onboarding status</p>
//             </div>
//             <div className="space-y-6">
//               {sidebarSteps.map((step, index) => {
//                 const status = getStepStatus(step.step);
//                 return (
//                   <motion.div
//                     key={step.id}
//                     initial={{ opacity: 0, x: -20 }}
//                     animate={{ opacity: 1, x: 0 }}
//                     transition={{ delay: index * 0.1 }}
//                     className="flex items-start"
//                   >
//                     <div className="flex flex-col items-center flex-shrink-0">
//                       {getStepIcon(status, step.step)}
//                       {index < sidebarSteps.length - 1 && (
//                         <div className="w-px h-12 bg-gray-200 mt-2" />
//                       )}
//                     </div>
//                     <div className="ml-4">
//                       <h3
//                         className={`text-sm font-medium ${
//                           status === "completed" || status === "current"
//                             ? "text-purple-600"
//                             : "text-gray-500"
//                         }`}
//                       >
//                         {step.title}
//                       </h3>
//                       <p className="text-xs text-gray-500 mt-1">
//                         {step.description}
//                       </p>
//                     </div>
//                   </motion.div>
//                 );
//               })}
//             </div>
//           </div>
//         </div>

//         {/* Main Content */}
//         <div className="flex-1 p-4 md:p-8">
//           <div className="max-w-md mx-auto">
//             <FormProvider {...methods}>
//               <motion.div
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 className="bg-white rounded-lg shadow-md p-6"
//               >
//                 {/* Mobile Progress Indicator */}
//                 <div className="md:hidden mb-6">
//                   <div className="flex justify-between items-center mb-2">
//                     <span className="text-sm font-medium text-gray-600">
//                       Step {currentStep} of 3
//                     </span>
//                     <span className="text-sm text-gray-500">
//                       {Math.round((currentStep / 3) * 100)}%
//                     </span>
//                   </div>
//                   <div className="w-full bg-gray-200 rounded-full h-2">
//                     <motion.div
//                       className="bg-indigo-600 h-2 rounded-full"
//                       initial={{ width: 0 }}
//                       animate={{ width: `${(currentStep / 3) * 100}%` }}
//                       transition={{ duration: 0.5, ease: "easeInOut" }}
//                     />
//                   </div>
//                 </div>

//                 <AnimatePresence mode="wait">
//                   <motion.div
//                     key={currentStep}
//                     initial={{ opacity: 0, x: 20 }}
//                     animate={{ opacity: 1, x: 0 }}
//                     exit={{ opacity: 0, x: -20 }}
//                     transition={{ duration: 0.3 }}
//                   >
//                     {renderStep()}
//                   </motion.div>
//                 </AnimatePresence>

//                 <div className="flex justify-between mt-8 pt-6 border-t border-gray-100">
//                   <button
//                     type="button"
//                     onClick={prevStep}
//                     disabled={currentStep === 1}
//                     className={`px-6 py-2 rounded font-medium transition-colors ${
//                       currentStep === 1
//                         ? "text-gray-400 cursor-not-allowed"
//                         : "text-gray-600 hover:text-gray-800 hover:bg-gray-100"
//                     }`}
//                   >
//                     Back
//                   </button>

//                   <button
//                     type="button"
//                     onClick={nextStep}
//                     className="px-6 py-2 bg-indigo-600 text-white rounded font-medium hover:bg-indigo-700 transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
//                   >
//                     {currentStep === 3 ? "Complete" : "Continue"}
//                   </button>
//                 </div>
//               </motion.div>
//             </FormProvider>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default EnergyOnboardingWizard;

