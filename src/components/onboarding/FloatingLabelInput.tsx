"use client"

import type React from "react"
import { useState } from "react"
import { useFormContext } from "react-hook-form"
import { Eye, EyeOff } from "lucide-react"

interface FloatingLabelInputProps {
  name: string
  label: string
  type?: string
  placeholder?: string
  icon?: React.ReactNode
  required?: boolean
}

const FloatingLabelInput: React.FC<FloatingLabelInputProps> = ({
  name,
  label,
  type = "text",
  placeholder,
  icon,
  required = false,
}) => {
  const {
    register,
    formState: { errors },
    watch,
  } = useFormContext()
  const [showPassword, setShowPassword] = useState(false)
  const [isFocused, setIsFocused] = useState(false)

  const value = watch(name)
  const hasValue = value && value.length > 0
  const hasError = errors[name]

  const inputType = type === "password" && showPassword ? "text" : type

  return (
    <div className="relative">
      <div className="relative">
        {icon && <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 z-10">{icon}</div>}

        <input
          {...register(name)}
          type={inputType}
          placeholder={placeholder}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          className={`
            w-full px-4 py-3 border rounded-lg transition-all duration-200 outline-none
            ${icon ? "pl-12" : "pl-4"}
            ${type === "password" ? "pr-12" : "pr-4"}
            ${
              hasError
                ? "border-red-300 focus:border-red-500 focus:ring-2 focus:ring-red-200"
                : "border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
            }
            ${hasValue || isFocused ? "pt-6 pb-2" : "pt-3 pb-3"}
          `}
        />

        <label
          className={`
            absolute left-4 transition-all duration-200 pointer-events-none text-gray-500
            ${icon ? "left-12" : "left-4"}
            ${
              hasValue || isFocused
                ? "top-1 text-xs font-medium text-indigo-600"
                : "top-1/2 transform -translate-y-1/2 text-base"
            }
          `}
        >
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>

        {type === "password" && (
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
          >
            {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
          </button>
        )}
      </div>

      {hasError && <p className="mt-1 text-sm text-red-600">{hasError.message as string}</p>}
    </div>
  )
}

export default FloatingLabelInput
