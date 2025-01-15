import proj1 from "../assets/images/proj9.png";
import proj2 from "../assets/images/proj11.png";
import proj3 from "../assets/images/proj12.png";

export const projects = [
    {
        title: "Chat Application",
        desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores maiores ex facilis nemo laudantium recusandae quia, mollitia eveniet dignissimos dolor vel, reiciendis neque non dicta excepturi at pariatur, soluta nesciunt.",
        devstack: "MERN",
        link: "https://chat-app-zqgt.onrender.com",
        git: "https://github.com/Harsh6468/chat-app",
        src: proj1,
        type: "fullstack",
    },
    {
        title: "Chat Application",
        desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores maiores ex facilis nemo laudantium recusandae quia, mollitia eveniet dignissimos dolor vel, reiciendis neque non dicta excepturi at pariatur, soluta nesciunt.",
        devstack: "MERN",
        link: "https://chat-app-zqgt.onrender.com",
        git: "https://github.com/Harsh6468/chat-app",
        src: proj2,
        type: "fullstack",
    },
    {
        title: "Chat Application",
        desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores maiores ex facilis nemo laudantium recusandae quia, mollitia eveniet dignissimos dolor vel, reiciendis neque non dicta excepturi at pariatur, soluta nesciunt.",
        devstack: "MERN",
        link: "https://chat-app-zqgt.onrender.com",
        git: "https://github.com/Harsh6468/chat-app",
        src: proj3,
        type: "fullstack",
    },
];

import { SiReact, SiPython, SiNodedotjs, SiMongodb, SiMysql } from "react-icons/si";

export const stackItems = [
    {
        id: 1,
        name: "React",
        icon: <SiReact size={100} />,
        color: "text-emerald-200",
    },
    {
        id: 2,
        name: "Python",
        icon: <SiPython size={100} />,
        color: "text-emerald-200",
    },
    {
        id: 3,
        name: "Nodejs",
        icon: <SiNodedotjs size={100} />,
        color: "text-emerald-200",
    },
    {
        id: 4,
        name: "Mongodb",
        icon: <SiMongodb size={100} />,
        color: "text-emerald-200",
    },
    {
        id: 5,
        name: "MySQL",
        icon: <SiMysql size={100} />,
        color: "text-emerald-200",
    },
];

export const navLinks = [
    { title: "About", path: "#about"},
    { title: "Portfolio", path: "#portfolio"},
    { title: "Stack", path: "#stack"},
    { title: "Contact", path: "#contact"},
];