'use client'
import React, { useState } from 'react'
import loginSvg from "../../assets/login.svg"
import Image from 'next/image';
import { addTask } from '@/services/taskService';
import { Toast, toast } from 'react-toastify';


const AddTask = () => {

  const [task,setTask]=useState({
    title:'',
    content:'',
    status:'none',
    userId:''
  });

  async function handleAddTask(event){
    await event.preventDefault();

    try{
      const result=await addTask(task);
      console.log(result)
      toast.success("Task Added!!",{
        position:"top-center"
      });
    }
    catch(error){
      toast.error("Task not added",{position:"top-center"});
      console.log(error);
      
    }

    setTask({
      title:'',
      content:'',
      status:'',
      userId:''
    });
  }

  return (
    // Title
    <div className=''>
        <div className='flex flex-col justify-center items-center p-5'>
          <div className='my-2 flex justify-center items-center'>
            <Image src={loginSvg} priority alt="login_banner_img" style={
              {width:"30%"}
            }/>
          </div>
        <h1 className='text-1xl text-center'>Add your Task Here</h1>
        <form action="/" onSubmit={handleAddTask}>
          {/* Title */}
          <div className='mt-4'>
            <label htmlFor="taskTitle" className='block text-sm font-medium mb-2'>Title:</label>
            <input type="text" name="taskTitle" id="task_title" className='w-full rounded-3xl md:w-80 p-3 bg-gray-800 focus:ring-gray-100 border border-gray-800'
            onChange={(event)=>{
              setTask({
                ...task,
                title:event.target.value,
              });
            }}
            value={task.title}/>
          </div>
          {/* Content */}
          <div className='mt-4'>
            <label htmlFor="taskContent" className='block text-sm font-medium mb-2'>Content:</label>
            <textarea className='rounded-3xl w-full md:w-80 p-3 bg-gray-800 focus:ring-gray-100 border border-gray-800' name="taskContent" id="task_content" rows="5"
            onChange={(event)=>{
              setTask({
                ...task,
                content:event.target.value,
              });
            }}
            value={task.content}
            ></textarea>
          </div>
          {/* Status */}
          <div className='mt-4' >
          <label htmlFor="taskStatus" className='block text-sm font-medium mb-2'>Status:</label>
          <select name="taskStatus" id="task_status" className='rounded-3xl w-full md:w-80 p-3 bg-gray-800 focus:ring-gray-100 border border-gray-800'
          onChange={(event)=>{
            setTask({
              ...task,
              status:event.target.value,
            });
          }}
          value={task.status}
          >
            <option value="none" disabled>---Select Status---</option>
            <option value="pending">pending</option>
            <option value="completed">completed</option>
          </select>
          </div>
          <div className='mt-4 flex justify-center'>
          <button type='submit' className='bg-blue-600 mr-3 py-2 px-3 rounded-lg hover:bg-blue-800'>Add</button>
          <button className='bg-red-600 py-2 px-3 rounded-lg hover:bg-red-800'>Clear</button>
          </div>

        </form>
        </div>
    </div>
    
  )
}

export default AddTask;