import React from 'react';
import { useFormContext } from 'react-hook-form';
import { CheckCircle, Mail, User, Settings } from 'lucide-react';

const StepFour: React.FC = () => {
  const { watch } = useFormContext();
  const formData = watch();

  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <CheckCircle className="w-8 h-8 text-green-600" />
        </div>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">
          Review & Finish
        </h2>
        <p className="text-gray-600">
          Please review your information before completing the setup
        </p>
      </div>

      <div className="space-y-4">
        <div className="bg-gray-50 rounded-lg p-4">
          <div className="flex items-center space-x-3 mb-3">
            <Mail className="w-5 h-5 text-indigo-600" />
            <h3 className="font-medium text-gray-900">Account Information</h3>
          </div>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-gray-600">Email:</span>
              <span className="text-gray-900">{formData.email}</span>
            </div>
          </div>
        </div>

        <div className="bg-gray-50 rounded-lg p-4">
          <div className="flex items-center space-x-3 mb-3">
            <User className="w-5 h-5 text-green-600" />
            <h3 className="font-medium text-gray-900">Personal Details</h3>
          </div>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-gray-600">Name:</span>
              <span className="text-gray-900">{formData.firstName} {formData.lastName}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Company:</span>
              <span className="text-gray-900">{formData.company}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Phone:</span>
              <span className="text-gray-900">{formData.phone}</span>
            </div>
          </div>
        </div>

        <div className="bg-gray-50 rounded-lg p-4">
          <div className="flex items-center space-x-3 mb-3">
            <Settings className="w-5 h-5 text-purple-600" />
            <h3 className="font-medium text-gray-900">Preferences</h3>
          </div>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-gray-600">Role:</span>
              <span className="text-gray-900 capitalize">{formData.role?.replace('-', ' ')}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Interests:</span>
              <span className="text-gray-900">{formData.interests?.length || 0} selected</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Notifications:</span>
              <span className="text-gray-900">{formData.notifications ? 'Enabled' : 'Disabled'}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-indigo-50 border border-indigo-200 rounded-lg p-4">
        <h4 className="font-medium text-indigo-900 mb-2">Ready to get started?</h4>
        <p className="text-sm text-indigo-700">
          Click "Complete Setup" to finish creating your SlothUI account and start building amazing interfaces.
        </p>
      </div>
    </div>
  );
};

export default StepFour;
