// "use client"

// import type React from "react"
// import { motion, AnimatePresence } from "framer-motion"
// import { useFormContext } from "react-hook-form"
// import { User } from "lucide-react"
// import FloatingLabelInput from "../FloatingLabelInput"
// import FloatingLabelSelect from "../FloatingLabelSelect"

// const nigerianStates = [
//   "Abia",
//   "Adamawa",
//   "Akwa Ibom",
//   "Anambra",
//   "Bauchi",
//   "Bayelsa",
//   "Benue",
//   "Borno",
//   "Cross River",
//   "Delta",
//   "Ebonyi",
//   "Edo",
//   "Ekiti",
//   "Enugu",
//   "Gombe",
//   "Imo",
//   "Jigawa",
//   "Kaduna",
//   "Kano",
//   "Katsina",
//   "Kebbi",
//   "Kogi",
//   "Kwara",
//   "Lagos",
//   "Nasarawa",
//   "Niger",
//   "Ogun",
//   "Ondo",
//   "Osun",
//   "Oyo",
//   "Plateau",
//   "Rivers",
//   "Sokoto",
//   "Taraba",
//   "Yobe",
//   "Zamfara",
//   "FCT",
// ].map((state) => ({ value: state.toLowerCase().replace(/\s+/g, "-"), label: state }))

// const installationTypes = [
//   "Solar panels",
//   "Inverter systems",
//   "Generator installations",
//   "Battery backup systems",
//   "Electrical wiring",
//   "CCTV systems",
//   "Other energy systems",
// ]

// const howDidYouHearOptions = [
//   { value: "social-media", label: "Social Media" },
//   { value: "google-search", label: "Google Search" },
//   { value: "friend-referral", label: "Friend/Referral" },
//   { value: "advertisement", label: "Advertisement" },
//   { value: "website", label: "Website" },
//   { value: "other", label: "Other" },
// ]

// interface AccountInfoStepProps {
//   currentPage: number
// }

// const AccountInfoStep: React.FC<AccountInfoStepProps> = ({ currentPage }) => {
//   const {
//     register,
//     watch,
//     setValue,
//     formState: { errors },
//   } = useFormContext()

//   const selectedInstallationTypes = watch("installationTypes") || []
//   const interestedInTraining = watch("interestedInTraining")

//   const handleInstallationTypeToggle = (type: string) => {
//     const currentTypes = selectedInstallationTypes || []
//     const updatedTypes = currentTypes.includes(type)
//       ? currentTypes.filter((t: string) => t !== type)
//       : [...currentTypes, type]
//     setValue("installationTypes", updatedTypes)
//   }

//   const renderPage1 = () => (
//     <div className="space-y-6">
//       <div className="text-center mb-8">
//         <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
//           <User className="w-8 h-8 text-indigo-600" />
//         </div>
//         <h2 className="text-2xl font-bold text-gray-900 mb-2">Account Information</h2>
//         <p className="text-gray-600">Let's start with your basic information</p>
//       </div>

//       <div className="space-y-6">
//         <FloatingLabelInput name="fullName" label="Full Name" required />

//         <FloatingLabelInput name="email" label="Email Address" type="email" required />

//         <FloatingLabelInput name="password" label="Password" type="password" required />

//         <FloatingLabelInput name="phoneNumber" label="Phone Number" type="tel" required />

//         <FloatingLabelInput name="whatsappNumber" label="WhatsApp Number" type="tel" required />
//       </div>
//     </div>
//   )

//   const renderPage2 = () => (
//     <div className="space-y-6">
//       <div className="text-center mb-8">
//         <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
//           <User className="w-8 h-8 text-indigo-600" />
//         </div>
//         <h2 className="text-2xl font-bold text-gray-900 mb-2">Location & Interests</h2>
//         <p className="text-gray-600">Tell us about your location and training interests</p>
//       </div>

//       <div className="space-y-6">
//         <FloatingLabelSelect name="stateOfResidence" label="State of Residence" options={nigerianStates} required />

//         <FloatingLabelInput name="city" label="City" required />

//         <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
//           <div>
//             <h4 className="text-sm font-medium text-gray-900">Interested in Training</h4>
//             <p className="text-xs text-gray-600">Would you like to receive training opportunities?</p>
//           </div>
//           <label className="relative inline-flex items-center cursor-pointer">
//             <input {...register("interestedInTraining")} type="checkbox" className="sr-only peer" />
//             <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-indigo-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-indigo-600"></div>
//           </label>
//         </div>

//         <div>
//           <label className="block text-sm font-medium text-gray-700 mb-3">
//             Installation Types <span className="text-red-500">*</span>
//           </label>
//           <div className="grid grid-cols-1 gap-2">
//             {installationTypes.map((type) => (
//               <button
//                 key={type}
//                 type="button"
//                 onClick={() => handleInstallationTypeToggle(type)}
//                 className={`p-3 text-sm border rounded-lg transition-colors text-left ${
//                   selectedInstallationTypes.includes(type)
//                     ? "border-indigo-500 bg-indigo-50 text-indigo-700"
//                     : "border-gray-200 hover:border-gray-300 text-gray-700"
//                 }`}
//               >
//                 {type}
//               </button>
//             ))}
//           </div>
//           {errors.installationTypes && (
//             <p className="text-xs text-red-500 mt-1">{errors.installationTypes.message as string}</p>
//           )}
//         </div>

//         <FloatingLabelSelect
//           name="howDidYouHear"
//           label="How did you hear about us?"
//           options={howDidYouHearOptions}
//           required
//         />
//       </div>
//     </div>
//   )

//   return (
//     <AnimatePresence mode="wait">
//       <motion.div
//         key={currentPage}
//         initial={{ opacity: 0, x: 20 }}
//         animate={{ opacity: 1, x: 0 }}
//         exit={{ opacity: 0, x: -20 }}
//         transition={{ duration: 0.3 }}
//       >
//         {currentPage === 1 ? renderPage1() : renderPage2()}
//       </motion.div>
//     </AnimatePresence>
//   )
// }

// export default AccountInfoStep

"use client";

import type React from "react";
import { Mail, Lock, Phone, Building, Users } from "lucide-react";
import { motion } from "framer-motion";
import FloatingLabelInput from "../FloatingLabelInput";
import FloatingLabelSelect from "../FloatingLabelSelect";
import { useFormContext } from "react-hook-form";
import type { OnboardingData } from "../SlothUIOnboarding";

interface AccountInfoStepProps {
  currentPage: number;
}

const states = [
  { value: "lagos", label: "Lagos" },
  { value: "abuja", label: "Abuja" },
  { value: "rivers", label: "Rivers" },
  { value: "ogun", label: "Ogun" },
];

const installationTypes = [
  { value: "solar", label: "Solar Panel Installation" },
  { value: "inverter", label: "Inverter Installation" },
  { value: "battery", label: "Battery Storage Installation" },
  { value: "generator", label: "Generator Installation" },
  { value: "ev_charger", label: "EV Charger Installation" },
];

const howDidYouHearOptions = [
  { value: "social_media", label: "Social Media" },
  { value: "friend", label: "Friend/Colleague" },
  { value: "online_search", label: "Online Search" },
  { value: "advertisement", label: "Advertisement" },
  { value: "other", label: "Other" },
];

const AccountInfoStep: React.FC<AccountInfoStepProps> = ({ currentPage }) => {
  const {
    register,
    watch,
    setValue,
    formState: { errors },
  } = useFormContext<OnboardingData>();
  const selectedInstallationTypes = watch("installationTypes") || [];

  const handleInstallationTypeChange = (type: string) => {
    const currentTypes = selectedInstallationTypes;
    if (currentTypes.includes(type)) {
      setValue(
        "installationTypes",
        currentTypes.filter((t) => t !== type),
        { shouldValidate: true }
      );
    } else {
      setValue("installationTypes", [...currentTypes, type], {
        shouldValidate: true,
      });
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
          Account Information
        </h2>
        <p className="text-gray-600">
          Tell us about yourself and your contact details
        </p>
      </div>

      {currentPage === 1 && (
        <motion.div
          key="page1"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.3 }}
          className="space-y-6"
        >
          <FloatingLabelInput
            name="fullName"
            label="Full Name"
            required
            icon={<Users />}
            rules={{
              minLength: {
                value: 3,
                message: "Full Name must be at least 3 characters",
              },
            }}
          />
          <FloatingLabelInput
            name="email"
            label="Email Address"
            type="email"
            required
            icon={<Mail />}
            rules={{
              pattern: {
                value: /^\S+@\S+$/i,
                message: "Invalid email address",
              },
            }}
          />
          <FloatingLabelInput
            name="password"
            label="Password"
            type="password"
            required
            icon={<Lock />}
            rules={{
              minLength: {
                value: 8,
                message: "Password must be at least 8 characters",
              },
              pattern: {
                value:
                  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                message:
                  "Password must contain uppercase, lowercase, number, and special character",
              },
            }}
          />
          <FloatingLabelInput
            name="phoneNumber"
            label="Phone Number"
            type="tel"
            required
            icon={<Phone />}
            rules={{
              pattern: {
                value: /^\d{10,15}$/,
                message: "Invalid phone number",
              },
            }}
          />
          <FloatingLabelInput
            name="whatsappNumber"
            label="WhatsApp Number"
            type="tel"
            required
            icon={<Phone />}
            rules={{
              pattern: {
                value: /^\d{10,15}$/,
                message: "Invalid WhatsApp number",
              },
            }}
          />
        </motion.div>
      )}

      {currentPage === 2 && (
        <motion.div
          key="page2"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.3 }}
          className="space-y-6"
        >
          <FloatingLabelSelect
            name="stateOfResidence"
            label="State of Residence"
            options={states}
            placeholder="Select your state"
            required
            value={watch("stateOfResidence") || ""}
            onChange={(e) =>
              setValue("stateOfResidence", e.target.value, {
                shouldValidate: true,
              })
            }
          />
          <FloatingLabelInput
            name="city"
            label="City"
            required
            icon={<Building />}
            rules={{
              minLength: {
                value: 2,
                message: "City must be at least 2 characters",
              },
            }}
          />

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Installation Types You Handle{" "}
              <span className="text-red-500">*</span>
            </label>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {installationTypes.map((type) => (
                <label
                  key={type.value}
                  className={`flex items-center p-3 border rounded-md cursor-pointer transition-colors ${
                    selectedInstallationTypes.includes(type.value)
                      ? "border-purple-500 bg-purple-50"
                      : "border-gray-300 hover:border-gray-400"
                  }`}
                >
                  <input
                    type="checkbox"
                    value={type.value}
                    checked={selectedInstallationTypes.includes(type.value)}
                    onChange={() => handleInstallationTypeChange(type.value)}
                    className="form-checkbox h-4 w-4 text-purple-600 rounded focus:ring-purple-500"
                  />
                  <span className="ml-2 text-sm text-gray-700">
                    {type.label}
                  </span>
                </label>
              ))}
            </div>
            {errors.installationTypes && (
              <p className="mt-1 text-xs text-red-500">
                {errors.installationTypes.message as string}
              </p>
            )}
            {/* Hidden input to register the field for validation */}
            <input
              type="hidden"
              {...register("installationTypes", {
                validate: (value) =>
                  (value && value.length > 0) ||
                  "Please select at least one installation type",
              })}
            />
          </div>

          <FloatingLabelSelect
            name="howDidYouHear"
            label="How did you hear about us?"
            options={howDidYouHearOptions}
            placeholder="Select an option"
            required
            value={watch("howDidYouHear") || ""}
            onChange={(e) =>
              setValue("howDidYouHear", e.target.value, {
                shouldValidate: true,
              })
            }
          />
        </motion.div>
      )}
    </motion.div>
  );
};

export default AccountInfoStep;
