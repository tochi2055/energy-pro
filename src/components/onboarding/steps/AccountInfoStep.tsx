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
                value: /^(\+234\d{10}|0\d{10})$/,
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
                value: /^(\+234\d{10}|0\d{10})$/,
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
