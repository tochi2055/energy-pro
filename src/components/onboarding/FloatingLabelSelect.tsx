// "use client"

// import type React from "react"
// import { useState } from "react"
// import { useFormContext } from "react-hook-form"
// import { ChevronDown } from "lucide-react"

// interface SelectOption {
//   value: string
//   label: string
// }

// interface FloatingLabelSelectProps {
//   name: string
//   label: string
//   options: SelectOption[]
//   placeholder?: string
//   icon?: React.ReactNode
//   required?: boolean
// }

// const FloatingLabelSelect: React.FC<FloatingLabelSelectProps> = ({
//   name,
//   label,
//   options,
//   placeholder,
//   icon,
//   required = false,
// }) => {
//   const {
//     register,
//     formState: { errors },
//     watch,
//     setValue,
//   } = useFormContext()
//   const [isFocused, setIsFocused] = useState(false)

//   const value = watch(name)
//   const hasValue = value && value.length > 0
//   const hasError = errors[name]

//   const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
//     setValue(name, event.target.value)
//   }

//   return (
//     <div className="relative">
//       <div className="relative">
//         {icon && <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 z-10">{icon}</div>}

//         <select
//           {...register(name)}
//           onChange={handleChange}
//           onFocus={() => setIsFocused(true)}
//           onBlur={() => setIsFocused(false)}
//           className={`
//             w-full px-4 py-3 border rounded-lg transition-all duration-200 outline-none appearance-none bg-white cursor-pointer
//             ${icon ? "pl-12" : "pl-4"}
//             pr-12
//             ${
//               hasError
//                 ? "border-red-300 focus:border-red-500 focus:ring-2 focus:ring-red-200"
//                 : "border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
//             }
//             ${hasValue || isFocused ? "pt-6 pb-2" : "pt-3 pb-3"}
//           `}
//         >
//           <option value="">{placeholder || `Select ${label}`}</option>
//           {options.map((option) => (
//             <option key={option.value} value={option.value}>
//               {option.label}
//             </option>
//           ))}
//         </select>

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

//         <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 pointer-events-none" />
//       </div>

//       {hasError && <p className="mt-1 text-sm text-red-600">{hasError.message as string}</p>}
//     </div>
//   )
// }

// export default FloatingLabelSelect
"use client";

import type React from "react";
import { useFormContext } from "react-hook-form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";
import { ChangeEvent } from "react";

interface FloatingLabelSelectProps {
  name: string;
  label: string;
  options: { value: string; label: string }[];
  placeholder?: string;
  required?: boolean;
  className?: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLSelectElement | HTMLInputElement>) => void;
}


const FloatingLabelSelect: React.FC<FloatingLabelSelectProps> = ({
  name,
  label,
  options,
  placeholder,
  required = false,
  className,
}) => {
  const {
    control,
    setValue,
    watch,
    formState: { errors },
  } = useFormContext();

  const selectedValue = watch(name);
  const error = errors[name];

  return (
    <div className="relative">
      <Select
        onValueChange={(value) =>
          setValue(name, value, { shouldValidate: true })
        }
        value={selectedValue || ""}
      >
        <SelectTrigger
          className={cn(
            "peer block w-full rounded-md border px-3 pb-2 pt-6 text-sm shadow-sm outline-none transition-colors",
            "bg-white text-gray-900",
            "focus:border-purple-500 focus:ring-1 focus:ring-purple-500",
            error ? "border-red-500" : "border-gray-300",
            className,
            // Adjust padding for the selected value to appear centered
            "data-[placeholder]:pt-6 data-[placeholder]:pb-2",
            "data-[state=open]:pt-6 data-[state=open]:pb-2",
            selectedValue ? "pt-6 pb-2" : "" // Ensure padding when value is selected
          )}
        >
          <SelectValue placeholder={placeholder} />
        </SelectTrigger>
        <label
          htmlFor={name}
          className={cn(
            "absolute left-3 top-1/2 -translate-y-1/2 cursor-text text-base text-gray-500 transition-all",
            "peer-focus:top-2 peer-focus:text-xs peer-focus:font-medium peer-focus:text-purple-600",
            "peer-data-[state=open]:top-2 peer-data-[state=open]:text-xs peer-data-[state=open]:font-medium peer-data-[state=open]:text-purple-600",
            "peer-data-[placeholder]:top-1/2 peer-data-[placeholder]:-translate-y-1/2 peer-data-[placeholder]:text-base peer-data-[placeholder]:text-gray-500",
            selectedValue ? "top-2 text-xs font-medium text-purple-600" : "", // Keep label at top if value is selected
            "bg-white px-1" // Ensure label has a background to cover input text
          )}
        >
          {label} {required && <span className="text-red-500">*</span>}
        </label>
        <SelectContent>
          {options.map((option) => (
            <SelectItem key={option.value} value={option.value}>
              {option.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      {error && (
        <p className="mt-1 text-xs text-red-500">{error.message as string}</p>
      )}
    </div>
  );
};

export default FloatingLabelSelect;
