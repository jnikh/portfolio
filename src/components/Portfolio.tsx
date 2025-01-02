"use client";
import React from 'react';
import Image from 'next/image';
import { motion } from "motion/react"
import project from '../assets/project.jpg';
import proj5 from '../assets/proj5.png';

const projects = [
    {
        title: "Book Store",
        desc: "The Book Store MERN Project is a full-stack web application designed for book enthusiasts, built using the MERN stack (MongoDB, Express.js, React.js, and Node.js). It allows users to browse, add, and manage books seamlessly through an interactive and user-friendly interface. The project demonstrates efficient data handling with MongoDB, robust API integration using Express.js and Node.js, and a dynamic front end powered by React.js, offering a comprehensive and responsive book management solution.",
        devStack: "MongoDB, Express, React, Node.js",
        link: "#",
        git: "https://github.com/jnikh/Book_Store_Mern",
        src: project,
    },
    {
        title: "Task List Manager",
        desc: "The Task Management Project is a lightweight and efficient web application developed to simplify task organization and tracking. Built with a focus on user-friendly design and robust functionality, this project enables users to create, update, and manage tasks effectively. Leveraging modern web development practices, it ensures seamless task handling and an intuitive user interface.",
        devStack: "MongoDB, Express, React, Node.js",
        link: "https://fastidious-cassata-e066e6.netlify.app/",
        git: "https://github.com/jnikh/Task",
        src: proj5,
    },
];

const Portfolio = () => {
    return (
        <div className="text-white bg-gradient-to-b from-black to-[#381a5f] py-18 mt-52" id="portfolio">

<h1 className='text-white text-6xl max-w-[320px] mx-auto font-semibold my-12'>Selected <span className='text-orange-400'>Projects</span></h1>


            <div className="PX-6 md:px-0 max-w-[1000px] mx-auto mt-32 space-y-24">
                {projects.map((project, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 75 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.25 }}
                        className={`mt-12 flex flex-col ${index %2 === 1? " md:flex-row-reverse gap-12":" md:flex-row"}`}
                    >
                        <div className='space-y-2 max-w-[550px]'>
                           <h2 className='text-7xl my-4 text-white/70 '>{`0${index+1}`}</h2>
                           <h2 className='tex-4xl'>{project.title}</h2>
                           <h2 className='text-lg text-white/70 break-words p-4 text-justify'>{project.desc}</h2>
                           <h2 className='text-xl text-orange-500 font-semibold'>{project.devStack}</h2>
                           <div className='w-64 h-[1px] bg-gray-400 my-4'>
                            <a href={project.link} className='mr-6'>Link</a>
                            <a href={project.git}> Github Link</a>
                           </div>
                        </div>

                        <div className='flex justify-center items-center'>
                          <Image src={project.src} alt={project.title} className='has-[350px] w-[500px] object-cover border rounded border-gray-700'/>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default Portfolio;
