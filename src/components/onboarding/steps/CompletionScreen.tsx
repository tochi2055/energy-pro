// "use client";

// import type React from "react";
// import { motion } from "framer-motion";
// import {
//   CheckCircle,
//   ArrowRight,
//   Home,
//   Mail,
//   Calendar,
//   Users,
//   Award,
//   Phone,
// } from "lucide-react";

// const CompletionScreen: React.FC = () => {
//   const progressSteps = [
//     {
//       id: 1,
//       title: "Application Submitted",
//       description: "Your information has been received",
//       status: "completed",
//     },
//     {
//       id: 2,
//       title: "Email Confirmation",
//       description: "Confirmation sent to your inbox",
//       status: "current",
//     },
//     {
//       id: 3,
//       title: "Review Process",
//       description: "Our team will verify your credentials",
//       status: "pending",
//     },
//     {
//       id: 4,
//       title: "WhatsApp Notification",
//       description: "You'll receive approval status",
//       status: "pending",
//     },
//     {
//       id: 5,
//       title: "Network Access",
//       description: "Join our professional community",
//       status: "pending",
//     },
//   ];

//   const getStepIcon = (status: string, stepId: number) => {
//     switch (status) {
//       case "completed":
//         return (
//           <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center">
//             <CheckCircle className="w-5 h-5 text-white" />
//           </div>
//         );
//       case "current":
//         return (
//           <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center">
//             <div className="w-3 h-3 bg-white rounded-full" />
//           </div>
//         );
//       default:
//         return (
//           <div className="w-8 h-8 border-2 border-gray-300 rounded-full flex items-center justify-center">
//             <span className="text-sm text-gray-400">{stepId}</span>
//           </div>
//         );
//     }
//   };

//   return (
//     <div className="h-screen bg-gray-50 overflow-hidden">
//       <div className="flex h-full">
//         {/* Left Sidebar - Progress Indicator */}
//         <div className="hidden lg:flex w-[320px] bg-white shadow-sm flex-shrink-0">
//           <div className="flex flex-col justify-center px-8 py-12 w-full">
//             <div className="mb-12">
//               <h2 className="text-xl font-bold text-gray-900 mb-2">
//                 Application Progress
//               </h2>
//               <p className="text-gray-600">Track your onboarding status</p>
//             </div>

//             <div className="space-y-6">
//               {progressSteps.map((step, index) => (
//                 <motion.div
//                   key={step.id}
//                   initial={{ opacity: 0, x: -20 }}
//                   animate={{ opacity: 1, x: 0 }}
//                   transition={{ delay: index * 0.1 }}
//                   className="flex items-start"
//                 >
//                   <div className="flex flex-col items-center flex-shrink-0">
//                     {getStepIcon(step.status, step.id)}
//                     {index < progressSteps.length - 1 && (
//                       <div className="w-px h-12 bg-gray-200 mt-2" />
//                     )}
//                   </div>
//                   <div className="ml-4">
//                     <h3
//                       className={`text-sm font-medium ${
//                         step.status === "completed"
//                           ? "text-purple-600"
//                           : step.status === "current"
//                           ? "text-purple-600"
//                           : "text-gray-500"
//                       }`}
//                     >
//                       {step.title}
//                     </h3>
//                     <p className="text-xs text-gray-500 mt-1">
//                       {step.description}
//                     </p>
//                   </div>
//                 </motion.div>
//               ))}
//             </div>
//           </div>
//         </div>

//         {/* Right Main Content */}
//         <div className="flex-1 flex items-center justify-center p-4 overflow-y-auto">
//           <motion.div
//             initial={{ opacity: 0, scale: 0.9 }}
//             animate={{ opacity: 1, scale: 1 }}
//             transition={{ duration: 0.5 }}
//             className="max-w-2xl mx-auto bg-white rounded-lg shadow-sm border border-gray-200 p-8"
//           >
//             <motion.div
//               initial={{ scale: 0 }}
//               animate={{ scale: 1 }}
//               transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
//               className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6"
//             >
//               <CheckCircle className="w-12 h-12 text-green-600" />
//             </motion.div>

//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.4 }}
//               className="text-center mb-8"
//             >
//               <h1 className="text-3xl font-bold text-gray-900 mb-2">
//                 Welcome to Energy Pros Connect! 🎉
//               </h1>
//               <p className="text-lg text-gray-600">
//                 Your application has been successfully submitted and is now
//                 under review.
//               </p>
//             </motion.div>

//             {/* Application Summary */}
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.6 }}
//               className="mb-8"
//             >
//               <h2 className="text-xl font-semibold text-gray-900 mb-4">
//                 Application Summary
//               </h2>
//               <div className="bg-gray-50 rounded-lg p-6 space-y-4">
//                 <div className="flex items-center justify-between">
//                   <span className="text-gray-600">Application Status:</span>
//                   <span className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm font-medium">
//                     Under Review
//                   </span>
//                 </div>
//                 <div className="flex items-center justify-between">
//                   <span className="text-gray-600">Submission Date:</span>
//                   <span className="text-gray-900">
//                     {new Date().toLocaleDateString()}
//                   </span>
//                 </div>
//                 <div className="flex items-center justify-between">
//                   <span className="text-gray-600">Application ID:</span>
//                   <span className="text-gray-900 font-mono">
//                     EPC-{Date.now().toString().slice(-6)}
//                   </span>
//                 </div>
//               </div>
//             </motion.div>

//             {/* Next Steps */}
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.8 }}
//               className="mb-8"
//             >
//               <h2 className="text-xl font-semibold text-gray-900 mb-4">
//                 What Happens Next?
//               </h2>
//               <div className="space-y-4">
//                 <div className="flex items-start space-x-4 p-4 bg-blue-50 rounded-lg">
//                   <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
//                     <Mail className="w-4 h-4 text-blue-600" />
//                   </div>
//                   <div>
//                     <h3 className="font-medium text-gray-900">
//                       Email Confirmation
//                     </h3>
//                     <p className="text-sm text-gray-600">
//                       You'll receive a confirmation email within the next few
//                       minutes.
//                     </p>
//                   </div>
//                 </div>
//                 <div className="flex items-start space-x-4 p-4 bg-yellow-50 rounded-lg">
//                   <div className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center flex-shrink-0">
//                     <Calendar className="w-4 h-4 text-yellow-600" />
//                   </div>
//                   <div>
//                     <h3 className="font-medium text-gray-900">
//                       Review Process (24-48 hours)
//                     </h3>
//                     <p className="text-sm text-gray-600">
//                       Our team will review your credentials and experience.
//                     </p>
//                   </div>
//                 </div>
//                 <div className="flex items-start space-x-4 p-4 bg-green-50 rounded-lg">
//                   <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
//                     <Phone className="w-4 h-4 text-green-600" />
//                   </div>
//                   <div>
//                     <h3 className="font-medium text-gray-900">
//                       WhatsApp Notification
//                     </h3>
//                     <p className="text-sm text-gray-600">
//                       You'll receive your approval status and next steps via
//                       WhatsApp.
//                     </p>
//                   </div>
//                 </div>
//                 <div className="flex items-start space-x-4 p-4 bg-purple-50 rounded-lg">
//                   <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
//                     <Users className="w-4 h-4 text-purple-600" />
//                   </div>
//                   <div>
//                     <h3 className="font-medium text-gray-900">
//                       Network Access
//                     </h3>
//                     <p className="text-sm text-gray-600">
//                       Once approved, you'll gain access to our professional
//                       network and opportunities.
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </motion.div>

//             {/* Benefits Preview */}
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 1.0 }}
//               className="mb-8"
//             >
//               <h2 className="text-xl font-semibold text-gray-900 mb-4">
//                 What You'll Get Access To
//               </h2>
//               <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//                 <div className="text-center p-4 bg-gray-50 rounded-lg">
//                   <Award className="w-8 h-8 text-indigo-600 mx-auto mb-2" />
//                   <h3 className="font-medium text-gray-900 mb-1">
//                     Training Programs
//                   </h3>
//                   <p className="text-xs text-gray-600">
//                     Free certification courses
//                   </p>
//                 </div>
//                 <div className="text-center p-4 bg-gray-50 rounded-lg">
//                   <Users className="w-8 h-8 text-green-600 mx-auto mb-2" />
//                   <h3 className="font-medium text-gray-900 mb-1">
//                     Job Opportunities
//                   </h3>
//                   <p className="text-xs text-gray-600">
//                     Verified installation projects
//                   </p>
//                 </div>
//                 <div className="text-center p-4 bg-gray-50 rounded-lg">
//                   <Home className="w-8 h-8 text-purple-600 mx-auto mb-2" />
//                   <h3 className="font-medium text-gray-900 mb-1">
//                     Professional Network
//                   </h3>
//                   <p className="text-xs text-gray-600">
//                     Connect with industry experts
//                   </p>
//                 </div>
//               </div>
//             </motion.div>

//             {/* Action Buttons */}
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 1.2 }}
//               className="space-y-4"
//             >
//               <button
//                 onClick={() => (window.location.href = "/")}
//                 className="w-full flex items-center justify-center px-6 py-3 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 transition-colors"
//               >
//                 <Home className="w-4 h-4 mr-2" />
//                 Return to Homepage
//                 <ArrowRight className="w-4 h-4 ml-2" />
//               </button>
//               <div className="text-center">
//                 <p className="text-sm text-gray-600 mb-2">
//                   Need help or have questions?
//                 </p>
//                 <a
//                   href="https://wa.me/2348012345678"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="inline-flex items-center text-green-600 hover:text-green-800 text-sm font-medium"
//                 >
//                   <Phone className="w-4 h-4 mr-1" />
//                   Contact us on WhatsApp
//                 </a>
//               </div>
//             </motion.div>

//             {/* Important Notice */}
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 1.4 }}
//               className="mt-8 p-4 bg-amber-50 border border-amber-200 rounded-lg"
//             >
//               <h3 className="font-medium text-amber-800 mb-2">
//                 Important Notice
//               </h3>
//               <p className="text-sm text-amber-700">
//                 Please keep your phone accessible as we may need to contact you
//                 during the review process. Make sure to check your email and
//                 WhatsApp regularly for updates.
//               </p>
//             </motion.div>
//           </motion.div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CompletionScreen;

"use client";

import type React from "react";
import { motion } from "framer-motion";
import {
  CheckCircle,
  ArrowRight,
  Home,
  Mail,
  Calendar,
  Users,
  Award,
  Phone,
} from "lucide-react";

const CompletionScreen: React.FC = () => {
  const progressSteps = [
    {
      id: 1,
      title: "Application Submitted",
      description: "Your information has been received",
      status: "completed",
    },
    {
      id: 2,
      title: "Email Confirmation",
      description: "Confirmation sent to your inbox",
      status: "current",
    },
    {
      id: 3,
      title: "Review Process",
      description: "Our team will verify your credentials",
      status: "pending",
    },
    {
      id: 4,
      title: "WhatsApp Notification",
      description: "You'll receive approval status",
      status: "pending",
    },
    {
      id: 5,
      title: "Network Access",
      description: "Join our professional community",
      status: "pending",
    },
  ];

  const getStepIcon = (status: string, stepId: number) => {
    switch (status) {
      case "completed":
        return (
          <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center">
            <CheckCircle className="w-5 h-5 text-white" />
          </div>
        );
      case "current":
        return (
          <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center">
            <div className="w-3 h-3 bg-white rounded-full" />
          </div>
        );
      default:
        return (
          <div className="w-8 h-8 border-2 border-gray-300 rounded-full flex items-center justify-center">
            <span className="text-sm text-gray-400">{stepId}</span>
          </div>
        );
    }
  };

  return (
    <div className="h-screen bg-gray-50 overflow-hidden">
      <div className="flex h-full">
        {/* Left Sidebar - Progress Indicator */}
        <div className="hidden lg:flex w-[320px] bg-white shadow-sm flex-shrink-0">
          <div className="flex flex-col justify-center px-8 py-12 w-full">
            <div className="mb-12">
              <h2 className="text-xl font-bold text-gray-900 mb-2">
                Application Progress
              </h2>
              <p className="text-gray-600">Track your onboarding status</p>
            </div>

            <div className="space-y-6">
              {progressSteps.map((step, index) => (
                <motion.div
                  key={step.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start"
                >
                  <div className="flex flex-col items-center flex-shrink-0">
                    {getStepIcon(step.status, step.id)}
                    {index < progressSteps.length - 1 && (
                      <div className="w-px h-12 bg-gray-200 mt-2" />
                    )}
                  </div>
                  <div className="ml-4">
                    <h3
                      className={`text-sm font-medium ${
                        step.status === "completed"
                          ? "text-purple-600"
                          : step.status === "current"
                          ? "text-purple-600"
                          : "text-gray-500"
                      }`}
                    >
                      {step.title}
                    </h3>
                    <p className="text-xs text-gray-500 mt-1">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Main Content */}
        <div className="flex-1 flex justify-center p-4 overflow-y-auto lg:items-start lg:pt-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl mx-auto bg-white rounded-lg shadow-sm border border-gray-200 p-8"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6"
            >
              <CheckCircle className="w-12 h-12 text-green-600" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-center mb-8"
            >
              <h1 className="text-3xl font-bold text-gray-900 mb-2">
                Welcome to Energy Pros Connect! 🎉
              </h1>
              <p className="text-lg text-gray-600">
                Your application has been successfully submitted and is now
                under review.
              </p>
            </motion.div>

            {/* Application Summary */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="mb-8"
            >
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                Application Summary
              </h2>
              <div className="bg-gray-50 rounded-lg p-6 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Application Status:</span>
                  <span className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm font-medium">
                    Under Review
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Submission Date:</span>
                  <span className="text-gray-900">
                    {new Date().toLocaleDateString()}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Application ID:</span>
                  <span className="text-gray-900 font-mono">
                    EPC-{Date.now().toString().slice(-6)}
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Next Steps */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="mb-8"
            >
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                What Happens Next?
              </h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-4 p-4 bg-blue-50 rounded-lg">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="w-4 h-4 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900">
                      Email Confirmation
                    </h3>
                    <p className="text-sm text-gray-600">
                      You'll receive a confirmation email within the next few
                      minutes.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4 p-4 bg-yellow-50 rounded-lg">
                  <div className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Calendar className="w-4 h-4 text-yellow-600" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900">
                      Review Process (24-48 hours)
                    </h3>
                    <p className="text-sm text-gray-600">
                      Our team will review your credentials and experience.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4 p-4 bg-green-50 rounded-lg">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="w-4 h-4 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900">
                      WhatsApp Notification
                    </h3>
                    <p className="text-sm text-gray-600">
                      You'll receive your approval status and next steps via
                      WhatsApp.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4 p-4 bg-purple-50 rounded-lg">
                  <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Users className="w-4 h-4 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900">
                      Network Access
                    </h3>
                    <p className="text-sm text-gray-600">
                      Once approved, you'll gain access to our professional
                      network and opportunities.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Benefits Preview */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.0 }}
              className="mb-8"
            >
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                What You'll Get Access To
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <Award className="w-8 h-8 text-indigo-600 mx-auto mb-2" />
                  <h3 className="font-medium text-gray-900 mb-1">
                    Training Programs
                  </h3>
                  <p className="text-xs text-gray-600">
                    Free certification courses
                  </p>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <Users className="w-8 h-8 text-green-600 mx-auto mb-2" />
                  <h3 className="font-medium text-gray-900 mb-1">
                    Job Opportunities
                  </h3>
                  <p className="text-xs text-gray-600">
                    Verified installation projects
                  </p>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <Home className="w-8 h-8 text-purple-600 mx-auto mb-2" />
                  <h3 className="font-medium text-gray-900 mb-1">
                    Professional Network
                  </h3>
                  <p className="text-xs text-gray-600">
                    Connect with industry experts
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 }}
              className="space-y-4"
            >
              <button
                onClick={() => (window.location.href = "/")}
                className="w-full flex items-center justify-center px-6 py-3 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 transition-colors"
              >
                <Home className="w-4 h-4 mr-2" />
                Return to Homepage
                <ArrowRight className="w-4 h-4 ml-2" />
              </button>
              <div className="text-center">
                <p className="text-sm text-gray-600 mb-2">
                  Need help or have questions?
                </p>
                <a
                  href="https://wa.me/2348012345678"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-green-600 hover:text-green-800 text-sm font-medium"
                >
                  <Phone className="w-4 h-4 mr-1" />
                  Contact us on WhatsApp
                </a>
              </div>
            </motion.div>

            {/* Important Notice */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.4 }}
              className="mt-8 p-4 bg-amber-50 border border-amber-200 rounded-lg"
            >
              <h3 className="font-medium text-amber-800 mb-2">
                Important Notice
              </h3>
              <p className="text-sm text-amber-700">
                Please keep your phone accessible as we may need to contact you
                during the review process. Make sure to check your email and
                WhatsApp regularly for updates.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default CompletionScreen;

