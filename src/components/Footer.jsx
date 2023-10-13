'use client'
import {FaTwitterSquare} from 'react-icons/fa'
import {FaWhatsappSquare} from 'react-icons/fa'
import {FaLinkedin} from 'react-icons/fa6'

import React from 'react'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className='md: h-40 bg-blue-800'>
        <div className='p-5 flex flex-col justify-center items-center gap-6'>
            <div className='flex justify-center items-center gap-12 py-2'>
                    <Link href="https://www.linkedin.com/in/faisal-sothe/"><FaLinkedin className='text-white text-3xl'/></Link>
                    <Link href="https://twitter.com/SotheFaisal"><FaTwitterSquare className='text-white text-3xl'/></Link>
                    <Link href="https://wa.me/9137889656"><FaWhatsappSquare className='text-white text-3xl'/></Link>
            </div>
            <p>Copyright ©️ 2023 Faisal Sothe, India.</p>
        </div>
    </footer>
  )
}

export default Footer