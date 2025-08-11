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
            "data-[placeholder]:pt-2 data-[placeholder]:pb-2",
            "data-[state=open]:pt-2 data-[state=open]:pb-2",
            selectedValue ? "pt-2 pb-2" : ""
          )}
        >
          <SelectValue placeholder={placeholder} />
        </SelectTrigger>
        <label
          htmlFor={name}
          className={cn(
            "absolute left-3 top-1/4 -translate-y-1/2 cursor-text text-base text-gray-500 transition-all",
            "peer-focus:top-2 peer-focus:text-xs peer-focus:font-medium peer-focus:text-purple-600",
            "peer-data-[state=open]:top-1 peer-data-[state=open]:text-xs peer-data-[state=open]:font-medium peer-data-[state=open]:text-purple-600",
            "peer-data-[placeholder]:top-1/4 peer-data-[placeholder]:-translate-y-1/2 peer-data-[placeholder]:text-base peer-data-[placeholder]:text-gray-500",
            selectedValue ? "top-2 text-xs font-medium text-purple-600" : ""
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
