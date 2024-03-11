'use client';
import { Tooltip, Button } from "@material-tailwind/react";
import { IoLogoJavascript, IoLogoSass, IoLogoPython } from 'react-icons/io';
import { IoLogoReact, IoLogoLaravel, IoLogoHtml5, IoLogoCss3 } from "react-icons/io5";
import { SiNextdotjs, SiTailwindcss, SiMysql, SiAdobephotoshop } from "react-icons/si";
import { BsBootstrapFill, BsGithub } from "react-icons/bs";
import { DiJavascript1 } from "react-icons/di";
import { TbFileTypeJsx, TbApi, TbJson, TbBrandFramer } from "react-icons/tb";
import { FaPhp, FaGit } from "react-icons/fa";

const SKILLS = [
    {
        name: 'HTML5',
        icon: IoLogoHtml5,
    },
    {
        name: 'CSS3',
        icon: IoLogoCss3,
    },
    {
        name: 'SASS',
        icon: IoLogoSass,
    },
    {
        name: 'BOOTSTRAP',
        icon: BsBootstrapFill,
    },
    {
        name: 'TAILWIND',
        icon: SiTailwindcss,
    },
    {
        name: 'JS',
        icon: DiJavascript1,
    },
    {
        name: 'REACT',
        icon: IoLogoReact,
    },
    {
        name: 'JSX',
        icon: TbFileTypeJsx,
    },
    {
        name: 'NEXT',
        icon: IoLogoReact,
    },
    {
        name: 'PHP',
        icon: FaPhp,
    },
    {
        name: 'MYSQL',
        icon: SiMysql,
    },
    {
        name: 'LARAVEL',
        icon: IoLogoLaravel,
    },
    {
        name: 'API',
        icon: TbApi,
    },
    {
        name: 'JSON',
        icon: TbJson,
    },
    {
        name: 'FRAMER',
        icon: TbBrandFramer,
    },
    {
        name: 'PYTHON',
        icon: IoLogoPython,
    },
    {
        name: 'PHOTOSHOP',
        icon: SiAdobephotoshop,
    },
    {
        name: 'GIT',
        icon: FaGit,
    },
    {
        name: 'GITHUB',
        icon: BsGithub,
    }
];

const TooltipButton = ({ children }) => {
    const skill = SKILLS.find(skill => skill.name === children.name);
    const IconComponent = skill ? skill.icon : null;

    return (
        <Tooltip
            content={`${children.name}`}
            animate={{
                mount: { scale: 1, y: 0 },
                unmount: { scale: 0, y: 25 },
            }}
            className=" bg-zinc-950 text-white px-4 py-3 shadow-xl shadow-white/70"
        >
            {IconComponent && (
                <Button className="rounded p-2 text-sm cursor-pointer bg-white text-zinc-950 hover:bg-[#ffffff22] hover:text-white transition-all duration-200 ease-in">
                    <IconComponent className="text-3xl" />
                </Button>
            )}
        </Tooltip>
    );
};

export default TooltipButton;
