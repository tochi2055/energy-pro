// "use client";

// import type React from "react";
// import { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { FormProvider, useForm, type SubmitHandler } from "react-hook-form";
// import { Check, ArrowRight, ArrowLeft } from "lucide-react";
// import AccountInfoStep from "./steps/AccountInfoStep";
// import ExperienceInfoStep from "./steps/ExperienceInfoStep";
// import VerificationStep from "./steps/VerificationStep";
// import CompletionScreen from "./steps/CompletionScreen";

// export interface OnboardingData {
//   // Account Info
//   fullName: string;
//   email: string;
//   password: string;
//   phoneNumber: string;
//   whatsappNumber: string;
//   stateOfResidence: string;
//   city: string;
//   interestedInTraining: boolean;
//   installationTypes: string[];
//   howDidYouHear: string;

//   // Experience Info
//   role: string;
//   yearsOfExperience: string;
//   skills: string[];

//   // Verification
//   verificationType: "basic" | "proof" | "";
//   certificates: File[];
//   cv: File | null;
//   workPhotos: File[];
//   portfolioLink: string;
//   projectLink: string;
//   githubLink: string;
// }

// const steps = [
//   {
//     id: 1,
//     title: "Account Info",
//     description: "Personal and contact details",
//   },
//   {
//     id: 2,
//     title: "Experience Info",
//     description: "Your professional background",
//   },
//   {
//     id: 3,
//     title: "Verification",
//     description: "Verify your credentials",
//   },
// ];

// const SlothUIOnboarding: React.FC = () => {
//   const [currentStep, setCurrentStep] = useState(1);
//   const [isComplete, setIsComplete] = useState(false);
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [accountInfoPage, setAccountInfoPage] = useState(1);

//   const methods = useForm<OnboardingData>({
//     mode: "onChange", // Validate on change for real-time feedback
//     defaultValues: {
//       fullName: "",
//       email: "",
//       password: "",
//       phoneNumber: "",
//       whatsappNumber: "",
//       stateOfResidence: "",
//       city: "",
//       interestedInTraining: false,
//       installationTypes: [],
//       howDidYouHear: "",
//       role: "",
//       yearsOfExperience: "",
//       skills: [],
//       verificationType: "",
//       certificates: [],
//       cv: null,
//       workPhotos: [],
//       portfolioLink: "",
//       projectLink: "",
//       githubLink: "",
//     },
//   });

//   const {
//     handleSubmit,
//     trigger,
//     formState: { isValid },
//   } = methods;

//   const nextStep = async () => {
//     let isStepValid = false;

//     // Handle Account Info step internal pagination
//     if (currentStep === 1 && accountInfoPage === 1) {
//       isStepValid = await trigger([
//         "fullName",
//         "email",
//         "password",
//         "phoneNumber",
//         "whatsappNumber",
//       ]);
//       if (isStepValid) {
//         setAccountInfoPage(2);
//         return;
//       }
//     } else {
//       // Handle moving to next main step
//       const fieldsToValidate = getFieldsForStep(currentStep);
//       isStepValid = await trigger(fieldsToValidate);
//     }

//     if (isStepValid) {
//       if (currentStep < 3) {
//         setCurrentStep(currentStep + 1);
//         setAccountInfoPage(1); // Reset account info page when moving to next step
//       } else {
//         handleSubmit(onSubmit)();
//       }
//     }
//   };

//   const prevStep = () => {
//     // Handle Account Info step internal pagination
//     if (currentStep === 1 && accountInfoPage === 2) {
//       setAccountInfoPage(1);
//       return;
//     }

//     // Handle moving to previous main step
//     if (currentStep > 1) {
//       setCurrentStep(currentStep - 1);
//       // Set account info page to 2 if going back to account info step
//       if (currentStep - 1 === 1) {
//         setAccountInfoPage(2);
//       }
//     }
//   };

//   const getFieldsForStep = (step: number) => {
//     switch (step) {
//       case 1:
//         // Fields for both pages of Account Info
//         return [
//           "fullName",
//           "email",
//           "password",
//           "phoneNumber",
//           "whatsappNumber",
//           "stateOfResidence",
//           "city",
//           "interestedInTraining",
//           "installationTypes",
//           "howDidYouHear",
//         ] as const;
//       case 2:
//         return ["role", "yearsOfExperience", "skills"] as const;
//       case 3:
//         // Verification fields depend on verificationType, but trigger can validate all potential fields
//         return [
//           "verificationType",
//           "certificates",
//           "cv",
//           "workPhotos",
//           "portfolioLink",
//           "projectLink",
//           "githubLink",
//         ] as const;
//       default:
//         return [] as const;
//     }
//   };

//   const onSubmit: SubmitHandler<OnboardingData> = async (data) => {
//     setIsSubmitting(true);

//     // Simulate API call
//     await new Promise((resolve) => setTimeout(resolve, 2000));

//     console.log("Onboarding completed:", data);
//     setIsSubmitting(false);
//     setIsComplete(true);
//   };

//   const renderStep = () => {
//     switch (currentStep) {
//       case 1:
//         return <AccountInfoStep currentPage={accountInfoPage} />;
//       case 2:
//         return <ExperienceInfoStep />;
//       case 3:
//         return <VerificationStep />;
//       default:
//         return <AccountInfoStep currentPage={accountInfoPage} />;
//     }
//   };

//   const getStepState = (stepId: number) => {
//     if (stepId < currentStep) return "completed";
//     if (stepId === currentStep) return "current";
//     return "upcoming";
//   };

//   const shouldShowBackButton = () => {
//     return currentStep > 1 || (currentStep === 1 && accountInfoPage === 2);
//   };

//   const getNextButtonText = () => {
//     if (currentStep === 1 && accountInfoPage === 1) return "Next";
//     if (currentStep === 3) return "Complete Setup";
//     return "Next";
//   };

//   // Helper function to render step icon based on status
//   const getStepIcon = (
//     status: "completed" | "current" | "upcoming",
//     stepNumber: number
//   ) => {
//     if (status === "completed") {
//       return (
//         <div className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-medium transition-colors bg-green-500 text-white flex-shrink-0">
//           <Check className="w-5 h-5" />
//         </div>
//       );
//     } else if (status === "current") {
//       return (
//         <div className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-medium transition-colors bg-indigo-600 text-white flex-shrink-0">
//           {stepNumber}
//         </div>
//       );
//     } else {
//       return (
//         <div className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-medium transition-colors bg-gray-200 text-gray-500 flex-shrink-0">
//           {stepNumber}
//         </div>
//       );
//     }
//   };

//   if (isComplete) {
//     return <CompletionScreen />;
//   }

//   if (isSubmitting) {
//     return (
//       <div className="min-h-screen bg-gray-50 flex items-center justify-center">
//         <div className="text-center">
//           <div className="w-16 h-16 border-4 border-indigo-200 border-t-indigo-600 rounded-full animate-spin mx-auto mb-4"></div>
//           <h2 className="text-xl font-semibold text-gray-900 mb-2">
//             Processing your application...
//           </h2>
//           <p className="text-gray-600">
//             Please wait while we set up your account.
//           </p>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="h-screen bg-gray-50 overflow-hidden">
//       <div className="flex h-full">
//         {/* Left Sidebar - Progress Indicator */}
//         <div className="hidden lg:flex w-[320px] bg-white shadow-sm flex-shrink-0">
//           <div className="flex flex-col justify-center px-8 py-12 w-full">
//             <div className="mb-12">
//               <h2 className="text-xl font-bold text-gray-900 mb-2">
//                 Application Progress
//               </h2>
//               <p className="text-gray-600">Track your onboarding status</p>
//             </div>

//             <div className="space-y-6">
//               {steps.map((step, index) => {
//                 const state = getStepState(step.id);
//                 return (
//                   <motion.div
//                     key={step.id}
//                     initial={{ opacity: 0, x: -20 }}
//                     animate={{ opacity: 1, x: 0 }}
//                     transition={{ delay: index * 0.1 }}
//                     className="flex items-start"
//                   >
//                     <div className="flex flex-col items-center flex-shrink-0">
//                       {getStepIcon(state, step.id)}
//                       {index < steps.length - 1 && (
//                         <div
//                           className={`w-px h-12 bg-gray-200 mt-2 ${
//                             state === "completed"
//                               ? "bg-green-500"
//                               : "bg-gray-200"
//                           }`}
//                         />
//                       )}
//                     </div>
//                     <div className="ml-4">
//                       <h3
//                         className={`text-sm font-medium ${
//                           state === "current"
//                             ? "text-indigo-600"
//                             : state === "completed"
//                             ? "text-green-600"
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

//         {/* Right Content Area (main scrollable part) */}
//         <div className="flex-1 flex flex-col overflow-y-auto">
//           {/* Mobile Progress Indicator */}
//           <div className="lg:hidden bg-white border-b border-gray-200 px-4 py-4">
//             <div className="flex items-center justify-between mb-2">
//               <h1 className="text-lg font-semibold text-gray-900">
//                 Energy Pros Setup
//               </h1>
//               <span className="text-sm text-gray-500">
//                 Step {currentStep} of {steps.length}
//               </span>
//             </div>
//             <div className="flex space-x-2">
//               {steps.map((step) => {
//                 const state = getStepState(step.id);
//                 return (
//                   <div
//                     key={step.id}
//                     className={`flex-1 h-2 rounded-full transition-colors ${
//                       state === "completed"
//                         ? "bg-green-500"
//                         : state === "current"
//                         ? "bg-indigo-600"
//                         : "bg-gray-200"
//                     }`}
//                   />
//                 );
//               })}
//             </div>
//           </div>

//           {/* Main Form Content */}
//           <div className="flex-1 px-4 py-8 lg:px-8 lg:py-12">
//             <div className="max-w-2xl mx-auto">
//               <FormProvider {...methods}>
//                 <motion.div
//                   initial={{ opacity: 0, y: 20 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   className="bg-white rounded-lg shadow-sm border border-gray-200 p-8"
//                 >
//                   <AnimatePresence mode="wait">
//                     <motion.div
//                       key={currentStep}
//                       initial={{ opacity: 0, x: 20 }}
//                       animate={{ opacity: 1, x: 0 }}
//                       exit={{ opacity: 0, x: -20 }}
//                       transition={{ duration: 0.3 }}
//                     >
//                       {renderStep()}
//                     </motion.div>
//                   </AnimatePresence>

//                   {/* Centralized Navigation Buttons */}
//                   <div className="flex justify-between mt-8 pt-6 border-t border-gray-100">
//                     <button
//                       type="button"
//                       onClick={prevStep}
//                       disabled={!shouldShowBackButton()}
//                       className={`flex items-center px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
//                         !shouldShowBackButton()
//                           ? "text-gray-400 cursor-not-allowed"
//                           : "text-gray-600 hover:text-gray-800 hover:bg-gray-100"
//                       }`}
//                     >
//                       <ArrowLeft className="w-4 h-4 mr-2" />
//                       Back
//                     </button>

//                     <button
//                       type="button"
//                       onClick={nextStep}
//                       className="flex items-center px-6 py-2 bg-indigo-600 text-white text-sm font-medium rounded-lg hover:bg-indigo-700 transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
//                     >
//                       {getNextButtonText()}
//                       <ArrowRight className="w-4 h-4 ml-2" />
//                     </button>
//                   </div>
//                 </motion.div>
//               </FormProvider>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SlothUIOnboarding;

"use client";

import type React from "react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FormProvider, useForm, type SubmitHandler } from "react-hook-form";
import { Check, ArrowRight, ArrowLeft } from "lucide-react";
import AccountInfoStep from "./steps/AccountInfoStep";
import ExperienceInfoStep from "./steps/ExperienceInfoStep";
import VerificationStep from "./steps/VerificationStep";
import CompletionScreen from "./steps/CompletionScreen";

export interface OnboardingData {
  // Account Info
  fullName: string;
  email: string;
  password: string;
  phoneNumber: string;
  whatsappNumber: string;
  stateOfResidence: string;
  city: string;
  interestedInTraining: boolean;
  installationTypes: string[];
  howDidYouHear: string;

  // Experience Info
  role: string;
  yearsOfExperience: string;
  skills: string[];

  // Verification
  verificationType: "basic" | "proof" | "";
  certificates: File[];
  cv: File | null;
  workPhotos: File[];
  portfolioLink: string;
  projectLink: string;
  githubLink: string;
}

const steps = [
  {
    id: 1,
    title: "Account Info",
    description: "Personal and contact details",
  },
  {
    id: 2,
    title: "Experience Info",
    description: "Your professional background",
  },
  {
    id: 3,
    title: "Verification",
    description: "Verify your credentials",
  },
];

const SlothUIOnboarding: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [isComplete, setIsComplete] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [accountInfoPage, setAccountInfoPage] = useState(1);

  const methods = useForm<OnboardingData>({
    mode: "onChange", // Validate on change for real-time feedback
    defaultValues: {
      fullName: "",
      email: "",
      password: "",
      phoneNumber: "",
      whatsappNumber: "",
      stateOfResidence: "",
      city: "",
      interestedInTraining: false,
      installationTypes: [],
      howDidYouHear: "",
      role: "",
      yearsOfExperience: "",
      skills: [],
      verificationType: "",
      certificates: [],
      cv: null,
      workPhotos: [],
      portfolioLink: "",
      projectLink: "",
      githubLink: "",
    },
  });

  const {
    handleSubmit,
    trigger,
    getValues, // Use getValues to read current form state
    formState: { isValid, errors }, // Destructure errors to check for validation status
  } = methods;

  const nextStep = async () => {
    let isStepValid = false;
    let fieldsToValidate: (keyof OnboardingData)[] = [];

    if (currentStep === 1) {
      if (accountInfoPage === 1) {
        fieldsToValidate = [
          "fullName",
          "email",
          "password",
          "phoneNumber",
          "whatsappNumber",
        ];
      } else {
        fieldsToValidate = [
          "stateOfResidence",
          "city",
          "installationTypes",
          "howDidYouHear",
        ];
      }
    } else if (currentStep === 2) {
      fieldsToValidate = ["role", "yearsOfExperience", "skills"];
    } else if (currentStep === 3) {
      const currentVerificationType = getValues("verificationType");
      fieldsToValidate = ["verificationType"]; // Always validate verification type selection
      if (currentVerificationType === "basic") {
        fieldsToValidate.push("cv", "workPhotos");
      } else if (currentVerificationType === "proof") {
        fieldsToValidate.push("portfolioLink");
      }
    }

    isStepValid = await trigger(fieldsToValidate as any); // Trigger validation for specific fields

    if (isStepValid) {
      if (currentStep === 1 && accountInfoPage === 1) {
        setAccountInfoPage(2);
      } else if (currentStep < 3) {
        setCurrentStep(currentStep + 1);
        setAccountInfoPage(1); // Reset account info page when moving to next step
      } else {
        handleSubmit(onSubmit)();
      }
    }
  };

  const prevStep = () => {
    // Handle Account Info step internal pagination
    if (currentStep === 1 && accountInfoPage === 2) {
      setAccountInfoPage(1);
      return;
    }

    // Handle moving to previous main step
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
      // Set account info page to 2 if going back to account info step
      if (currentStep - 1 === 1) {
        setAccountInfoPage(2);
      }
    }
  };

  const onSubmit: SubmitHandler<OnboardingData> = async (data) => {
    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));

    console.log("Onboarding completed:", data);
    setIsSubmitting(false);
    setIsComplete(true);
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return <AccountInfoStep currentPage={accountInfoPage} />;
      case 2:
        return <ExperienceInfoStep />;
      case 3:
        return <VerificationStep />;
      default:
        return <AccountInfoStep currentPage={accountInfoPage} />;
    }
  };

  const getStepState = (stepId: number) => {
    if (stepId < currentStep) return "completed";
    if (stepId === currentStep) return "current";
    return "upcoming";
  };

  const shouldShowBackButton = () => {
    return currentStep > 1 || (currentStep === 1 && accountInfoPage === 2);
  };

  const getNextButtonText = () => {
    if (currentStep === 1 && accountInfoPage === 1) return "Next";
    if (currentStep === 3) return "Complete Setup";
    return "Next";
  };

  // Helper function to render step icon based on status
  const getStepIcon = (
    status: "completed" | "current" | "upcoming",
    stepNumber: number
  ) => {
    if (status === "completed") {
      return (
        <div className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-medium transition-colors bg-purple-600 text-white flex-shrink-0">
          <Check className="w-5 h-5" />
        </div>
      );
    } else if (status === "current") {
      return (
        <div className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-medium transition-colors bg-purple-600 text-white flex-shrink-0">
          {stepNumber}
        </div>
      );
    } else {
      return (
        <div className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-medium transition-colors border-2 border-gray-300 bg-white text-gray-500 flex-shrink-0">
          {stepNumber}
        </div>
      );
    }
  };

  if (isComplete) {
    return <CompletionScreen />;
  }

  if (isSubmitting) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-purple-200 border-t-purple-600 rounded-full animate-spin mx-auto mb-4"></div>
          <h2 className="text-xl font-semibold text-gray-900 mb-2">
            Processing your application...
          </h2>
          <p className="text-gray-600">
            Please wait while we set up your account.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="h-screen bg-gray-50 overflow-hidden">
      <div className="flex h-full">
        {/* Left Sidebar - Progress Indicator */}
        <div className="hidden lg:flex w-[320px] bg-white shadow-sm flex-shrink-0">
          <div className="flex flex-col justify-center px-8 py-12 w-full">
            <div className="mb-12">
              <h2 className="text-xl font-bold text-gray-900 mb-2">
                Application Progress
              </h2>
              <p className="text-gray-600">Track your onboarding status</p>
            </div>

            <div className="space-y-6">
              {steps.map((step, index) => {
                const state = getStepState(step.id);
                return (
                  <motion.div
                    key={step.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start"
                  >
                    <div className="flex flex-col items-center flex-shrink-0">
                      {getStepIcon(state, step.id)}
                      {index < steps.length - 1 && (
                        <div
                          className={`w-px h-12 mt-2 ${
                            state === "completed" || state === "current"
                              ? "bg-purple-600"
                              : "bg-gray-200"
                          }`}
                        />
                      )}
                    </div>
                    <div className="ml-4">
                      <h3
                        className={`text-sm font-medium ${
                          state === "completed" || state === "current"
                            ? "text-purple-600"
                            : "text-gray-500"
                        }`}
                      >
                        {step.title}
                      </h3>
                      <p className="text-xs text-gray-500 mt-1">
                        {step.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Right Content Area (main scrollable part) */}
        <div className="flex-1 flex flex-col overflow-y-auto">
          {/* Mobile Progress Indicator */}
          <div className="lg:hidden bg-white border-b border-gray-200 px-4 py-4">
            <div className="flex items-center justify-between mb-2">
              <h1 className="text-lg font-semibold text-gray-900">
                Energy Pros Setup
              </h1>
              <span className="text-sm text-gray-500">
                Step {currentStep} of {steps.length}
              </span>
            </div>
            <div className="flex space-x-2">
              {steps.map((step) => {
                const state = getStepState(step.id);
                return (
                  <div
                    key={step.id}
                    className={`flex-1 h-2 rounded-full transition-colors ${
                      state === "completed"
                        ? "bg-purple-600"
                        : state === "current"
                        ? "bg-purple-600"
                        : "bg-gray-200"
                    }`}
                  />
                );
              })}
            </div>
          </div>

          {/* Main Form Content */}
          <div className="flex-1 px-4 py-8 lg:px-8 lg:py-12">
            <div className="max-w-2xl mx-auto">
              <FormProvider {...methods}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-white rounded-lg shadow-sm border border-gray-200 p-8"
                >
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

                  {/* Centralized Navigation Buttons */}
                  <div className="flex justify-between mt-8 pt-6 border-t border-gray-100">
                    <button
                      type="button"
                      onClick={prevStep}
                      disabled={!shouldShowBackButton()}
                      className={`flex items-center px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
                        !shouldShowBackButton()
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
                      className="flex items-center px-6 py-2 bg-purple-600 text-white text-sm font-medium rounded-lg hover:bg-purple-700 transition-colors focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
                    >
                      {getNextButtonText()}
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </button>
                  </div>
                </motion.div>
              </FormProvider>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SlothUIOnboarding;

