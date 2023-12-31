'use client'
import TaskSvg from '../../assets/tasks.svg'
import Image from 'next/image';
import DynamicPage from './DynamicPageTitle';
import { useContext } from 'react';
import UserContext from '@/context/userContext';
import Link from 'next/link';


const BannerSection = () => {
  const pageTitle="Home: Work Manager";
  const context=useContext(UserContext);
  if(context?.user){
    var name=context.user.name;
  }

  return (
    <div className="bg-blue-500 p-4 text-white">
      <DynamicPage title={pageTitle}/>
      <div className="container mx-auto flex items-center justify-around py-5">
        <div className='mr-4'>
        <Image 
          src={TaskSvg}
          priority
          alt="Banner Image"
          className="w-60 rounded-full shadow-md"
        />
        </div>
        <div className='text-center'>
        <h1 className="text-xl md:text-4xl font-semibold">
        {context?.user ? `Welcome,${name.charAt(0).toUpperCase()+name.slice(1)}` : "Welcome to Your Task Manager"}
        </h1>
        <p className="mt-4 mb-4 text-lg">Stay organized and get things done!</p>
        <Link href={context?.user ? '/add-task' : '/log-in' } className="my-2 bg-white text-blue-500 mt-4 py-3 px-6 rounded-full text-lg shadow-md transition duration-300">
        {context?.user ? "Add Task" : "Let's Begin"}
        </Link>
        </div>
      </div>
    </div>
  );
};

export default BannerSection;
