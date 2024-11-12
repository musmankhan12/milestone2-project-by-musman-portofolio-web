"use client";

import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";

const services = [
    {
        num: '01',
        title: 'Web Development',
        description: 
        'As a professional web developer, I specialize in crafting dynamic, responsive applications using TypeScript, Next.js, HTML, CSS, and JavaScript. My expertise in TypeScript ensures robust, type-safe code, enhancing maintainability and reducing bugs. With Next.js, I build high-performance, server-side rendered applications, optimizing for SEO and user experience. My strong foundation in HTML and CSS enables me to create visually appealing and accessible designs that engage users effectively. Leveraging JavaScript for interactive features, I deliver seamless functionality. I stay updated with industry trends and best practices, ensuring that my projects not only meet client expectations but also set new standards in web development..',
        href: "",
    },
    {
        num: '02',
        title: 'UI/UX Design',
        description: 
        'As a professional UX/UI designer, I specialize in crafting intuitive and aesthetically pleasing digital experiences. Proficient in TypeScript, Next.js, HTML, CSS, and JavaScript, I leverage these technologies to create responsive and user-centered interfaces. My approach combines robust design principles with a deep understanding of user behavior, ensuring that each project not only meets business goals but also resonates with users. I prioritize accessibility and performance, conducting usability testing and iterating on feedback to enhance the user journey. With a strong emphasis on collaboration, I work closely with developers and stakeholders to bring innovative concepts to life.',
        href: "",
    },
    {
        num: '03',
        title: 'Logo Design',
        description: 
        'As a professional logo designer, I specialize in creating distinctive brand identities through visually compelling and innovative logo designs. Leveraging my expertise in TypeScript, Next.js, HTML, CSS, and JavaScript, I develop dynamic and responsive web applications that effectively showcase my designs. My process involves understanding client needs, market trends, and target audiences to craft logos that embody their brand ethos. Utilizing modern design principles and tools, I ensure each logo is not only aesthetically pleasing but also versatile for various applications. My commitment to excellence drives me to deliver unique logos that leave a lasting impression and elevate brand visibility.',
        href: "",
    },
    // {
    //     num: '04',
    //     title: 'SEO',
    //     description: 
    //     'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit accusantium.',
    //     href: "",
    // },
];

import { delay, motion } from "framer-motion";
import { Section } from "lucide-react";

const Services = () => {
    return (
        <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
            <div className="container mx-auto">
            <motion.div
            initial={{ opacity: 0}}
            animate={{
                opacity: 1,
                transition: {delay: 2.4, duration: 0.4, ease: "easeIn"},
            }}
            className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
            >
              {services.map((service, index) => {
                return (
                    <div key={index} className="flex-1 flex flex-col justify-center gap-6 group"
                    >
                        {/* top */}
                        <div className="w-full flex justify-between items-center">
                        <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">
                            {service.num}
                            </div>
                        <Link href={service.href} 
                        className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-lime-500 transition-all duration-500 flex justify-center items-center hover:-rotate-45"
                        >
                         <BsArrowDownRight className="text-primary text-3xl" />
                        </Link>
                        </div>
                        {/* title */}
                        <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-lime-500 transition-all duration-500">
                            {service.title}
                            </h2>
                        {/* description */}
                        <p className="text-white">{service.description}</p>
                        {/* border */}
                        <div className="border-b border-white/20 w-full"></div>
                    </div>                 
                );
              })}
            </motion.div>
            </div>
        </section>
    )
}
export default Services