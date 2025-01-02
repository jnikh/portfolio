'use client';
import React from 'react';
import Image from 'next/image';
import phone from '../assets/phone.png';
import mail from '../assets/mail.png';

const Contact = () => {
  return (
    <div className="max-w-[1000px] mx-auto flex flex-col lg:flex-row text-white/70 p-8 rounded-lg space-y-8 lg:space-y-0 lg:space-x-8" id="contact">
      <div className="flex justify-center items-center">
        <ul className="space-y-4 flex flex-col items-center lg:items-start">
          <li className="flex items-center">
            <Image src={phone} alt="Phone" className="h-12 w-auto mr-4" />
            <a href="tel:9136165912" className='text-xl no-underline'>+91 9136165912</a>
          </li>
          <li className="flex items-center">
            <Image src={mail} alt="Mail" className="h-12 w-auto mr-4" />
            <a href="mailto:jhanikhil881@gmail.com" className="text-xl no-underline">
              jhanikhil881@gmail.com
            </a>
          </li>
        </ul>
      </div>

      <div className='bg-white/10 p-6 rounded-xl max-w-[550px]'>
       <h2 className='text-5xl font-bold text-orange-400 mb-4'> Lets Connect</h2>
       <p className='text-white/70 mb-6'>Send me a message and lets connect</p>
       <form className='space-y-4' action="https://getform.io/f/axoopvvb" method='post'>
          <div className='grid md:grid-cols-2 gap-4'>
             <input type='text' name='name' className='bg-black/70 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-orange-400 ' placeholder='Name'/>
             <input type='text' name='name' className='bg-black/70 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-orange-400 ' placeholder='Last Name'/>

             <input type='email' name='email' className='bg-black/70 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-orange-400 ' placeholder='Email'/>
             <input type='phone' name='phone' className='bg-black/70 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-orange-400 ' placeholder='Mobile Number'/>


          </div>
          <textarea className='bg-black/70 w-full rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-orange-400 ' placeholder='Your Message'/>
          <button className='bg-orange-700 hover:bg-orange-500 text-white px-6 py-2 w-full font-semibold text-xl rounded-xl'>Send Message</button>

       </form>

      </div>
    </div>
  );
};

export default Contact;
