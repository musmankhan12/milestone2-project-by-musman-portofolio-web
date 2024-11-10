"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";

import { Swiper, SwiperSlide }  from "swiper/react";
import "swiper/css";

import { BsArrowUpRight, BsGithub } from "react-icons/bs";

import { 
    Tooltip, 
    TooltipContent, 
    TooltipProvider, 
    TooltipTrigger 
} from "@/components/ui/tooltip";

import Link from "next/link";
import Image from "next/image";
import WorkSliderBtns from "@/components/WorkSliderBtns";

const projects = [
    {
        num: "01",
        category: "frontend",
        title: "project 1",
        description: "Introducing our innovative Resume Builder project, designed to empower users in crafting their perfect CV effortlessly. With an intuitive interface, anyone can create a professional resume tailored to their career aspirations in minutes. Our platform enables seamless customization and offers a variety of templates to choose from, ensuring each resume stands out. Users can easily download their finished CV in PDF format, making it convenient for applications. We prioritize user experience, providing a hassle-free solution to job seekers. Access the live link now and elevate your job search with a polished resume that showcases your unique skills and qualifications!",
        stack: [{ name: "Html 5" }, {name: "css 3"}, {
            name: "Javascript" }],
            image: "/resume1.jpg",
            live: "https://vercel.com/m-usmans-projects-52835fbb/milstone2resumebuilderprojectbymusman",
            github: "https://github.com/musmankhan12/milstone2resumebuilderprojectbymusman",
    },


    {
        num: "02",
        category: "frontend",
        title: "project 2",
        description: "As a passionate web developer, I crafted an engaging website for a cutting-edge website using Next.js, seamlessly integrating a modern Figma template. This project highlights my ability to transform design concepts into responsive, user-friendly interfaces, ensuring a cohesive visual experience. By leveraging Next.js’s powerful features, I optimized performance and scalability while maintaining clean, maintainable code. The hero section effectively captures user attention, conveying brand identity and core messages with striking visuals and intuitive navigation. This experience underscores my commitment to excellence in web development and my proficiency in translating aesthetic visions into functional realities.",
        stack: [{ name: "Next.js" }, {name: "Tailwind.css"}, {
            name: "Node.js" },{name: "figma"}],
            image: "/figma web.jpg",
            live: "",
            github: "",
    },
    {
        num: "03",
        category: "frontend",
        title: "project 3",
        description: "As a web enthusiast with a passion for design and user experience, I created this static portfolio website to showcase my skills and projects. Utilizing HTML and CSS, I aimed to craft a visually appealing and responsive platform that reflects my creative vision. This project highlights my ability to build clean, well-structured layouts while ensuring accessibility and responsiveness across devices. Through this portfolio, I strive to connect with like-minded individuals and potential collaborators, inviting you to explore my work and witness my commitment to excellence in web development.",
        stack: [{ name: "Html 5" }, {name: "Css 3"}],
            image: "/portofolio web.jpg",
            live: "",
            github: "https://github.com/musmankhan12/M-usman-portofolio-web-2",
    },
    
];

const Work = () => {
    const [project, setProject] = useState(projects[0]);

    const handleSlideChange = (swiper) => {
        // get current slide index
        const currentIndex = swiper.activeIndex;
        // update project state based on current slide index
        setProject(projects[currentIndex]);
    };  
    
    return (
        <motion.section
        initial={{ opacity: 0 }}
        animate={{ 
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeIn"}
         }}
        className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
        >
            <div className="container mx-auto">
             <div className="flex flex-col xl:flex-row xl:gap-[30px]">
                <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
                    <div className="flex flex-col gap-[30px] h-[50%]">
                        {/* outline num */}
                        <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                          {project.num}
                        </div>
                        {/* project categary  */}
                        <h2 className="text-[42px] font-bold leading-3 text-white group-hover:text-accent transition-all duration-500 capitalize">
                            {project.category} project
                        </h2>
                        {/* project description  */}
                        <p className="text-white/60">{project.description}</p>
                        {/* stock */}
                        <ul className="flex gap-6">
                            {project.stack.map((item, index) => {
                                return (
                                    <li key={index} className="text-xl text-accent">
                                       {item.name}
                                       {/* remove the last comma */}
                                       {index !== project.stack.length - 1 && ","}
                                    </li>
                                )
                            })}
                        </ul>
                             {/* border */}
                          <div className="border border-white/20"></div>
                        {/* buttons */}
                        <div className="flex items-center gap-4">
                            <Link href={project.live}>
                        <TooltipProvider delayDutaion={100}>
                            <Tooltip>
                                <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                                    <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                                </TooltipTrigger>
                                <TooltipContent>
                                    <p>Live project</p>
                                </TooltipContent>
                            </Tooltip>
                        </TooltipProvider>
                            </Link>
                            {/* github project button */}
                            <Link href={project.github}>
                        <TooltipProvider delayDutaion={100}>
                            <Tooltip>
                                <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                                    <BsGithub className="text-white text-3xl group-hover:text-accent" />
                                </TooltipTrigger>
                                <TooltipContent>
                                    <p>GitHub project</p>
                                </TooltipContent>
                            </Tooltip>
                        </TooltipProvider>
                            </Link>
                        </div>
                    </div>
                    </div>
                <div className="w-full xl:w-[50%]">
                    <Swiper 
                    spaceBetween={30} 
                    slidesPerView={1}
                    className="xl:h-[520px] mb-12"
                    onSlideChange={handleSlideChange}
                    >
                        {projects.map((project, index) => {
                            return <SwiperSlide key={index} className="w-full">
                                <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                                {/* overlay */}
                                <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                                {/* image */}
                                <div className="relative w-full h-full">
                                    <Image 
                                    src={project.image} 
                                    fill 
                                    className="object-cover"
                                    alt=""
                                    />
                                </div>
                                </div>
                                Slide</SwiperSlide>
                        })}
                        {/* slider buttons */}
                        <WorkSliderBtns 
                        containerStyles="flex gap-2 absolute right-0 bottom=[calc(50%_-_22px)] xl:bottom-0 z-20 w-full juxtify-between xl:w-max xl:justify-none"
                        btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] flex justify-center items-center transition-all"
                        />
                    </Swiper>
                </div>
                </div>   
                </div>
        </motion.section>
    );
};
export default Work;
