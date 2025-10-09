import React from "react";
import Image from "next/image";
import { assets } from '@/assets/assets'
import { motion } from "framer-motion";

const Header = () => {
    return (
        <section className="relative w-full min-h-screen flex flex-col lg:flex-row items-center justify-center px-4 py-20 lg:px-20 gap-10">
            {/* Left text */}
            <div className="relative flex-1 max-w-xl">
                <motion.p
                    className="text-lg sm:text-xl md:text-2xl mb-2"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                >
                    Hi! I'm
                </motion.p>

                <motion.h1
                    className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-serif mb-4 burg"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                >
                    Clara Santodomingo
                </motion.h1>

                <motion.p
                    className="text-xl sm:text-2xl md:text-3xl lg:text-4xl green font-outfit leading-snug"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                >
                    creative <span className="burg">and</span> full-stack developer passionate about bridging the gap between creativity and technology
                </motion.p>
            </div>

            {/* Right image */}
            <div className="flex-1 flex justify-center">
                <Image
                    src={assets.me}
                    alt="Clara Santodomingo"
                    className="w-180 h-auto rounded-lg"
                    priority
                />
            </div>
        </section>
    );
};

export default Header;
