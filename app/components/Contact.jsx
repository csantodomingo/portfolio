import React from "react";
import { FaLinkedin, FaEnvelope, FaGithub } from "react-icons/fa";
import Image from "next/image";
import { assets } from '@/assets/assets'

const Contact = () => {
    return (
        <section
            id="contact"
            className="w-full min-h-screen flex flex-col items-center justify-center px-6 py-20 bg-[#f6f2eb] text-center"
        >
            <h4 className="text-lg mb-2 font-outfit">Let’s Connect!</h4>
            <h2 className="text-5xl font-semibold mb-6">Contact Me</h2>
            <p className="max-w-xl text-gray-700 mb-10 font-outfit">
                I’d love to hear from you! Feel free to reach out on any of my socials below.
            </p>

            <div className="flex gap-8 text-3xl">
                <a
                    href="mailto:csant@live.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:scale-110 transition-transform duration-300"
                >
                    <FaEnvelope />
                </a>
                <a
                    href="https://www.linkedin.com/in/clara-santodomingo"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:scale-110 transition-transform duration-300"
                >
                    <FaLinkedin />
                </a>
                <a
                    href="https://github.com/csantodomingo"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:scale-110 transition-transform duration-300"
                >
                    <FaGithub />
                </a>
            </div>
            <p className="mt-10 text-sm text-gray-500">© {new Date().getFullYear()} Clara Santodomingo</p>
        </section>
    );
};

export default Contact;
