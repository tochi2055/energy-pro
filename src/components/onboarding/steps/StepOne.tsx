// import React from 'react';
// import { Mail, Lock } from 'lucide-react';
// import FloatingLabelInput from '../FloatingLabelInput';

// const StepOne: React.FC = () => {
//   return (
//     <div className="space-y-6">
//       <div className="text-center mb-8">
//         <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
//           <Mail className="w-8 h-8 text-indigo-600" />
//         </div>
//         <h2 className="text-2xl font-bold text-gray-900 mb-2">
//           Let's get started
//         </h2>
//         <p className="text-gray-600">
//           Create your account to begin your journey with SlothUI
//         </p>
//       </div>

//       <div className="space-y-6">
//         <FloatingLabelInput
//           name="email"
//           label="Email Address"
//           type="email"
//           required
//         />
        
//         <FloatingLabelInput
//           name="password"
//           label="Password"
//           type="password"
//           required
//         />
        
//         <FloatingLabelInput
//           name="confirmPassword"
//           label="Confirm Password"
//           type="password"
//           required
//         />
//       </div>

//       <div className="bg-gray-50 rounded-lg p-4">
//         <div className="flex items-start space-x-3">
//           <Lock className="w-5 h-5 text-gray-400 mt-0.5" />
//           <div>
//             <h4 className="text-sm font-medium text-gray-900">Secure & Private</h4>
//             <p className="text-xs text-gray-600 mt-1">
//               Your information is encrypted and never shared with third parties.
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default StepOne;

import type React from "react";
import { useFormContext } from "react-hook-form";
import { Mail, User, Phone, Building } from "lucide-react";

const businessTypeOptions = [
  { value: "installer", label: "Solar Installer" },
  { value: "electrician", label: "Electrician" },
  { value: "contractor", label: "General Contractor" },
  { value: "engineer", label: "Engineer" },
  { value: "consultant", label: "Energy Consultant" },
  { value: "other", label: "Other" },
];

const StepOne: React.FC = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <User className="w-8 h-8 text-indigo-600" />
        </div>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">
          Profile Information
        </h2>
        <p className="text-gray-600">
          Tell us about yourself and your business
        </p>
      </div>

      <div className="space-y-6">
        <div>
          <div className="relative">
            <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              {...register("fullName", {
                required: "Full name is required",
                minLength: {
                  value: 2,
                  message: "Full name must be at least 2 characters",
                },
              })}
              type="text"
              placeholder="Full Name"
              className={`w-full pl-12 pr-4 py-3 border rounded-lg focus:outline-none focus:ring-2 transition-colors ${
                errors.fullName
                  ? "border-red-300 focus:border-red-500 focus:ring-red-200"
                  : "border-gray-300 focus:border-indigo-500 focus:ring-indigo-200"
              }`}
            />
          </div>
          {errors.fullName && (
            <p className="mt-1 text-sm text-red-600 flex items-center">
              <span className="mr-1">⚠</span>
              {errors.fullName.message as string}
            </p>
          )}
        </div>

        <div>
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Please enter a valid email address",
                },
              })}
              type="email"
              placeholder="Email Address"
              className={`w-full pl-12 pr-4 py-3 border rounded-lg focus:outline-none focus:ring-2 transition-colors ${
                errors.email
                  ? "border-red-300 focus:border-red-500 focus:ring-red-200"
                  : "border-gray-300 focus:border-indigo-500 focus:ring-indigo-200"
              }`}
            />
          </div>
          {errors.email && (
            <p className="mt-1 text-sm text-red-600 flex items-center">
              <span className="mr-1">⚠</span>
              {errors.email.message as string}
            </p>
          )}
        </div>

        <div>
          <div className="relative">
            <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              {...register("phone", {
                required: "Phone number is required",
                pattern: {
                  value: /^\+234[0-9]{10}$/,
                  message:
                    "Please enter a valid Nigerian phone number with country code (e.g., +234 8012345678)",
                },
                validate: (value) => {
                  if (!value.startsWith("+")) {
                    return "Please include country code (e.g., +234 for Nigeria)";
                  }
                  if (value.length < 10) {
                    return "Phone number is too short";
                  }
                  if (value.length > 15) {
                    return "Phone number is too long";
                  }
                  return true;
                },
              })}
              type="tel"
              placeholder="+234 8012345678"
              className={`w-full pl-12 pr-4 py-3 border rounded-lg focus:outline-none focus:ring-2 transition-colors ${
                errors.phone
                  ? "border-red-300 focus:border-red-500 focus:ring-red-200"
                  : "border-gray-300 focus:border-indigo-500 focus:ring-indigo-200"
              }`}
            />
          </div>
          {errors.phone && (
            <p className="mt-1 text-sm text-red-600 flex items-center">
              <span className="mr-1">⚠</span>
              {errors.phone.message as string}
            </p>
          )}
        </div>

        <div>
          <div className="relative">
            <Building className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <select
              {...register("businessType", {
                required: "Please select your business type",
              })}
              className={`w-full pl-12 pr-4 py-3 border rounded-lg focus:outline-none focus:ring-2 transition-colors appearance-none bg-white ${
                errors.businessType
                  ? "border-red-300 focus:border-red-500 focus:ring-red-200"
                  : "border-gray-300 focus:border-indigo-500 focus:ring-indigo-200"
              }`}
            >
              <option value="">Select Business Type</option>
              {businessTypeOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
          {errors.businessType && (
            <p className="mt-1 text-sm text-red-600 flex items-center">
              <span className="mr-1">⚠</span>
              {errors.businessType.message as string}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default StepOne;
