import React from 'react';
import { Globe, Shield } from 'lucide-react';
import SectionTitle from '@/components/common/SectionTitle';

const AdditionalInfoSection: React.FC = () => {
  return (
    <section>
      <SectionTitle>Additional Information</SectionTitle>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="bg-gradient-to-br from-orange-200 to-orange-300 dark:from-orange-600 dark:to-orange-700 p-6 rounded-xl text-center">
          <Globe className="w-8 h-8 mx-auto mb-3 text-orange-700 dark:text-orange-200" />
          <h3 className="font-bold text-gray-800 dark:text-white mb-2">Languages</h3>
          <p className="text-gray-700 dark:text-gray-200">Spanish (Fluent)<br />Portuguese (Intermediate)</p>
        </div>
        <div className="bg-gradient-to-br from-green-200 to-blue-200 dark:from-green-600 dark:to-blue-600 p-6 rounded-xl text-center">
          <Shield className="w-8 h-8 mx-auto mb-3 text-blue-700 dark:text-blue-200" />
          <h3 className="font-bold text-gray-800 dark:text-white mb-2">Military Service</h3>
          <p className="text-gray-700 dark:text-gray-200">United States<br />Marine Corps</p>
        </div>
      </div>

      {/* Philosophy */}
      <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white p-8 rounded-2xl text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent"></div>
        <div className="relative z-10">
          <h3 className="text-xl font-bold mb-4">Core Philosophy</h3>
          <p className="text-lg opacity-90 leading-relaxed">
            "Being a hyperglot allows me to use the right tool for the right job. Great leaders stay in the trenches with emerging tech and help solve the big problems."
          </p>
        </div>
      </div>
    </section>
  );
};

export default AdditionalInfoSection;
