// "use client"

// import type React from "react"
// import { useState } from "react"
// import { useFormContext } from "react-hook-form"
// import { Eye, EyeOff } from "lucide-react"

// interface FloatingLabelInputProps {
//   name: string
//   label: string
//   type?: string
//   placeholder?: string
//   icon?: React.ReactNode
//   required?: boolean
// }

// const FloatingLabelInput: React.FC<FloatingLabelInputProps> = ({
//   name,
//   label,
//   type = "text",
//   placeholder,
//   icon,
//   required = false,
// }) => {
//   const {
//     register,
//     formState: { errors },
//     watch,
//   } = useFormContext()
//   const [showPassword, setShowPassword] = useState(false)
//   const [isFocused, setIsFocused] = useState(false)

//   const value = watch(name)
//   const hasValue = value && value.length > 0
//   const hasError = errors[name]

//   const inputType = type === "password" && showPassword ? "text" : type

//   return (
//     <div className="relative">
//       <div className="relative">
//         {icon && <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 z-10">{icon}</div>}

//         <input
//           {...register(name)}
//           type={inputType}
//           placeholder={placeholder}
//           onFocus={() => setIsFocused(true)}
//           onBlur={() => setIsFocused(false)}
//           className={`
//             w-full px-4 py-3 border rounded-lg transition-all duration-200 outline-none
//             ${icon ? "pl-12" : "pl-4"}
//             ${type === "password" ? "pr-12" : "pr-4"}
//             ${
//               hasError
//                 ? "border-red-300 focus:border-red-500 focus:ring-2 focus:ring-red-200"
//                 : "border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
//             }
//             ${hasValue || isFocused ? "pt-6 pb-2" : "pt-3 pb-3"}
//           `}
//         />

//         <label
//           className={`
//             absolute left-4 transition-all duration-200 pointer-events-none text-gray-500
//             ${icon ? "left-12" : "left-4"}
//             ${
//               hasValue || isFocused
//                 ? "top-1 text-xs font-medium text-indigo-600"
//                 : "top-1/2 transform -translate-y-1/2 text-base"
//             }
//           `}
//         >
//           {label}
//           {required && <span className="text-red-500 ml-1">*</span>}
//         </label>

//         {type === "password" && (
//           <button
//             type="button"
//             onClick={() => setShowPassword(!showPassword)}
//             className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
//           >
//             {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
//           </button>
//         )}
//       </div>

//       {hasError && <p className="mt-1 text-sm text-red-600">{hasError.message as string}</p>}
//     </div>
//   )
// }

// export default FloatingLabelInput

"use client";

import React from "react";
import { useFormContext, type RegisterOptions } from "react-hook-form";
import { cn } from "@/lib/utils";

interface FloatingLabelInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label: string;
  type?: string;
  placeholder?: string;
  icon?: React.ReactNode;
  required?: boolean;
  rules?: RegisterOptions; 
}

const FloatingLabelInput: React.FC<FloatingLabelInputProps> = ({
  name,
  label,
  type = "text",
  placeholder,
  icon,
  required = false,
  rules, 
  className,
  ...props
}) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const error = errors[name];

  return (
    <div className="relative">
      <input
        id={name}
        type={type}
        {...register(name, {
          required: required ? `${label} is required` : false,
          ...rules,
        })}
        placeholder={placeholder || " "} 
        className={cn(
          "peer block w-full rounded-md border px-3 pb-2 pt-6 text-sm shadow-sm outline-none transition-colors",
          "bg-white text-gray-900 placeholder-transparent",
          "focus:border-purple-500 focus:ring-1 focus:ring-purple-500",
          error ? "border-red-500" : "border-gray-300",
          icon ? "pl-10" : "",
          className
        )}
        {...props}
      />
      <label
        htmlFor={name}
        className={cn(
          "absolute left-3 top-1/4 -translate-y-1/2 cursor-text text-xs text-gray-500 transition-all",
          "peer-focus:top-2 peer-focus:text-xs peer-focus:font-medium peer-focus:text-purple-600",
          "peer-not-placeholder-shown:top-2 peer-not-placeholder-shown:text-xs peer-not-placeholder-shown:font-medium peer-not-placeholder-shown:text-purple-600",
          icon ? "left-10" : ""
        )}
      >
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      {icon && (
        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
          {React.cloneElement(icon as React.ReactElement, {
            className: "h-5 w-5 text-gray-400",
          })}
        </div>
      )}
      {error && (
        <p className="mt-1 text-xs text-red-500">{error.message as string}</p>
      )}
    </div>
  );
};

export default FloatingLabelInput;
