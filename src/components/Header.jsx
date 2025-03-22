import React, { useState } from 'react'
import { Logo, Button } from "./index";
import { NavLink } from 'react-router-dom';

function Header() {

    const [isHidden, setIsHidden] = useState(true);

    const navlinks = [
        {
            title: "Home",
            path: "/"
        },
        {
            title: "About",
            path: "/about"
        },
        {
            title: "Projects",
            path: "/projects"
        },
    ];

    return (
        <header className='w-full flex flex-col'>
            <div className='w-full'>
                <nav className='w-full'>
                    <div className='w-full flex justify-between items-center'>
                        <div>
                            <Logo />
                        </div>
                        <div className='md:w-[50%] flex items-center justify-between'>
                            <ul className='hidden md:flex gap-10 pl-10'>
                                {navlinks.map((link) => (
                                    <li key={link.title} className='text-lg transition-all duration-200'>
                                        <NavLink className={({ isActive }) => (isActive ? "text-white" : "text-gray-600")} to={link.path}>
                                            {link.title}
                                        </NavLink>
                                    </li>
                                ))}
                            </ul>


                            <div className='flex items-center justify-center gap-4'>
                                <button
                                    className='md:hidden text-2xl cursor-pointer font-medium text-slate-200 hover:text-white transition-all duration-150'
                                    onClick={() => setIsHidden(!isHidden)}
                                >
                                    <i className="fa-solid fa-bars"></i>
                                </button>
                                <div className='text-3xl cursor-pointer font-medium text-slate-200 hover:text-white transition-all duration-150'>
                                   <a
                                    href="https://github.com/nitindiwakar123/beginner-dev"
                                    target='_blank'
                                    >
                                        <i className="fa-brands fa-github"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    {!isHidden && <ul className='mt-5 flex md:hidden flex-col gap-3 pl-10'>
                        {navlinks.map((link) => (
                            <li key={link.title} className='w-full text-lg hover:bg-white transition-all duration-200'>
                                <NavLink className={({ isActive }) => (isActive ? "text-white" : "text-gray-600")} to={link.path}>
                                    {link.title}
                                </NavLink>
                            </li>
                        ))}
                    </ul>}
                </nav>
            </div>
        </header>
    )
}

export default Header;