"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Navigation } from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Network,
  Mail,
  Lock,
  Eye,
  EyeOff,
  ArrowRight,
  AlertCircle,
  Phone,
  User,
} from "lucide-react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

interface SignUpFormData {
  username: string;
  email: string;
  phone: string;
  password: string;
  confirmPassword: string;
  agreeToTerms: boolean;
}

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();
 const { toast } = useToast();
  const {
    register,
    handleSubmit,
    formState: { errors },
    clearErrors,
    watch,
  } = useForm<SignUpFormData>({
    mode: "onChange",
  });

  const watchPassword = watch("password");

  const onSubmit = async (data: SignUpFormData) => {
    setIsLoading(true);
    setError("");
   

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000));

      // Here you would typically make an API call to create the account
      console.log("Sign up attempt:", data);

      const isOnBoarded = false; // Or from localStorage / auth context

      if (!isOnBoarded) {
        navigate("/onboarding");
        // Only runs if signed up
        toast({
          title: "🎉 Welcome to Energy Pro Platform!",
          description: "Please take a moment to complete your registeration",
        });
        return;
      }
    } catch (err) {
      setError(
        "An error occurred while creating your account. Please try again."
      );
    } finally {
      setIsLoading(false);
    }
  };

  const handleInputFocus = () => {
    if (error) setError("");
    clearErrors();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      <Navigation />

      <div className="pt-20 pb-12 px-4">
        <div className="container mx-auto max-w-md">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="flex justify-center mb-4">
              <div className="w-16 h-16 bg-primary rounded-xl flex items-center justify-center shadow-lg">
                <Network className="h-8 w-8 text-white" />
              </div>
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Join EnergyPros
            </h1>
            <p className="text-gray-600">
              Create your account and connect with energy professionals
            </p>
          </div>

          {/* Sign Up Card */}
          <Card className="shadow-xl border-0">
            <CardHeader className="space-y-1 pb-6">
              <CardTitle className="text-2xl font-semibold text-center">
                Create Account
              </CardTitle>
              <CardDescription className="text-center">
                Fill in your details to get started
              </CardDescription>
            </CardHeader>

            <CardContent className="space-y-6">
              {error && (
                <Alert variant="destructive">
                  <AlertCircle className="h-4 w-4" />
                  <AlertDescription>{error}</AlertDescription>
                </Alert>
              )}

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                {/* Username Field */}
                <div className="space-y-2">
                  <Label htmlFor="username" className="text-sm font-medium">
                    Username
                  </Label>
                  <div className="relative">
                    <User className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                    <Input
                      id="username"
                      type="text"
                      placeholder="Choose a username"
                      className={`pl-10 h-12 ${
                        errors.username
                          ? "border-red-500 focus:border-red-500"
                          : ""
                      }`}
                      onFocus={handleInputFocus}
                      {...register("username", {
                        required: "Username is required",
                        minLength: {
                          value: 3,
                          message:
                            "Username must be at least 3 characters long",
                        },
                        maxLength: {
                          value: 20,
                          message: "Username must be less than 20 characters",
                        },
                        pattern: {
                          value: /^[a-zA-Z0-9_]+$/,
                          message:
                            "Username can only contain letters, numbers, and underscores",
                        },
                      })}
                    />
                  </div>
                  {errors.username && (
                    <p className="text-sm text-red-600 flex items-center mt-1">
                      <AlertCircle className="h-3 w-3 mr-1" />
                      {errors.username.message}
                    </p>
                  )}
                </div>

                {/* Email Field */}
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-sm font-medium">
                    Email Address
                  </Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                    <Input
                      id="email"
                      type="email"
                      placeholder="your.email@company.com"
                      className={`pl-10 h-12 ${
                        errors.email
                          ? "border-red-500 focus:border-red-500"
                          : ""
                      }`}
                      onFocus={handleInputFocus}
                      {...register("email", {
                        required: "Email address is required",
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: "Please enter a valid email address",
                        },
                      })}
                    />
                  </div>
                  {errors.email && (
                    <p className="text-sm text-red-600 flex items-center mt-1">
                      <AlertCircle className="h-3 w-3 mr-1" />
                      {errors.email.message}
                    </p>
                  )}
                </div>

                {/* Phone Field */}
                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-sm font-medium">
                    Phone Number
                  </Label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="+234 8012345678"
                      className={`pl-10 h-12 ${
                        errors.phone
                          ? "border-red-500 focus:border-red-500"
                          : ""
                      }`}
                      onFocus={handleInputFocus}
                      {...register("phone", {
                        required: "Phone number is required",
                        pattern: {
                          value: /^[+][1-9]\d{1,14}$/,
                          message:
                            "Please enter a valid phone number with country code (e.g., +234 8012345678)",
                        },
                        validate: (value) => {
                          if (!value.startsWith("+")) {
                            return "Phone number must include country code (e.g., +234 for Nigeria)";
                          }
                          if (value.length < 8) {
                            return "Phone number is too short. Include country code and full number";
                          }
                          if (value.length > 16) {
                            return "Phone number is too long";
                          }
                          return true;
                        },
                      })}
                    />
                  </div>
                  {errors.phone && (
                    <p className="text-sm text-red-600 flex items-center mt-1">
                      <AlertCircle className="h-3 w-3 mr-1" />
                      {errors.phone.message}
                    </p>
                  )}
                </div>

                {/* Password Field */}
                <div className="space-y-2">
                  <Label htmlFor="password" className="text-sm font-medium">
                    Password
                  </Label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                    <Input
                      id="password"
                      type={showPassword ? "text" : "password"}
                      placeholder="Create a strong password"
                      className={`pl-10 pr-10 h-12 ${
                        errors.password
                          ? "border-red-500 focus:border-red-500"
                          : ""
                      }`}
                      onFocus={handleInputFocus}
                      {...register("password", {
                        required: "Password is required",
                        minLength: {
                          value: 8,
                          message:
                            "Password must be at least 8 characters long",
                        },
                        pattern: {
                          value:
                            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/,
                          message:
                            "Password must contain uppercase, lowercase, number, and special character",
                        },
                      })}
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-3 text-gray-400 hover:text-gray-600"
                    >
                      {showPassword ? (
                        <EyeOff className="h-4 w-4" />
                      ) : (
                        <Eye className="h-4 w-4" />
                      )}
                    </button>
                  </div>
                  {errors.password && (
                    <p className="text-sm text-red-600 flex items-center mt-1">
                      <AlertCircle className="h-3 w-3 mr-1" />
                      {errors.password.message}
                    </p>
                  )}
                </div>

                {/* Confirm Password Field */}
                <div className="space-y-2">
                  <Label
                    htmlFor="confirmPassword"
                    className="text-sm font-medium"
                  >
                    Confirm Password
                  </Label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                    <Input
                      id="confirmPassword"
                      type={showConfirmPassword ? "text" : "password"}
                      placeholder="Confirm your password"
                      className={`pl-10 pr-10 h-12 ${
                        errors.confirmPassword
                          ? "border-red-500 focus:border-red-500"
                          : ""
                      }`}
                      onFocus={handleInputFocus}
                      {...register("confirmPassword", {
                        required: "Please confirm your password",
                        validate: (value) =>
                          value === watchPassword || "Passwords do not match",
                      })}
                    />
                    <button
                      type="button"
                      onClick={() =>
                        setShowConfirmPassword(!showConfirmPassword)
                      }
                      className="absolute right-3 top-3 text-gray-400 hover:text-gray-600"
                    >
                      {showConfirmPassword ? (
                        <EyeOff className="h-4 w-4" />
                      ) : (
                        <Eye className="h-4 w-4" />
                      )}
                    </button>
                  </div>
                  {errors.confirmPassword && (
                    <p className="text-sm text-red-600 flex items-center mt-1">
                      <AlertCircle className="h-3 w-3 mr-1" />
                      {errors.confirmPassword.message}
                    </p>
                  )}
                </div>

                {/* Terms and Conditions */}
                <div className="flex items-start space-x-2">
                  <Checkbox
                    id="agreeToTerms"
                    {...register("agreeToTerms", {
                      required:
                        "You must agree to the terms and conditions to create an account",
                    })}
                    className={`mt-1 ${
                      errors.agreeToTerms ? "border-red-500" : ""
                    }`}
                  />
                  <div className="grid gap-1.5 leading-none">
                    <Label
                      htmlFor="agreeToTerms"
                      className="text-sm font-normal leading-relaxed peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      I agree to the{" "}
                      <Link
                        to="/terms"
                        className="text-primary hover:underline font-medium"
                      >
                        Terms of Service
                      </Link>{" "}
                      and{" "}
                      <Link
                        to="/privacy"
                        className="text-primary hover:underline font-medium"
                      >
                        Privacy Policy
                      </Link>
                    </Label>
                    {errors.agreeToTerms && (
                      <p className="text-sm text-red-600 flex items-center">
                        <AlertCircle className="h-3 w-3 mr-1" />
                        {errors.agreeToTerms.message}
                      </p>
                    )}
                  </div>
                </div>

                {/* Sign Up Button */}
                <Button
                  type="submit"
                  variant="professional"
                  className="w-full h-12 text-white font-semibold"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <div className="flex items-center space-x-2">
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      <span>Creating Account...</span>
                    </div>
                  ) : (
                    <div className="flex items-center space-x-2">
                      <span>Create Account</span>
                      <ArrowRight className="h-4 w-4" />
                    </div>
                  )}
                </Button>
              </form>

              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <Separator className="w-full" />
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                  <span className="bg-background px-2 text-muted-foreground">
                    Or sign up with
                  </span>
                </div>
              </div>

              {/* Social Sign Up Options */}
              <div className="grid grid-cols-2 gap-3">
                <Button variant="outline" className="h-12 bg-transparent">
                  <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24">
                    <path
                      fill="currentColor"
                      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                    />
                    <path
                      fill="currentColor"
                      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    />
                    <path
                      fill="currentColor"
                      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                    />
                    <path
                      fill="currentColor"
                      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                    />
                  </svg>
                  Google
                </Button>
                <Button variant="outline" className="h-12 bg-transparent">
                  <svg
                    className="w-4 h-4 mr-2"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                  LinkedIn
                </Button>
              </div>

              {/* Sign In Link */}
              <div className="text-center pt-4">
                <p className="text-sm text-gray-600">
                  Already have an account?{" "}
                  <Link
                    to="/login"
                    className="text-primary hover:text-primary/80 font-semibold"
                  >
                    Sign in here
                  </Link>
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Additional Info */}
          <div className="mt-8 text-center">
            <p className="text-xs text-gray-500">
              By creating an account, you agree to receive updates about
              EnergyPros Connect and industry insights.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
