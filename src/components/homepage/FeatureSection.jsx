import React from 'react';
import { FaTasks, FaCalendar, FaCheckCircle } from 'react-icons/fa';

const FeatureSection = () => {
  return (
    <section className="bg-blue-600 py-12">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-semibold text-white mb-8">Key Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Feature 1 */}
          <div className="p-6 shadow-lg rounded-lg bg-blue-600 text-white">
            <div className="text-4xl mb-4">
            <div className='flex justify-center'><FaTasks /></div>
            </div>
            <h3 className="text-xl font-semibold mb-2">Task Management</h3>
            <p>
              Efficiently manage your tasks and stay organized.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="p-6 shadow-lg rounded-lg bg-blue-600 text-white">
            <div className="text-4xl mb-4">
            <div className='flex justify-center'><FaCalendar /></div>
            </div>
            <h3 className="text-xl font-semibold mb-2">Calendar Integration</h3>
            <p>
              Seamlessly sync tasks with your calendar events.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="p-6 shadow-lg rounded-lg bg-blue-600 text-white">
            <div className="text-4xl mb-4">
              <div className='flex justify-center'><FaCheckCircle /></div>
            </div>
            <h3 className="text-xl font-semibold mb-2">Completion Tracking</h3>
            <p>
              Track task completion and achieve your goals.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
