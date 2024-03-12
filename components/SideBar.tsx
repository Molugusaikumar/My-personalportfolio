import React from "react";
import { IoLogoInstagram } from "react-icons/io5";
import { FaInstagram, FaLinkedinIn, FaTwitter, FaGithub } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { MdEmail } from "react-icons/md";
import Link from "next/link";

const SideBar = () => {
    return (
        <div className="h-auto w-auto gap-8 fixed flex flex-col px-3 py-4 top-1/4 rounded-xl right-0 z-[4] text-xl font-bold bg-gradient-to-b from-purple-500 to-cyan-500">
            <Link
                href="https://www.instagram.com/mr__fearless_074/"
                target="_blank"
                className="hover:text-white duration-300"
            >
                <FaInstagram />
            </Link>
            <Link
                href="https://www.linkedin.com/in/m-saikumar-79551828b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app "
                target="_blank"
                className="hover:text-white duration-500"
            >
                <FaLinkedinIn />
            </Link>
            <Link
                href="https://twitter.com/MSaikumar001"
                target="_blank"
                className="hover:text-white duration-500"
            >
                <FaTwitter />
            </Link>
            <Link
                href="https://github.com/Molugusaikumar"
                target="_blank"
                className="hover:text-white duration-500"
            >
                <FaGithub />
            </Link>
            <Link
                href="mailto:ms7296201@gmail.com.com?subject=subject text"
                target="_blank"
                className="hover:text-white duration-500"
            >
                <MdEmail />
            </Link>
        </div>
    );
};

export default SideBar;
