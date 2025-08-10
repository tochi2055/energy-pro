"use client"

import type React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useFormContext } from "react-hook-form"
import { User } from "lucide-react"
import FloatingLabelInput from "../FloatingLabelInput"
import FloatingLabelSelect from "../FloatingLabelSelect"

const nigerianStates = [
  "Abia",
  "Adamawa",
  "Akwa Ibom",
  "Anambra",
  "Bauchi",
  "Bayelsa",
  "Benue",
  "Borno",
  "Cross River",
  "Delta",
  "Ebonyi",
  "Edo",
  "Ekiti",
  "Enugu",
  "Gombe",
  "Imo",
  "Jigawa",
  "Kaduna",
  "Kano",
  "Katsina",
  "Kebbi",
  "Kogi",
  "Kwara",
  "Lagos",
  "Nasarawa",
  "Niger",
  "Ogun",
  "Ondo",
  "Osun",
  "Oyo",
  "Plateau",
  "Rivers",
  "Sokoto",
  "Taraba",
  "Yobe",
  "Zamfara",
  "FCT",
].map((state) => ({ value: state.toLowerCase().replace(/\s+/g, "-"), label: state }))

const installationTypes = [
  "Solar panels",
  "Inverter systems",
  "Generator installations",
  "Battery backup systems",
  "Electrical wiring",
  "CCTV systems",
  "Other energy systems",
]

const howDidYouHearOptions = [
  { value: "social-media", label: "Social Media" },
  { value: "google-search", label: "Google Search" },
  { value: "friend-referral", label: "Friend/Referral" },
  { value: "advertisement", label: "Advertisement" },
  { value: "website", label: "Website" },
  { value: "other", label: "Other" },
]

interface AccountInfoStepProps {
  currentPage: number
}

const AccountInfoStep: React.FC<AccountInfoStepProps> = ({ currentPage }) => {
  const {
    register,
    watch,
    setValue,
    formState: { errors },
  } = useFormContext()

  const selectedInstallationTypes = watch("installationTypes") || []
  const interestedInTraining = watch("interestedInTraining")

  const handleInstallationTypeToggle = (type: string) => {
    const currentTypes = selectedInstallationTypes || []
    const updatedTypes = currentTypes.includes(type)
      ? currentTypes.filter((t: string) => t !== type)
      : [...currentTypes, type]
    setValue("installationTypes", updatedTypes)
  }

  const renderPage1 = () => (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <User className="w-8 h-8 text-indigo-600" />
        </div>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Account Information</h2>
        <p className="text-gray-600">Let's start with your basic information</p>
      </div>

      <div className="space-y-6">
        <FloatingLabelInput name="fullName" label="Full Name" required />

        <FloatingLabelInput name="email" label="Email Address" type="email" required />

        <FloatingLabelInput name="password" label="Password" type="password" required />

        <FloatingLabelInput name="phoneNumber" label="Phone Number" type="tel" required />

        <FloatingLabelInput name="whatsappNumber" label="WhatsApp Number" type="tel" required />
      </div>
    </div>
  )

  const renderPage2 = () => (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <User className="w-8 h-8 text-indigo-600" />
        </div>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Location & Interests</h2>
        <p className="text-gray-600">Tell us about your location and training interests</p>
      </div>

      <div className="space-y-6">
        <FloatingLabelSelect name="stateOfResidence" label="State of Residence" options={nigerianStates} required />

        <FloatingLabelInput name="city" label="City" required />

        <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
          <div>
            <h4 className="text-sm font-medium text-gray-900">Interested in Training</h4>
            <p className="text-xs text-gray-600">Would you like to receive training opportunities?</p>
          </div>
          <label className="relative inline-flex items-center cursor-pointer">
            <input {...register("interestedInTraining")} type="checkbox" className="sr-only peer" />
            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-indigo-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-indigo-600"></div>
          </label>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-3">
            Installation Types <span className="text-red-500">*</span>
          </label>
          <div className="grid grid-cols-1 gap-2">
            {installationTypes.map((type) => (
              <button
                key={type}
                type="button"
                onClick={() => handleInstallationTypeToggle(type)}
                className={`p-3 text-sm border rounded-lg transition-colors text-left ${
                  selectedInstallationTypes.includes(type)
                    ? "border-indigo-500 bg-indigo-50 text-indigo-700"
                    : "border-gray-200 hover:border-gray-300 text-gray-700"
                }`}
              >
                {type}
              </button>
            ))}
          </div>
          {errors.installationTypes && (
            <p className="text-xs text-red-500 mt-1">{errors.installationTypes.message as string}</p>
          )}
        </div>

        <FloatingLabelSelect
          name="howDidYouHear"
          label="How did you hear about us?"
          options={howDidYouHearOptions}
          required
        />
      </div>
    </div>
  )

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={currentPage}
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -20 }}
        transition={{ duration: 0.3 }}
      >
        {currentPage === 1 ? renderPage1() : renderPage2()}
      </motion.div>
    </AnimatePresence>
  )
}

export default AccountInfoStep
