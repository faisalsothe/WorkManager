import UserContext from '@/context/userContext';
import Link from 'next/link';
import React, { useContext } from 'react';

const ActionSection = () => {
  const context=useContext(UserContext);
  return (
    <section className="bg-blue-700 py-12">
      <div className="container mx-auto text-center text-white">
        <h2 className="text-4xl font-semibold mb-6">Get Started with Task Manager</h2>
        <p className="text-xl mb-8">
          Start organizing your tasks and boosting your productivity today.
        </p>
        <Link
          href={context?.user ? '/add-task' : '/sign-up' }
          className="bg-white text-blue-500 font-semibold py-3 px-6 rounded-full transition duration-300 ease-in-out inline-block"
        >
          {context?.user ? "Add Your First Assignment" : "Get Started"}
        </Link>
      </div>
    </section>
  );
};

        
export default ActionSection;
