'use client'
import React, { useState } from 'react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log(formData);
    // You can send this data to a server or perform other actions.
  };

  return (
    <div className="bg-white p-8 rounded-lg shadow-lg text-black flex flex-col justify-center items-center">
      <h2 className="text-2xl font-semibold mb-4 text-center">Contact Us</h2>
      <form className="" onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="name" className="block font-medium text-gray-700">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md focus:ring focus:ring-indigo-300"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block font-medium text-gray-700">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md focus:ring focus:ring-indigo-300"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block font-medium text-gray-700">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md focus:ring focus:ring-indigo-300"
            rows="4"
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-indigo-500 text-white px-6 py-2 rounded-md hover:bg-indigo-600 focus:outline-none focus:ring focus:ring-indigo-300" 
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactSection;
