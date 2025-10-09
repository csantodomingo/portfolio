import { assets } from '@/assets/assets'
import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'

const Navbar = () => {
    const [isScroll, setIsScroll] = useState(false)
    const sideMenuRef = useRef();

    const openMenu = () => {
        sideMenuRef.current.style.transform = 'translateX(-16rem)'
    }

    const closeMenu = () => {
        sideMenuRef.current.style.transform = 'translateX(16rem)'
    }

    useEffect(() => {
        const handleScroll = () => {
            setIsScroll(window.scrollY > 100)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <>
            <nav
                className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-6 justify-between z-50 
                ${isScroll ? "bg-[#f1ede7] shadow-sm" : "bg-transparent"}`}
            >
                {/* Nav links (right) */}
                <ul className="right-aligned-item hidden md:flex items-center gap-8 text-lg font-outfit">
                    <li><a href="#top" className="hover:text-gray-500 transition">Home</a></li>
                    <li><a href="#about" className="hover:text-gray-500 transition">About</a></li>
                    <li><a href="#experience" className="hover:text-gray-500 transition">Experience</a></li>
                    <li><a href="#projects" className="hover:text-gray-500 transition">Projects</a></li>
                    <li><a href="#contact" className="hover:text-gray-500 transition">Contact</a></li>
                </ul>

                {/* Mobile menu icon */}
                <button
                    className="block md:hidden ml-3 cursor-pointer"
                    onClick={openMenu}
                >
                    <Image src={assets.menu_black} alt="" className="w-6" />
                </button>

                {/* Mobile nav */}
                <ul
                    ref={sideMenuRef}
                    className="flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64
                    z-50 h-screen transition duration-500 bg-white"
                >
                    <div className="absolute right-6 top-6" onClick={closeMenu}>
                        <Image src={assets.close_black} alt="" className="w-5 cursor-pointer" />
                    </div>

                    <li><a onClick={closeMenu} href="#top">Home</a></li>
                    <li><a onClick={closeMenu} href="#about">About</a></li>
                    <li><a onClick={closeMenu} href="#experience">Experience</a></li>
                    <li><a onClick={closeMenu} href="#projects">Projects</a></li>
                    <li><a onClick={closeMenu} href="#contact">Contact</a></li>
                </ul>
            </nav>
        </>
    )
}

export default Navbar
