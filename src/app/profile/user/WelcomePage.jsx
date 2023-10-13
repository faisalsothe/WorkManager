'use client'
import React from "react";

function WelcomePage() {

  return (
    <div className="bg-blue-500 min-h-screen flex items-center justify-center">
      <div className="text-center text-white">
        <h1 className="text-5xl font-semibold mb-4">Welcome</h1>
        <p className="text-xl mb-8">
        Welcome to your new task manager! We understand that managing your tasks and responsibilities efficiently is crucial in today's fast-paced world. Whether you're a busy professional, a student juggling multiple assignments, or simply looking to stay organized in your daily life, our task manager is here to simplify your journey.<br/>
With our user-friendly interface and powerful features, you'll be able to effortlessly create, prioritize, and track your tasks, ensuring that nothing falls through the cracks. Say goodbye to the stress of forgotten to-dos and missed deadlines, and say hello to a more organized and productive you.


        </p>
      </div>
    </div>
  );
}

export default WelcomePage;
