// import React from 'react';
// import { User, Building } from 'lucide-react';
// import FloatingLabelInput from '../FloatingLabelInput';

// const StepTwo: React.FC = () => {
//   return (
//     <div className="space-y-6">
//       <div className="text-center mb-8">
//         <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
//           <User className="w-8 h-8 text-green-600" />
//         </div>
//         <h2 className="text-2xl font-bold text-gray-900 mb-2">
//           Personal Details
//         </h2>
//         <p className="text-gray-600">
//           Tell us a bit about yourself so we can personalize your experience
//         </p>
//       </div>

//       <div className="space-y-6">
//         <div className="grid grid-cols-2 gap-4">
//           <FloatingLabelInput
//             name="firstName"
//             label="First Name"
//             required
//           />
          
//           <FloatingLabelInput
//             name="lastName"
//             label="Last Name"
//             required
//           />
//         </div>
        
//         <FloatingLabelInput
//           name="phone"
//           label="Phone Number"
//           type="tel"
//           required
//         />
        
//         <FloatingLabelInput
//           name="company"
//           label="Company Name"
//           required
//         />
//       </div>

//       <div className="bg-blue-50 rounded-lg p-4">
//         <div className="flex items-start space-x-3">
//           <Building className="w-5 h-5 text-blue-500 mt-0.5" />
//           <div>
//             <h4 className="text-sm font-medium text-gray-900">Professional Profile</h4>
//             <p className="text-xs text-gray-600 mt-1">
//               This information helps us tailor SlothUI to your business needs.
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default StepTwo;

"use client";

import type React from "react";
import { useFormContext } from "react-hook-form";
import { Award, MapPin } from "lucide-react";

const experienceLevelOptions = [
  { value: "beginner", label: "Beginner (0-1 years)" },
  { value: "intermediate", label: "Intermediate (2-5 years)" },
  { value: "experienced", label: "Experienced (5-10 years)" },
  { value: "expert", label: "Expert (10+ years)" },
];

const serviceOptions = [
  "Solar Panel Installation",
  "Electrical Wiring",
  "System Design",
  "Maintenance & Repair",
  "Energy Auditing",
  "Battery Systems",
  "Grid-tie Systems",
  "Off-grid Systems",
];

const StepTwo: React.FC = () => {
  const {
    register,
    watch,
    setValue,
    formState: { errors },
  } = useFormContext();

  const selectedServices = watch("services") || [];

  const handleServiceToggle = (service: string) => {
    const currentServices = selectedServices || [];
    const updatedServices = currentServices.includes(service)
      ? currentServices.filter((s: string) => s !== service)
      : [...currentServices, service];
    setValue("services", updatedServices);
  };

  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <Award className="w-8 h-8 text-green-600" />
        </div>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">
          Experience & Services
        </h2>
        <p className="text-gray-600">
          Tell us about your expertise and location
        </p>
      </div>

      <div className="space-y-6">
        <div>
          <div className="relative">
            <Award className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <select
              {...register("experienceLevel", {
                required: "Please select your experience level",
              })}
              className={`w-full pl-12 pr-4 py-3 border rounded-lg focus:outline-none focus:ring-2 transition-colors appearance-none bg-white ${
                errors.experienceLevel
                  ? "border-red-300 focus:border-red-500 focus:ring-red-200"
                  : "border-gray-300 focus:border-indigo-500 focus:ring-indigo-200"
              }`}
            >
              <option value="">Select Experience Level</option>
              {experienceLevelOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
          {errors.experienceLevel && (
            <p className="mt-1 text-sm text-red-600 flex items-center">
              <span className="mr-1">⚠</span>
              {errors.experienceLevel.message as string}
            </p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-3">
            Services You Offer <span className="text-red-500">*</span>
          </label>
          <div className="grid grid-cols-1 gap-2">
            {serviceOptions.map((service) => (
              <button
                key={service}
                type="button"
                onClick={() => handleServiceToggle(service)}
                className={`p-3 text-sm border rounded-lg transition-colors text-left ${
                  selectedServices.includes(service)
                    ? "border-indigo-500 bg-indigo-50 text-indigo-700"
                    : "border-gray-200 hover:border-gray-300 text-gray-700"
                }`}
              >
                {service}
              </button>
            ))}
          </div>
          <input
            type="hidden"
            {...register("services", {
              validate: (value) => {
                if (!value || value.length === 0) {
                  return "Please select at least one service";
                }
                return true;
              },
            })}
          />
          {errors.services && (
            <p className="mt-1 text-sm text-red-600 flex items-center">
              <span className="mr-1">⚠</span>
              {errors.services.message as string}
            </p>
          )}
        </div>

        <div>
          <div className="relative">
            <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              {...register("location", {
                required: "Location is required",
                minLength: {
                  value: 2,
                  message: "Location must be at least 2 characters",
                },
              })}
              type="text"
              placeholder="Your Location (City, State)"
              className={`w-full pl-12 pr-4 py-3 border rounded-lg focus:outline-none focus:ring-2 transition-colors ${
                errors.location
                  ? "border-red-300 focus:border-red-500 focus:ring-red-200"
                  : "border-gray-300 focus:border-indigo-500 focus:ring-indigo-200"
              }`}
            />
          </div>
          {errors.location && (
            <p className="mt-1 text-sm text-red-600 flex items-center">
              <span className="mr-1">⚠</span>
              {errors.location.message as string}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default StepTwo;
