'use client'
import TaskSvg from '../../assets/tasks.svg'
import Image from 'next/image';
import DynamicPage from './DynamicPageTitle';


const BannerSection = () => {
  const pageTitle="Home: Work Manager";
  return (
    <div className="bg-blue-500 p-4 text-white">
      <DynamicPage title={pageTitle}/>
      <div className="container mx-auto flex items-center justify-around py-5">
        <div className='mr-4'>
        <Image 
          src={TaskSvg}
          alt="Banner Image"
          className="w-60 rounded-full shadow-md"
        />
        </div>
        <div className='text-center'>
        <h1 className="text-4xl font-semibold">Welcome to Your Task Manager</h1>
        <p className="mt-4 text-lg">Stay organized and get things done!</p>
        <button className=" my-2 bg-white text-blue-500 mt-4 py-2 px-4 rounded-full text-lg shadow-md transition duration-300">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default BannerSection;
