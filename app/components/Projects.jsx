import React, { useState, useEffect, useRef } from 'react'
import { workData } from '@/assets/assets'

const Projects = () => {
    const [activeIndex, setActiveIndex] = useState(null)
    const containerRef = useRef(null)

    const handleClick = (idx) => {
        setActiveIndex(activeIndex === idx ? null : idx)
    }

    // Close overlay when clicking outside
    useEffect(() => {
        const handleOutsideClick = (e) => {
            if (containerRef.current && !containerRef.current.contains(e.target)) {
                setActiveIndex(null)
            }
        }

        document.addEventListener('mousedown', handleOutsideClick)
        return () => document.removeEventListener('mousedown', handleOutsideClick)
    }, [])

    return (
        <div id='projects' className='w-full px-[12%] py-10 scroll-mt-20'>
            <h4 className='text-center text-5xl'>My latest work</h4>
            <p className='text-center max-w-2xl mx-auto mt-5 mb-12 font-outfit'>
                Welcome to my portfolio! Here you can find some of my projects.
            </p>

            <div
                ref={containerRef}
                className='grid gap-8 sm:grid-cols-2 lg:grid-cols-3 items-stretch'
            >
                {workData.map((work, idx) => {
                    const isActive = activeIndex === idx
                    return (
                        <div
                            key={idx}
                            className={`aspect-square bg-no-repeat bg-cover bg-center rounded-[35px] relative cursor-pointer group shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden ${isActive ? 'shadow-lg' : ''
                                }`}
                            style={{ backgroundImage: `url(${work.bgImage})` }}
                            onClick={() => handleClick(idx)}
                        >
                            {/* Overlay */}
                            <div
                                className={`absolute inset-0 bg-black/60 rounded-lg flex items-center justify-center p-4 transition-all duration-500 ${isActive ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
                                    }`}
                            >
                                <p className='text-white text-center text-sm leading-relaxed font-outfit'>
                                    {work.blurb}
                                </p>
                            </div>

                            {/* Title box */}
                            <div
                                className={`bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 
                                -translate-x-1/2 py-3 px-5 flex items-center justify-between transition-all duration-500 
                                transform ${isActive
                                        ? 'opacity-0 translate-y-3 shadow-none'
                                        : 'group-hover:opacity-0 group-hover:translate-y-3 group-hover:shadow-none'
                                    }`}
                            >
                                <div>
                                    <h2 className='font-semibold'>{work.title}</h2>
                                    <p className='text-sm text-gray-600 font-outfit'>
                                        {work.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Projects
