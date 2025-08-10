
// "use client";

// import type React from "react";
// import { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { FormProvider, useForm, type SubmitHandler } from "react-hook-form";
// import { Check, ArrowRight, ArrowLeft } from "lucide-react";
// import StepOne from "./steps/StepOne";
// import StepTwo from "./steps/StepTwo";
// import StepThree from "./steps/StepThree";
// import StepFour from "./steps/StepFour";
// import ThankYou from "./steps/ThankYou";

// export interface EnergyOnboardingData {
//   fullName: string;
//   email: string;
//   phoneNumber: string;
//   address: string;
//   city: string;
//   state: string;
//   zipCode: string;
//   serviceType: string;
//   energyGoal: string;
//   currentProvider: string;
//   averageBill: string;
//   roofType: string;
//   shadeLevel: string;
//   homeOwnership: string;
//   creditScore: string;
//   preferredInstallDate: Date | null;
//   additionalNotes: string;
// }

// const sidebarSteps = [
//   {
//     id: 1,
//     step: 1,
//     title: "Personal Info",
//     description: "Your contact and address details",
//   },
//   {
//     id: 2,
//     step: 2,
//     title: "Energy Needs",
//     description: "Understand your energy consumption",
//   },
//   {
//     id: 3,
//     step: 3,
//     title: "Property Details",
//     description: "Information about your home",
//   },
//   {
//     id: 4,
//     step: 4,
//     title: "Financials & Schedule",
//     description: "Credit and installation preferences",
//   },
// ];

// const EnergyOnboardingWizard: React.FC = () => {
//   const [currentStep, setCurrentStep] = useState(1);
//   const [isComplete, setIsComplete] = useState(false);
//   const [isSubmitting, setIsSubmitting] = useState(false);

//   const methods = useForm<EnergyOnboardingData>({
//     mode: "onChange",
//     defaultValues: {
//       fullName: "",
//       email: "",
//       phoneNumber: "",
//       address: "",
//       city: "",
//       state: "",
//       zipCode: "",
//       serviceType: "",
//       energyGoal: "",
//       currentProvider: "",
//       averageBill: "",
//       roofType: "",
//       shadeLevel: "",
//       homeOwnership: "",
//       creditScore: "",
//       preferredInstallDate: null,
//       additionalNotes: "",
//     },
//   });

//   const {
//     handleSubmit,
//     trigger,
//     formState: { errors },
//   } = methods;

//   const nextStep = async () => {
//     let isValid = false;
//     if (currentStep === 1) {
//       isValid = await trigger([
//         "fullName",
//         "email",
//         "phoneNumber",
//         "address",
//         "city",
//         "state",
//         "zipCode",
//       ]);
//     } else if (currentStep === 2) {
//       isValid = await trigger([
//         "serviceType",
//         "energyGoal",
//         "currentProvider",
//         "averageBill",
//       ]);
//     } else if (currentStep === 3) {
//       isValid = await trigger(["roofType", "shadeLevel", "homeOwnership"]);
//     } else if (currentStep === 4) {
//       isValid = await trigger(["creditScore", "preferredInstallDate"]);
//     }

//     if (isValid) {
//       if (currentStep < sidebarSteps.length) {
//         setCurrentStep((prev) => prev + 1);
//       } else {
//         handleSubmit(onSubmit)();
//       }
//     }
//   };

//   const prevStep = () => {
//     if (currentStep > 1) {
//       setCurrentStep((prev) => prev - 1);
//     }
//   };

//   const onSubmit: SubmitHandler<EnergyOnboardingData> = async (data) => {
//     setIsSubmitting(true);
//     // Simulate API call
//     await new Promise((resolve) => setTimeout(resolve, 2000));
//     console.log("Onboarding Data:", data);
//     setIsSubmitting(false);
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
//       case 4:
//         return <StepFour />;
//       default:
//         return <StepOne />;
//     }
//   };

//   if (isComplete) {
//     return <ThankYou />;
//   }

//   if (isSubmitting) {
//     return (
//       <div className="min-h-screen bg-gray-50 flex items-center justify-center">
//         <div className="text-center">
//           <div className="w-16 h-16 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin mx-auto mb-4"></div>
//           <h2 className="text-xl font-semibold text-gray-900 mb-2">
//             Submitting your information...
//           </h2>
//           <p className="text-gray-600">Please wait a moment.</p>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
//       <div className="bg-white rounded-lg shadow-lg flex w-full max-w-6xl overflow-hidden">
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

//         {/* Main Content Area */}
//         <div className="flex-1 p-8 overflow-y-auto">
//           <FormProvider {...methods}>
//             <AnimatePresence mode="wait">
//               <motion.div
//                 key={currentStep}
//                 initial={{ opacity: 0, x: 20 }}
//                 animate={{ opacity: 1, x: 0 }}
//                 exit={{ opacity: 0, x: -20 }}
//                 transition={{ duration: 0.3 }}
//               >
//                 {renderStep()}
//               </motion.div>
//             </AnimatePresence>

//             <div className="flex justify-between mt-8 pt-6 border-t border-gray-200">
//               <button
//                 type="button"
//                 onClick={prevStep}
//                 disabled={currentStep === 1}
//                 className={`flex items-center px-4 py-2 text-sm font-medium rounded-md transition-colors ${
//                   currentStep === 1
//                     ? "text-gray-400 cursor-not-allowed"
//                     : "text-gray-600 hover:text-gray-800 hover:bg-gray-100"
//                 }`}
//               >
//                 <ArrowLeft className="w-4 h-4 mr-2" />
//                 Back
//               </button>

//               <button
//                 type="button"
//                 onClick={nextStep}
//                 className="flex items-center px-6 py-2 bg-blue-600 text-white text-sm font-medium rounded-md hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
//               >
//                 {currentStep === sidebarSteps.length
//                   ? "Submit Application"
//                   : "Next Step"}
//                 <ArrowRight className="w-4 h-4 ml-2" />
//               </button>
//             </div>
//           </FormProvider>
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
import { Check } from "lucide-react";
import StepOne from "./steps/StepOne";
import StepTwo from "./steps/StepTwo";
import StepThree from "./steps/StepThree";
import StepFour from "./steps/StepFour";
import ThankYou from "./steps/ThankYou";

export interface EnergyOnboardingData {
  fullName: string;
  email: string;
  phoneNumber: string;
  companyName: string;
  companyAddress: string;
  serviceType: string;
  installationGoals: string[];
  preferredContactMethod: string;
  agreeTerms: boolean;
}

const sidebarSteps = [
  {
    id: 1,
    step: 1,
    title: "Personal Information",
    description: "Your basic details",
  },
  {
    id: 2,
    step: 2,
    title: "Company Details",
    description: "Information about your business",
  },
  {
    id: 3,
    step: 3,
    title: "Service & Goals",
    description: "What you're looking for",
  },
  {
    id: 4,
    step: 4,
    title: "Confirmation",
    description: "Review and submit",
  },
];

const EnergyOnboardingWizard: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<EnergyOnboardingData>(() => {
    if (typeof window !== "undefined") {
      const savedData = localStorage.getItem("energyOnboardingData");
      return savedData
        ? JSON.parse(savedData)
        : {
            fullName: "",
            email: "",
            phoneNumber: "",
            companyName: "",
            companyAddress: "",
            serviceType: "",
            installationGoals: [],
            preferredContactMethod: "",
            agreeTerms: false,
          };
    }
    return {
      fullName: "",
      email: "",
      phoneNumber: "",
      companyName: "",
      companyAddress: "",
      serviceType: "",
      installationGoals: [],
      preferredContactMethod: "",
      agreeTerms: false,
    };
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isComplete, setIsComplete] = useState(false);

  const updateFormData = (newData: Partial<EnergyOnboardingData>) => {
    setFormData((prev) => {
      const updated = { ...prev, ...newData };
      if (typeof window !== "undefined") {
        localStorage.setItem("energyOnboardingData", JSON.stringify(updated));
      }
      return updated;
    });
  };

  const nextStep = () => {
    setCurrentStep((prev) => prev + 1);
  };

  const prevStep = () => {
    setCurrentStep((prev) => prev - 1);
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));
    console.log("Form Data Submitted:", formData);
    setIsSubmitting(false);
    setIsComplete(true);
    if (typeof window !== "undefined") {
      localStorage.removeItem("energyOnboardingData");
    }
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <StepOne
            formData={formData}
            updateFormData={updateFormData}
            nextStep={nextStep}
          />
        );
      case 2:
        return (
          <StepTwo
            formData={formData}
            updateFormData={updateFormData}
            nextStep={nextStep}
            prevStep={prevStep}
          />
        );
      case 3:
        return (
          <StepThree
            formData={formData}
            updateFormData={updateFormData}
            nextStep={nextStep}
            prevStep={prevStep}
          />
        );
      case 4:
        return (
          <StepFour
            formData={formData}
            handleSubmit={handleSubmit}
            prevStep={prevStep}
            isSubmitting={isSubmitting}
          />
        );
      default:
        return null;
    }
  };

  if (isComplete) {
    return <ThankYou />;
  }

  return (
    <div className="min-h-screen bg-gray-50 flex">
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
                    ? "bg-purple-50 border border-purple-200"
                    : currentStep > step.step
                    ? "bg-gray-50"
                    : "bg-white"
                }`}
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-medium text-gray-900">{step.title}</h3>
                    <p className="text-sm text-gray-500">{step.description}</p>
                  </div>
                  {currentStep > step.step && (
                    <div className="w-6 h-6 bg-purple-600 rounded-full flex items-center justify-center">
                      <Check className="w-4 h-4 text-white" />
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Mobile Progress Indicator */}
        <div className="md:hidden bg-white border-b border-gray-200 px-4 py-4">
          <div className="flex items-center justify-between mb-2">
            <h1 className="text-lg font-semibold text-gray-900">
              Energy Pros Onboarding
            </h1>
            <span className="text-sm text-gray-500">
              Step {currentStep} of {sidebarSteps.length}
            </span>
          </div>
          <div className="flex space-x-2">
            {sidebarSteps.map((step) => (
              <div
                key={step.id}
                className={`flex-1 h-2 rounded-full transition-colors ${
                  currentStep >= step.step ? "bg-purple-600" : "bg-gray-200"
                }`}
              />
            ))}
          </div>
        </div>

        <div className="flex-1 p-8 overflow-y-auto">
          <div className="max-w-2xl mx-auto">
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnergyOnboardingWizard;
