import Link from "next/link";

import { FaGithub, FaLinkedin, FaFacebook, FaTwitter } from 'react-icons/fa';
 
const socials = [
    { icon: <FaGithub />, path: "https://github.com/musmankhan12" },
    { icon: <FaLinkedin />, path: "https://www.linkedin.com/in/muhammad-usman-7507102b6?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" },
    { icon: <FaFacebook />, path: "" },
    { icon: <FaTwitter />, path: "" },
];

const Social = ({ containerStyles, iconStyles }) => {
    return (
        <div className={containerStyles}>
            {socials.map((item, index) => {
                return(
                    <Link key={index} href={item.path} className={iconStyles}>
                        {item.icon}
                    </Link>
                );
            })}
        </div>
    );
};

export default Social;



















// import Link from "next/link";

// import { FaGitHub, FaLinkedIn, FaYoutube, FaTwitter } from 'react-icons/fa';

// export default const socials = [
//     { icon: <FaGitHub />, path: '' },
//     { icon: <FaLinkedIn />, path: '' },
//     { icon: <FaYoutube />, path: '' },
//     { icon: <FaTwitter />, path: '' },
// ];


// export const Social = ({containerStyles, iconStyles}) => {
//     return (
//      <div classNane={containerStyles}>
//         {socials.map((item, index) => {
//             return (
//                 <Link key={index} href={item.path} classNane={iconStyles}>
//                     {item.icon}
//                 </Link>
//             );
//         })}
//         </div>
//     );
// };

// // export default socials;