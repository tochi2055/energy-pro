// "use client";

// import type React from "react";
// import { useFormContext } from "react-hook-form";
// import { Shield, Link } from "lucide-react";

// const verificationMethodOptions = [
//   { value: "portfolio", label: "Portfolio/Website" },
//   { value: "certification", label: "Professional Certification" },
//   { value: "references", label: "Client References" },
//   { value: "linkedin", label: "LinkedIn Profile" },
// ];

// const goalOptions = [
//   "Find new clients",
//   "Network with professionals",
//   "Learn new skills",
//   "Share knowledge",
//   "Find business partners",
//   "Access training programs",
//   "Market my services",
//   "Stay updated with industry trends",
// ];

// const StepThree: React.FC = () => {
//   const {
//     register,
//     watch,
//     setValue,
//     formState: { errors },
//   } = useFormContext();

//   const selectedGoals = watch("goals") || [];
//   const verificationMethod = watch("verificationMethod");

//   const handleGoalToggle = (goal: string) => {
//     const currentGoals = selectedGoals || [];
//     const updatedGoals = currentGoals.includes(goal)
//       ? currentGoals.filter((g: string) => g !== goal)
//       : [...currentGoals, goal];
//     setValue("goals", updatedGoals);
//   };

//   return (
//     <div className="space-y-6">
//       <div className="text-center mb-8">
//         <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
//           <Shield className="w-8 h-8 text-purple-600" />
//         </div>
//         <h2 className="text-2xl font-bold text-gray-900 mb-2">
//           Verification & Goals
//         </h2>
//         <p className="text-gray-600">
//           Help us verify your credentials and understand your goals
//         </p>
//       </div>

//       <div className="space-y-6">
//         <div>
//           <div className="relative">
//             <Shield className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
//             <select
//               {...register("verificationMethod", {
//                 required: "Please select a verification method",
//               })}
//               className={`w-full pl-12 pr-4 py-3 border rounded-lg focus:outline-none focus:ring-2 transition-colors appearance-none bg-white ${
//                 errors.verificationMethod
//                   ? "border-red-300 focus:border-red-500 focus:ring-red-200"
//                   : "border-gray-300 focus:border-indigo-500 focus:ring-indigo-200"
//               }`}
//             >
//               <option value="">Select Verification Method</option>
//               {verificationMethodOptions.map((option) => (
//                 <option key={option.value} value={option.value}>
//                   {option.label}
//                 </option>
//               ))}
//             </select>
//           </div>
//           {errors.verificationMethod && (
//             <p className="mt-1 text-sm text-red-600 flex items-center">
//               <span className="mr-1">⚠</span>
//               {errors.verificationMethod.message as string}
//             </p>
//           )}
//         </div>

//         {verificationMethod === "portfolio" && (
//           <div>
//             <div className="relative">
//               <Link className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
//               <input
//                 {...register("portfolioUrl", {
//                   required:
//                     verificationMethod === "portfolio"
//                       ? "Portfolio URL is required"
//                       : false,
//                   pattern: {
//                     value: /^https?:\/\/.+/,
//                     message:
//                       "Please enter a valid URL (starting with http:// or https://)",
//                   },
//                 })}
//                 type="url"
//                 placeholder="https://your-portfolio.com"
//                 className={`w-full pl-12 pr-4 py-3 border rounded-lg focus:outline-none focus:ring-2 transition-colors ${
//                   errors.portfolioUrl
//                     ? "border-red-300 focus:border-red-500 focus:ring-red-200"
//                     : "border-gray-300 focus:border-indigo-500 focus:ring-indigo-200"
//                 }`}
//               />
//             </div>
//             {errors.portfolioUrl && (
//               <p className="mt-1 text-sm text-red-600 flex items-center">
//                 <span className="mr-1">⚠</span>
//                 {errors.portfolioUrl.message as string}
//               </p>
//             )}
//           </div>
//         )}

//         <div>
//           <label className="block text-sm font-medium text-gray-700 mb-3">
//             Your Goals <span className="text-red-500">*</span>
//           </label>
//           <div className="grid grid-cols-1 gap-2">
//             {goalOptions.map((goal) => (
//               <button
//                 key={goal}
//                 type="button"
//                 onClick={() => handleGoalToggle(goal)}
//                 className={`p-3 text-sm border rounded-lg transition-colors text-left ${
//                   selectedGoals.includes(goal)
//                     ? "border-indigo-500 bg-indigo-50 text-indigo-700"
//                     : "border-gray-200 hover:border-gray-300 text-gray-700"
//                 }`}
//               >
//                 {goal}
//               </button>
//             ))}
//           </div>
//           <input
//             type="hidden"
//             {...register("goals", {
//               validate: (value) => {
//                 if (!value || value.length === 0) {
//                   return "Please select at least one goal";
//                 }
//                 return true;
//               },
//             })}
//           />
//           {errors.goals && (
//             <p className="mt-1 text-sm text-red-600 flex items-center">
//               <span className="mr-1">⚠</span>
//               {errors.goals.message as string}
//             </p>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default StepThree;

"use client";

import type React from "react";
import { motion } from "framer-motion";
import FloatingLabelSelect from "../FloatingLabelSelect";
import { Button } from "@/components/ui/button";
import type { EnergyOnboardingData } from "../EnergyOnboardingWizard";

interface StepThreeProps {
  formData: EnergyOnboardingData;
  updateFormData: (newData: Partial<EnergyOnboardingData>) => void;
  nextStep: () => void;
  prevStep: () => void;
}

const serviceTypeOptions = [
  { value: "residential", label: "Residential" },
  { value: "commercial", label: "Commercial" },
  { value: "industrial", label: "Industrial" },
];

const installationGoalsOptions = [
  { value: "cost_saving", label: "Cost Saving" },
  { value: "energy_independence", label: "Energy Independence" },
  { value: "environmental_impact", label: "Environmental Impact" },
  { value: "backup_power", label: "Backup Power" },
  { value: "new_installation", label: "New Installation" },
  { value: "upgrade", label: "System Upgrade" },
];

const preferredContactMethodOptions = [
  { value: "phone", label: "Phone Call" },
  { value: "email", label: "Email" },
  { value: "whatsapp", label: "WhatsApp" },
];

const StepThree: React.FC<StepThreeProps> = ({
  formData,
  updateFormData,
  nextStep,
  prevStep,
}) => {
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    updateFormData({ [name]: value });
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;
    let updatedGoals = formData.installationGoals;
    if (checked) {
      updatedGoals = [...updatedGoals, value];
    } else {
      updatedGoals = updatedGoals.filter((goal) => goal !== value);
    }
    updateFormData({ installationGoals: updatedGoals });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Basic validation for this step
    if (
      formData.serviceType &&
      formData.installationGoals.length > 0 &&
      formData.preferredContactMethod
    ) {
      nextStep();
    } else {
      alert("Please fill in all required fields.");
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="max-w-2xl mx-auto space-y-6"
    >
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">
          Service & Goals
        </h2>
        <p className="text-gray-600">Tell us what you're looking for</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <FloatingLabelSelect
          name="serviceType"
          label="Type of Service Needed"
          options={serviceTypeOptions}
          placeholder="Select service type"
          value={formData.serviceType}
          onChange={handleChange}
          required
        />

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Your Primary Installation Goals{" "}
            <span className="text-red-500">*</span>
          </label>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {installationGoalsOptions.map((goal) => (
              <label
                key={goal.value}
                className={`flex items-center p-3 border rounded-md cursor-pointer transition-colors ${
                  formData.installationGoals.includes(goal.value)
                    ? "border-purple-500 bg-purple-50"
                    : "border-gray-300 hover:border-gray-400"
                }`}
              >
                <input
                  type="checkbox"
                  name="installationGoals"
                  value={goal.value}
                  checked={formData.installationGoals.includes(goal.value)}
                  onChange={handleCheckboxChange}
                  className="form-checkbox h-4 w-4 text-purple-600 rounded focus:ring-purple-500"
                />
                <span className="ml-2 text-sm text-gray-700">{goal.label}</span>
              </label>
            ))}
          </div>
          {formData.installationGoals.length === 0 && (
            <p className="mt-1 text-xs text-red-500">
              Please select at least one goal.
            </p>
          )}
        </div>

        <FloatingLabelSelect
          name="preferredContactMethod"
          label="Preferred Contact Method"
          options={preferredContactMethodOptions}
          placeholder="Select contact method"
          value={formData.preferredContactMethod}
          onChange={handleChange}
          required
        />

        <div className="flex justify-between mt-8">
          <Button variant="outline" onClick={prevStep}>
            Back
          </Button>
          <Button type="submit">Next</Button>
        </div>
      </form>
    </motion.div>
  );
};

export default StepThree;
