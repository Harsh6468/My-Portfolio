import proj3 from "../assets/images/proj12.png";
import heatwave from "../assets/images/Heat Wave.png";
import chatty from "../assets/images/Chatty.png";
import dashboard from "../assets/images/Dashboard.png";

export const projects = [
    {
        title: "Real-Time Chat Application",
        desc: "A React-based chat application built using the MERN stack (MongoDB, Express.js, React, Node.js). Users can create an account, log in, and chat in real time with other users. The app includes online/offline status indicators, theme customization (light/dark mode), and a responsive user interface for a seamless messaging experience.",
        devstack: "MERN",
        link: "https://chat-app-zqgt.onrender.com",
        git: "https://github.com/Harsh6468/chat-app",
        src: chatty,
        type: "fullstack",
    },
    {
        title: "Heatwave Trend Analyzer (1990-2020)",
        desc: "A React-based web application that provides a comprehensive summary of heatwave occurrences from 1990 to 2020. Users can either enter a city and country or select a location directly on an interactive Google Map. The app then displays detailed heatwave statistics for the chosen area, helping visualize climate trends over time.",
        devstack: "React, Python and Mongodb",
        link: "https://climate-hazard-analyzer.vercel.app/",
        git: "https://github.com/Harsh6468/climate-hazard-analyzer",
        src: heatwave,
        type: "fullstack",
    },
    {
        title: "User & Role Management Dashboard",
        desc: "A React-based frontend application featuring an intuitive admin dashboard. It allows administrators to create users, define roles, and assign specific roles to users. The interface is designed for efficient user management with clear role-based access controls and a clean, responsive layout.",
        devstack: "React",
        link: "https://rbac-ui-one.vercel.app",
        git: "https://github.com/Harsh6468/rbac-ui",
        src: dashboard,
        type: "frontend",
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