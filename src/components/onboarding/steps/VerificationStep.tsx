"use client"

import type React from "react"
import { useState } from "react"
import { useFormContext } from "react-hook-form"
import { motion } from "framer-motion"
import { Upload, FileText, Camera, Link, Shield, CheckCircle } from "lucide-react"
import type { OnboardingData } from "../SlothUIOnboarding"

const VerificationStep: React.FC = () => {
  const {
    register,
    watch,
    setValue,
    formState: { errors },
  } = useFormContext<OnboardingData>()

  const verificationType = watch("verificationType")
  const certificates = watch("certificates") || []
  const workPhotos = watch("workPhotos") || []
  const cv = watch("cv")

  const [dragActive, setDragActive] = useState<string | null>(null)

  const handleFileUpload = (files: FileList | null, fieldName: keyof OnboardingData) => {
    if (!files) return

    const fileArray = Array.from(files)

    if (fieldName === "cv") {
      setValue("cv", fileArray[0])
    } else if (fieldName === "certificates" || fieldName === "workPhotos") {
      const currentFiles = watch(fieldName) as File[]
      setValue(fieldName, [...currentFiles, ...fileArray])
    }
  }

  const removeFile = (index: number, fieldName: keyof OnboardingData) => {
    if (fieldName === "cv") {
      setValue("cv", null)
    } else if (fieldName === "certificates" || fieldName === "workPhotos") {
      const currentFiles = watch(fieldName) as File[]
      const updatedFiles = currentFiles.filter((_, i) => i !== index)
      setValue(fieldName, updatedFiles)
    }
  }

  const handleDrag = (e: React.DragEvent, fieldName: string) => {
    e.preventDefault()
    e.stopPropagation()
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(fieldName)
    } else if (e.type === "dragleave") {
      setDragActive(null)
    }
  }

  const handleDrop = (e: React.DragEvent, fieldName: keyof OnboardingData) => {
    e.preventDefault()
    e.stopPropagation()
    setDragActive(null)

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFileUpload(e.dataTransfer.files, fieldName)
    }
  }

  const FileUploadArea: React.FC<{
    fieldName: keyof OnboardingData
    accept: string
    multiple?: boolean
    title: string
    description: string
    icon: React.ReactNode
  }> = ({ fieldName, accept, multiple = false, title, description, icon }) => (
    <div
      className={`border-2 border-dashed rounded-lg p-6 text-center transition-colors ${
        dragActive === fieldName ? "border-indigo-500 bg-indigo-50" : "border-gray-300 hover:border-gray-400"
      }`}
      onDragEnter={(e) => handleDrag(e, fieldName)}
      onDragLeave={(e) => handleDrag(e, fieldName)}
      onDragOver={(e) => handleDrag(e, fieldName)}
      onDrop={(e) => handleDrop(e, fieldName)}
    >
      <div className="flex flex-col items-center">
        <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mb-4">{icon}</div>
        <h3 className="text-sm font-medium text-gray-900 mb-2">{title}</h3>
        <p className="text-xs text-gray-500 mb-4">{description}</p>
        <label className="cursor-pointer">
          <span className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
            <Upload className="w-4 h-4 mr-2" />
            Choose Files
          </span>
          <input
            type="file"
            accept={accept}
            multiple={multiple}
            className="hidden"
            onChange={(e) => handleFileUpload(e.target.files, fieldName)}
          />
        </label>
      </div>
    </div>
  )

  const renderBasicVerification = () => (
    <div className="space-y-6">
      {/* CV Upload */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-3">Upload your CV/Resume *</label>
        <FileUploadArea
          fieldName="cv"
          accept=".pdf,.doc,.docx"
          title="Upload CV/Resume"
          description="PDF, DOC, or DOCX (max 5MB)"
          icon={<FileText className="w-6 h-6 text-gray-400" />}
        />
        {cv && (
          <div className="mt-2 flex items-center justify-between bg-gray-50 p-3 rounded-lg">
            <div className="flex items-center">
              <FileText className="w-5 h-5 text-gray-400 mr-2" />
              <span className="text-sm text-gray-700">{cv.name}</span>
            </div>
            <button
              type="button"
              onClick={() => removeFile(0, "cv")}
              className="text-red-500 hover:text-red-700 text-sm"
            >
              Remove
            </button>
          </div>
        )}
        {errors.cv && <p className="text-sm text-red-600 mt-1">{errors.cv.message}</p>}
      </div>

      {/* Certificates Upload */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-3">Upload Certificates *</label>
        <FileUploadArea
          fieldName="certificates"
          accept=".pdf,.jpg,.jpeg,.png"
          multiple
          title="Upload Certificates"
          description="PDF, JPG, PNG (max 5MB each)"
          icon={<Shield className="w-6 h-6 text-gray-400" />}
        />
        {certificates.length > 0 && (
          <div className="mt-2 space-y-2">
            {certificates.map((file, index) => (
              <div key={index} className="flex items-center justify-between bg-gray-50 p-3 rounded-lg">
                <div className="flex items-center">
                  <Shield className="w-5 h-5 text-gray-400 mr-2" />
                  <span className="text-sm text-gray-700">{file.name}</span>
                </div>
                <button
                  type="button"
                  onClick={() => removeFile(index, "certificates")}
                  className="text-red-500 hover:text-red-700 text-sm"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
        )}
        {errors.certificates && <p className="text-sm text-red-600 mt-1">{errors.certificates.message}</p>}
      </div>

      {/* Work Photos Upload */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-3">Upload Work Photos *</label>
        <FileUploadArea
          fieldName="workPhotos"
          accept=".jpg,.jpeg,.png"
          multiple
          title="Upload Work Photos"
          description="JPG, PNG (max 5MB each)"
          icon={<Camera className="w-6 h-6 text-gray-400" />}
        />
        {workPhotos.length > 0 && (
          <div className="mt-2 space-y-2">
            {workPhotos.map((file, index) => (
              <div key={index} className="flex items-center justify-between bg-gray-50 p-3 rounded-lg">
                <div className="flex items-center">
                  <Camera className="w-5 h-5 text-gray-400 mr-2" />
                  <span className="text-sm text-gray-700">{file.name}</span>
                </div>
                <button
                  type="button"
                  onClick={() => removeFile(index, "workPhotos")}
                  className="text-red-500 hover:text-red-700 text-sm"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
        )}
        {errors.workPhotos && <p className="text-sm text-red-600 mt-1">{errors.workPhotos.message}</p>}
      </div>
    </div>
  )

  const renderProofOfWork = () => (
    <div className="space-y-6">
      <div>
        <label htmlFor="portfolioLink" className="block text-sm font-medium text-gray-700 mb-2">
          Portfolio Website *
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Link className="w-5 h-5 text-gray-400" />
          </div>
          <input
            type="url"
            id="portfolioLink"
            {...register("portfolioLink")}
            className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            placeholder="https://your-portfolio.com"
          />
        </div>
        {errors.portfolioLink && <p className="text-sm text-red-600 mt-1">{errors.portfolioLink.message}</p>}
      </div>

      <div>
        <label htmlFor="projectLink" className="block text-sm font-medium text-gray-700 mb-2">
          Recent Project Link
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Link className="w-5 h-5 text-gray-400" />
          </div>
          <input
            type="url"
            id="projectLink"
            {...register("projectLink")}
            className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            placeholder="https://project-showcase.com"
          />
        </div>
        {errors.projectLink && <p className="text-sm text-red-600 mt-1">{errors.projectLink.message}</p>}
      </div>

      <div>
        <label htmlFor="githubLink" className="block text-sm font-medium text-gray-700 mb-2">
          GitHub Profile
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Link className="w-5 h-5 text-gray-400" />
          </div>
          <input
            type="url"
            id="githubLink"
            {...register("githubLink")}
            className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            placeholder="https://github.com/yourusername"
          />
        </div>
        {errors.githubLink && <p className="text-sm text-red-600 mt-1">{errors.githubLink.message}</p>}
      </div>
    </div>
  )

  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-2xl mx-auto space-y-6">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Verification</h2>
        <p className="text-gray-600">Help us verify your credentials and experience</p>
      </div>

      {/* Verification Type Selection */}
      <div className="space-y-4">
        <label className="block text-sm font-medium text-gray-700 mb-3">Choose your verification method *</label>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <label className="relative cursor-pointer">
            <input type="radio" value="basic" {...register("verificationType")} className="sr-only" />
            <div
              className={`border-2 rounded-lg p-4 transition-colors ${
                verificationType === "basic"
                  ? "border-indigo-500 bg-indigo-50"
                  : "border-gray-200 hover:border-gray-300"
              }`}
            >
              <div className="flex items-center">
                <Shield className="w-6 h-6 text-indigo-600 mr-3" />
                <div>
                  <h3 className="font-medium text-gray-900">Basic Credentials</h3>
                  <p className="text-sm text-gray-500">Upload certificates, CV, and work photos</p>
                </div>
                {verificationType === "basic" && <CheckCircle className="w-5 h-5 text-indigo-600 ml-auto" />}
              </div>
            </div>
          </label>

          <label className="relative cursor-pointer">
            <input type="radio" value="proof" {...register("verificationType")} className="sr-only" />
            <div
              className={`border-2 rounded-lg p-4 transition-colors ${
                verificationType === "proof"
                  ? "border-indigo-500 bg-indigo-50"
                  : "border-gray-200 hover:border-gray-300"
              }`}
            >
              <div className="flex items-center">
                <Link className="w-6 h-6 text-indigo-600 mr-3" />
                <div>
                  <h3 className="font-medium text-gray-900">Proof of Work</h3>
                  <p className="text-sm text-gray-500">Share portfolio and project links</p>
                </div>
                {verificationType === "proof" && <CheckCircle className="w-5 h-5 text-indigo-600 ml-auto" />}
              </div>
            </div>
          </label>
        </div>
        {errors.verificationType && <p className="text-sm text-red-600">{errors.verificationType.message}</p>}
      </div>

      {/* Conditional Verification Content */}
      {verificationType === "basic" && renderBasicVerification()}
      {verificationType === "proof" && renderProofOfWork()}

      {verificationType && (
        <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
          <h3 className="font-medium text-amber-800 mb-2">Verification Process</h3>
          <p className="text-sm text-amber-700">
            Our team will review your submitted information within 24-48 hours. You'll receive a notification via
            WhatsApp once your verification is complete.
          </p>
        </div>
      )}
    </motion.div>
  )
}

export default VerificationStep
