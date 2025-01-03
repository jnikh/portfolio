'use client'
import React from 'react'
import { FaLinkedin, FaTwitter, FaInstagram , FaWhatsapp} from 'react-icons/fa6'

const Footer = () => {
  return (
    <div className='px-6 md:px-0 t-12 text-white/70 py-8 max-w-[600px] mx-auto border-t border-gray-700 pt-4 flex justify-between items-center '>
      
      <h1 className='text-2xl font-bold'>Nikhil Jha</h1>
      
      {/* Social Media Links */}
      <div className='flex space-x-4'>
        <a href="https://www.linkedin.com/in/nikhil-jha-145793239/" target='_blank' className='hover:text-gray-300'><FaLinkedin size={24}/></a>
        <a href="https://x.com/Nikhilj61057141" className='hover:text-gray-300'><FaTwitter size={24}/></a>
        <a href="#" className='hover:text-gray-300'><FaInstagram size={24}/></a>
        <a href="http://Wa.me/+919136165912" target='_blank' className='hover:text-gray-300'><FaWhatsapp size={24}/></a>

      </div>
    </div>
  )
}

export default Footer
