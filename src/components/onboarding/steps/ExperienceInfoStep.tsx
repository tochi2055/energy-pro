// import React from 'react';
// import { useFormContext } from 'react-hook-form';
// import { Briefcase, Award } from 'lucide-react';
// import FloatingLabelInput from '../FloatingLabelInput';
// import FloatingLabelSelect from '../FloatingLabelSelect';

// const experienceOptions = [
//   { value: '0-1', label: 'Less than 1 year' },
//   { value: '1-2', label: '1-2 years' },
//   { value: '3-5', label: '3-5 years' },
//   { value: '6-10', label: '6-10 years' },
//   { value: '10+', label: '10+ years' },
// ];

// const skillOptions = [
//   'Solar Installation', 'Electrical Wiring', 'System Design', 'Maintenance & Repair',
//   'Battery Systems', 'Inverter Configuration', 'Grid-tie Systems', 'Off-grid Systems',
//   'Energy Auditing', 'Project Management', 'Customer Service', 'Safety Protocols'
// ];

// const ExperienceInfoStep: React.FC = () => {
//   const { register, watch, setValue, formState: { errors } } = useFormContext();
//   const selectedSkills = watch('skills') || [];

//   const handleSkillToggle = (skill: string) => {
//     const currentSkills = selectedSkills || [];
//     const updatedSkills = currentSkills.includes(skill)
//       ? currentSkills.filter((s: string) => s !== skill)
//       : [...currentSkills, skill];
//     setValue('skills', updatedSkills);
//   };

//   return (
//     <div className="space-y-6">
//       <div className="text-center mb-8">
//         <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
//           <Briefcase className="w-8 h-8 text-green-600" />
//         </div>
//         <h2 className="text-2xl font-bold text-gray-900 mb-2">
//           Experience Information
//         </h2>
//         <p className="text-gray-600">
//           Tell us about your professional background and expertise
//         </p>
//       </div>

//       <div className="space-y-6">
//         <FloatingLabelInput
//           name="role"
//           label="Role/Position"
//           required
//         />
        
//         <FloatingLabelSelect
//           name="yearsOfExperience"
//           label="Years of Experience"
//           options={experienceOptions}
//           required
//         />

//         <div>
//           <label className="block text-sm font-medium text-gray-700 mb-3">
//             Skills & Expertise <span className="text-red-500">*</span>
//           </label>
//           <div className="grid grid-cols-2 gap-2">
//             {skillOptions.map((skill) => (
//               <button
//                 key={skill}
//                 type="button"
//                 onClick={() => handleSkillToggle(skill)}
//                 className={`p-3 text-sm border rounded-lg transition-colors text-left ${
//                   selectedSkills.includes(skill)
//                     ? 'border-indigo-500 bg-indigo-50 text-indigo-700'
//                     : 'border-gray-200 hover:border-gray-300 text-gray-700'
//                 }`}
//               >
//                 {skill}
//               </button>
//             ))}
//           </div>
//           {errors.skills && (
//             <p className="text-xs text-red-500 mt-1">{errors.skills.message as string}</p>
//           )}
//         </div>
//       </div>

//       <div className="bg-blue-50 rounded-lg p-4">
//         <div className="flex items-start space-x-3">
//           <Award className="w-5 h-5 text-blue-500 mt-0.5" />
//           <div>
//             <h4 className="text-sm font-medium text-gray-900">Professional Growth</h4>
//             <p className="text-xs text-gray-600 mt-1">
//               This information helps us match you with relevant opportunities and training programs.
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ExperienceInfoStep;

"use client"

import type React from "react"
import { Briefcase } from "lucide-react"
import { motion } from "framer-motion"
import FloatingLabelInput from "../FloatingLabelInput"
import FloatingLabelSelect from "../FloatingLabelSelect"
import { useFormContext } from "react-hook-form"
import type { OnboardingData } from "../SlothUIOnboarding"

const yearsOfExperienceOptions = [
  { value: "0-1", label: "0-1 Year" },
  { value: "1-3", label: "1-3 Years" },
  { value: "3-5", label: "3-5 Years" },
  { value: "5-10", label: "5-10 Years" },
  { value: "10+", label: "10+ Years" },
]

const skillsOptions = [
  { value: "solar_installation", label: "Solar Panel Installation" },
  { value: "inverter_installation", label: "Inverter Installation" },
  { value: "battery_storage", label: "Battery Storage Systems" },
  { value: "electrical_wiring", label: "Electrical Wiring" },
  { value: "troubleshooting", label: "Troubleshooting & Repair" },
  { value: "project_management", label: "Project Management" },
  { value: "customer_service", label: "Customer Service" },
]

const ExperienceInfoStep: React.FC = () => {
  const {
    register,
    watch,
    setValue,
    formState: { errors },
  } = useFormContext<OnboardingData>()
  const selectedSkills = watch("skills") || []

  const handleSkillChange = (skill: string) => {
    const currentSkills = selectedSkills
    if (currentSkills.includes(skill)) {
      setValue(
        "skills",
        currentSkills.filter((s) => s !== skill),
        { shouldValidate: true },
      )
    } else {
      setValue("skills", [...currentSkills, skill], { shouldValidate: true })
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="max-w-2xl mx-auto space-y-6"
    >
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">
          Experience Information
        </h2>
        <p className="text-gray-600">
          Share your professional background and skills
        </p>
      </div>

      <FloatingLabelInput
        name="role"
        label="Your Role/Title"
        required
        icon={<Briefcase />}
        rules={{
          minLength: {
            value: 3,
            message: "Role/Title must be at least 3 characters",
          },
        }}
      />

      <FloatingLabelSelect
        name="yearsOfExperience"
        label="Years of Experience"
        options={yearsOfExperienceOptions}
        placeholder="Select years of experience"
        required
        value={watch("yearsOfExperience") || ""} 
        onChange={(e) =>
          setValue("yearsOfExperience", e.target.value, {
            shouldValidate: true,
          })
        } 
      />

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Your Key Skills <span className="text-red-500">*</span>
        </label>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {skillsOptions.map((skill) => (
            <label
              key={skill.value}
              className={`flex items-center p-3 border rounded-md cursor-pointer transition-colors ${
                selectedSkills.includes(skill.value)
                  ? "border-purple-500 bg-purple-50"
                  : "border-gray-300 hover:border-gray-400"
              }`}
            >
              <input
                type="checkbox"
                value={skill.value}
                checked={selectedSkills.includes(skill.value)}
                onChange={() => handleSkillChange(skill.value)}
                className="form-checkbox h-4 w-4 text-purple-600 rounded focus:ring-purple-500"
              />
              <span className="ml-2 text-sm text-gray-700">{skill.label}</span>
            </label>
          ))}
        </div>
        {errors.skills && (
          <p className="mt-1 text-xs text-red-500">
            {errors.skills.message as string}
          </p>
        )}
        {/* Hidden input to register the field for validation */}
        <input
          type="hidden"
          {...register("skills", {
            validate: (value) =>
              (value && value.length > 0) || "Please select at least one skill",
          })}
        />
      </div>

      <div className="flex items-center space-x-2">
        <input
          type="checkbox"
          id="interestedInTraining"
          {...register("interestedInTraining")}
          className="form-checkbox h-4 w-4 text-purple-600 rounded focus:ring-purple-500"
        />
        <label htmlFor="interestedInTraining" className="text-sm text-gray-700">
          I'm interested in further training and certifications.
        </label>
      </div>
    </motion.div>
  );
}

export default ExperienceInfoStep
