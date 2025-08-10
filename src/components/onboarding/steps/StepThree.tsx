// import React from 'react';
// import { useFormContext } from 'react-hook-form';
// import { Settings, Bell } from 'lucide-react';
// import FloatingLabelSelect from '../FloatingLabelSelect';

// const roleOptions = [
//   { value: 'developer', label: 'Developer' },
//   { value: 'designer', label: 'Designer' },
//   { value: 'product-manager', label: 'Product Manager' },
//   { value: 'founder', label: 'Founder/CEO' },
//   { value: 'other', label: 'Other' },
// ];

// const interestOptions = [
//   'UI Components',
//   'Design Systems',
//   'React Development',
//   'TypeScript',
//   'Tailwind CSS',
//   'Accessibility',
//   'Performance',
//   'Testing',
// ];

// const StepThree: React.FC = () => {
//   const { register, watch, setValue, formState: { errors } } = useFormContext();
//   const selectedInterests = watch('interests') || [];
//   const notifications = watch('notifications');

//   const handleInterestToggle = (interest: string) => {
//     const currentInterests = selectedInterests || [];
//     const updatedInterests = currentInterests.includes(interest)
//       ? currentInterests.filter((i: string) => i !== interest)
//       : [...currentInterests, interest];
//     setValue('interests', updatedInterests);
//   };

//   return (
//     <div className="space-y-6">
//       <div className="text-center mb-8">
//         <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
//           <Settings className="w-8 h-8 text-purple-600" />
//         </div>
//         <h2 className="text-2xl font-bold text-gray-900 mb-2">
//           Preferences
//         </h2>
//         <p className="text-gray-600">
//           Customize your SlothUI experience based on your interests and role
//         </p>
//       </div>

//       <div className="space-y-6">
//         <FloatingLabelSelect
//           name="role"
//           label="Your Role"
//           options={roleOptions}
//           required
//         />

//         <div>
//           <label className="block text-sm font-medium text-gray-700 mb-3">
//             What interests you most? <span className="text-red-500">*</span>
//           </label>
//           <div className="grid grid-cols-2 gap-2">
//             {interestOptions.map((interest) => (
//               <button
//                 key={interest}
//                 type="button"
//                 onClick={() => handleInterestToggle(interest)}
//                 className={`p-3 text-sm border rounded-lg transition-colors text-left ${
//                   selectedInterests.includes(interest)
//                     ? 'border-indigo-500 bg-indigo-50 text-indigo-700'
//                     : 'border-gray-200 hover:border-gray-300 text-gray-700'
//                 }`}
//               >
//                 {interest}
//               </button>
//             ))}
//           </div>
//           {errors.interests && (
//             <p className="text-xs text-red-500 mt-1">{errors.interests.message as string}</p>
//           )}
//         </div>

//         <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
//           <div className="flex items-center space-x-3">
//             <Bell className="w-5 h-5 text-gray-400" />
//             <div>
//               <h4 className="text-sm font-medium text-gray-900">Email Notifications</h4>
//               <p className="text-xs text-gray-600">Get updates about new features and tips</p>
//             </div>
//           </div>
//           <label className="relative inline-flex items-center cursor-pointer">
//             <input
//               {...register('notifications')}
//               type="checkbox"
//               className="sr-only peer"
//             />
//             <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-indigo-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-indigo-600"></div>
//           </label>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default StepThree;

"use client";

import type React from "react";
import { useFormContext } from "react-hook-form";
import { Shield, Link } from "lucide-react";

const verificationMethodOptions = [
  { value: "portfolio", label: "Portfolio/Website" },
  { value: "certification", label: "Professional Certification" },
  { value: "references", label: "Client References" },
  { value: "linkedin", label: "LinkedIn Profile" },
];

const goalOptions = [
  "Find new clients",
  "Network with professionals",
  "Learn new skills",
  "Share knowledge",
  "Find business partners",
  "Access training programs",
  "Market my services",
  "Stay updated with industry trends",
];

const StepThree: React.FC = () => {
  const {
    register,
    watch,
    setValue,
    formState: { errors },
  } = useFormContext();

  const selectedGoals = watch("goals") || [];
  const verificationMethod = watch("verificationMethod");

  const handleGoalToggle = (goal: string) => {
    const currentGoals = selectedGoals || [];
    const updatedGoals = currentGoals.includes(goal)
      ? currentGoals.filter((g: string) => g !== goal)
      : [...currentGoals, goal];
    setValue("goals", updatedGoals);
  };

  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <Shield className="w-8 h-8 text-purple-600" />
        </div>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">
          Verification & Goals
        </h2>
        <p className="text-gray-600">
          Help us verify your credentials and understand your goals
        </p>
      </div>

      <div className="space-y-6">
        <div>
          <div className="relative">
            <Shield className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <select
              {...register("verificationMethod", {
                required: "Please select a verification method",
              })}
              className={`w-full pl-12 pr-4 py-3 border rounded-lg focus:outline-none focus:ring-2 transition-colors appearance-none bg-white ${
                errors.verificationMethod
                  ? "border-red-300 focus:border-red-500 focus:ring-red-200"
                  : "border-gray-300 focus:border-indigo-500 focus:ring-indigo-200"
              }`}
            >
              <option value="">Select Verification Method</option>
              {verificationMethodOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
          {errors.verificationMethod && (
            <p className="mt-1 text-sm text-red-600 flex items-center">
              <span className="mr-1">⚠</span>
              {errors.verificationMethod.message as string}
            </p>
          )}
        </div>

        {verificationMethod === "portfolio" && (
          <div>
            <div className="relative">
              <Link className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                {...register("portfolioUrl", {
                  required:
                    verificationMethod === "portfolio"
                      ? "Portfolio URL is required"
                      : false,
                  pattern: {
                    value: /^https?:\/\/.+/,
                    message:
                      "Please enter a valid URL (starting with http:// or https://)",
                  },
                })}
                type="url"
                placeholder="https://your-portfolio.com"
                className={`w-full pl-12 pr-4 py-3 border rounded-lg focus:outline-none focus:ring-2 transition-colors ${
                  errors.portfolioUrl
                    ? "border-red-300 focus:border-red-500 focus:ring-red-200"
                    : "border-gray-300 focus:border-indigo-500 focus:ring-indigo-200"
                }`}
              />
            </div>
            {errors.portfolioUrl && (
              <p className="mt-1 text-sm text-red-600 flex items-center">
                <span className="mr-1">⚠</span>
                {errors.portfolioUrl.message as string}
              </p>
            )}
          </div>
        )}

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-3">
            Your Goals <span className="text-red-500">*</span>
          </label>
          <div className="grid grid-cols-1 gap-2">
            {goalOptions.map((goal) => (
              <button
                key={goal}
                type="button"
                onClick={() => handleGoalToggle(goal)}
                className={`p-3 text-sm border rounded-lg transition-colors text-left ${
                  selectedGoals.includes(goal)
                    ? "border-indigo-500 bg-indigo-50 text-indigo-700"
                    : "border-gray-200 hover:border-gray-300 text-gray-700"
                }`}
              >
                {goal}
              </button>
            ))}
          </div>
          <input
            type="hidden"
            {...register("goals", {
              validate: (value) => {
                if (!value || value.length === 0) {
                  return "Please select at least one goal";
                }
                return true;
              },
            })}
          />
          {errors.goals && (
            <p className="mt-1 text-sm text-red-600 flex items-center">
              <span className="mr-1">⚠</span>
              {errors.goals.message as string}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default StepThree;
