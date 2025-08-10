"use client";

import type React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import type { EnergyOnboardingData } from "../EnergyOnboardingWizard";

interface StepFourProps {
  formData: EnergyOnboardingData;
  handleSubmit: () => Promise<void>;
  prevStep: () => void;
  isSubmitting: boolean;
}

const StepFour: React.FC<StepFourProps> = ({
  formData,
  handleSubmit,
  prevStep,
  isSubmitting,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="max-w-2xl mx-auto space-y-6"
    >
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Confirmation</h2>
        <p className="text-gray-600">
          Review your information before submitting
        </p>
      </div>

      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 space-y-4">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">
          Your Details
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <p className="text-sm font-medium text-gray-500">Full Name</p>
            <p className="text-gray-800">{formData.fullName}</p>
          </div>
          <div>
            <p className="text-sm font-medium text-gray-500">Email</p>
            <p className="text-gray-800">{formData.email}</p>
          </div>
          <div>
            <p className="text-sm font-medium text-gray-500">Phone Number</p>
            <p className="text-gray-800">{formData.phoneNumber}</p>
          </div>
          <div>
            <p className="text-sm font-medium text-gray-500">Company Name</p>
            <p className="text-gray-800">{formData.companyName}</p>
          </div>
          <div>
            <p className="text-sm font-medium text-gray-500">Company Address</p>
            <p className="text-gray-800">{formData.companyAddress}</p>
          </div>
          <div>
            <p className="text-sm font-medium text-gray-500">Service Type</p>
            <p className="text-gray-800">{formData.serviceType}</p>
          </div>
          <div>
            <p className="text-sm font-medium text-gray-500">
              Installation Goals
            </p>
            <p className="text-gray-800">
              {formData.installationGoals.join(", ")}
            </p>
          </div>
          <div>
            <p className="text-sm font-medium text-gray-500">
              Preferred Contact Method
            </p>
            <p className="text-gray-800">{formData.preferredContactMethod}</p>
          </div>
        </div>

        <div className="flex items-center space-x-2 mt-4">
          <input
            type="checkbox"
            id="agreeTerms"
            checked={formData.agreeTerms}
            readOnly
            className="form-checkbox h-4 w-4 text-purple-600 rounded"
          />
          <label htmlFor="agreeTerms" className="text-sm text-gray-700">
            I agree to the terms and conditions.
          </label>
        </div>
      </div>

      <div className="flex justify-between mt-8">
        <Button variant="outline" onClick={prevStep} disabled={isSubmitting}>
          Back
        </Button>
        <Button
          onClick={handleSubmit}
          disabled={isSubmitting || !formData.agreeTerms}
        >
          {isSubmitting ? "Submitting..." : "Submit Application"}
        </Button>
      </div>
    </motion.div>
  );
};

export default StepFour;
