"use client";

import { Info } from "lucide-react";
import {
    FaHtml5,
    FaCss3,
    FaJs,
    FaReact,
    FaFigma,
    FaNodeJs,
}
from "react-icons/fa";

import { SiTailwindcss, SiNextdotjs} from "react-icons/si";

// about data
const about  = {
  
    title: "About me",
    description:"I am currently a pre-engineering student enrolled in BSc, with a keen interest in technology and innovation. Alongside my academic pursuits, I am actively expanding my skill set by learning about Artificial Intelligence, Web 3.0, and the Metaverse at GIAICWith six months of experience in web development, I have a strong foundation in building responsive and dynamic websites. I am currently focusing on UI/UX design and user experiences while working with Next.js 15. My goal is to become a proficient Full Stack Developer, combining both front-end and back-end development skills to create seamless applications.I am passionate about leveraging cutting-edge technology to solve real-world problems and am excited to contribute to the ever-evolving landscape of web development.",
    Info:  [  
        {
            fieldName: "Name",
            fieldValue: "Muhammad Usman"
        },
        {
            fieldName: " Whatsapp Phone",
            fieldValue: "(+92) 3417794833"
        },
        {
            fieldName: "Experience",
            fieldValue: "6 Months"
        },
        {
            fieldName: "Nationality",
            fieldValue: "Pakistani"
        },
        {
            fieldName: "Email",
            fieldValue: "musmankhoso@gmail.com"
        },
        {
            fieldName: "Freelance",
            fieldValue: "Available"
        },
        {
            fieldName: "Language",
            fieldValue: "English, Urdu"
        },
    
    ]
};


// experience data
const experience = {
    icon:'/resume.jpg',
    title:'My experience',
    description:'i am m usman with the experince of 6 months web development.',
    items: [
        {
    Company:'E-Commerce Startup',
    position:'Freelancer web Developer',
    Duration:'2023 - Pressent',

        },

        {
            Company:'E-Commerce Startup',
            position:'Freelancer web Developer',
            Duration:'2023 - Pressent',
        
                },


                {
                    Company:'E-Commerce Startup',
                    position:'Freelancer web Developer',
                    Duration:'2023 - Pressent',
                
                        },


                        {
                            Company:'E-Commerce Startup',
                            position:'Freelancer web Developer',
                            Duration:'2023 - Pressent',
                        
                                }


    ]
}


// education data

const education = {
    icon:'',
    title:'My Education',
    description:'i am m usman with the experince of 6 months web development.',
    items: [
        {
    Institute:'Degree Ratodero ',
    Degree:'Pre-Engeniering',
    Duration:'2020-2022',

        },

        {
            Institute:'GIAIC',
            Degree:'Front-End-web-Developer',
            Duration:'2024',
        
                },

     

    



        ]
    
}


// skills data

const skills = {
    title:'My skills',
    description:' i am passionate web developer.',
    skillist: [
        {
            icon:<FaHtml5 />,
            name:'html 5',

        },
        {
            icon:<FaCss3 />,
            name:'css 3',

        },
        {
            icon:<FaJs />,
            name:'javascript',

        },
        {
            icon:<FaReact />,
            name:'react.js',

        },
        {
            icon:<SiNextdotjs />,
            name:'next.js',

        },
        {
            icon:<SiTailwindcss/>,
            name:'tailwind.css',

        },
        {
            icon:<FaNodeJs />,
            name:'node.js',

        },
        {
            icon:<FaFigma />,
            name:'figma',

        },
    ]
};

import {Tabs, TabsContent, TabsList, TabsTrigger}from '@/components/ui/tabs';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"; 

import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

const Resume = () => {
     return <motion.div initial={{opacity: 0}}  animate={{opacity: 1, transition:{delay: 2.4, duration: 0.4, ease: 'easeIn'},
    }}
     
className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"

     >
        
        <div className="container mx-auto">
<Tabs defaultValue="expeince"  className="flex flex-col xl:flex-row gap-[60px]">
    <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
        <TabsTrigger value="experince">Experince</TabsTrigger>
        <TabsTrigger  value="education">Education</TabsTrigger>
        <TabsTrigger  value="skills">Skills</TabsTrigger>
        <TabsTrigger  value="about">About Me</TabsTrigger>
    </TabsList>

{/* content */}

<div className="min-h-[70vh] w-full ">
    {/* experince */}

    <TabsContent value="experince"  className="w-full ">
        <div className="flex flex-col gap-[30px] text-center xl:text-left">
            <h3 className="text-4xl font-bold ">{experience.title}</h3>
            <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{experience.description}</p>
<ScrollArea className="h-[400px] ">
    <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px] ">
        {experience.items.map((item, index )=>{
            return <li key={index} className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex 
             flex-col justify-center items-center lg:items-start gap-1 ">
                <span className="text-accent ">{item.Duration}</span>
                <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{item.position}</h3>
                <div className="flex items-center gap-3">
                    {/* dot */}
                    <span className="w-[6px] h-[6px] rounded-full  bg-accent "></span>
                    <p className="text-white/60">{item.Company}</p>
                </div>
            </li>
        })}
    </ul>
</ScrollArea>

        </div>
    </TabsContent>
{/* education */}

    <TabsContent value="education"  className="w-full ">

    <div className="flex flex-col gap-[30px] text-center xl:text-left">
            <h3 className="text-4xl font-bold ">{education.title}</h3>
            <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{education.description}</p>
<ScrollArea className="h-[400px] ">
    <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px] ">
        {education.items.map((item, index )=>{
            return <li key={index} className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex 
             flex-col justify-center items-center lg:items-start gap-1 ">
                <span className="text-accent ">{item.Duration}</span>
                <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{item.Degree}</h3>
                <div className="flex items-center gap-3">
                    {/* dot */}
                    <span className="w-[6px] h-[6px] rounded-full  bg-accent "></span>
                    <p className="text-white/60">{item.Institute}</p>
                </div>
            </li>
        })}
    </ul>
</ScrollArea>

        </div>


    </TabsContent>

    {/* skilss */}

    <TabsContent value="skills"  className="w-full h-full">
<div className="flex flex-col justify-between gap-[40px]">
    <div className="flex flex-col gap-[30px] text-center xl:text-left">
        <h3 className="text-4xl  font-bold">{skills.title}</h3>
           <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{skills.description}</p>

    </div>
    <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px] ">{skills.skillist.map((skills, index)=> {
        return <li key={index}>
<TooltipProvider  delayDuration={100}>
    <Tooltip>
        <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
            <div className="text-6xl group-hover:text-accent transition-all duration-300">{skills.icon}</div>
        </TooltipTrigger>
        <TooltipContent>
            <p  className="capitalize">{skills.name}</p>
        </TooltipContent>
    </Tooltip>
</TooltipProvider>

        </li>
    })}</ul>

</div>

    </TabsContent>

    {/* about me */}

    <TabsContent value="about"  className="w-full text-center xl:text-left ">
        <div className="flex flex-col gap-[30px]">
            <h3 className="text-4xl font-bold ">{about.title}</h3>
            <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{about.description}</p>
            <ul className="grid grid-cols-1 xl:gide-cols-2 gap-y-6 max-w-620px] mx-auto xl:mx-0">{about.Info.map((item, index)=> {
                return<li key={index} className="flex items-center justify-center xl:justify-start  gap-4 ">
                    <span className="text-accent">{item.fieldName}</span>
                    <span className="text-xl">{item.fieldValue}</span>
                </li>
            })
        }
        
                
                </ul>
        </div>


    </TabsContent>

</div>




</Tabs>



        </div>
        
        </motion.div>
 };
export default Resume 