import React from 'react'
import { workData } from '@/assets/assets'

const Projects = () => {
    return (
        <div id='projects' className='w-full px-[12%] py-10 scroll-mt-20'>
            <h4 className='text-center text-5xl'>My latest work</h4>
            <p className='text-center max-w-2xl mx-auto mt-5 mb-12 font-outfit'>
                Welcome to my portfolio! Here you can find some of my projects.
            </p>

            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 items-stretch">
                {workData.map((work, idx) => (
                    <div
                        key={idx}
                        className='aspect-square bg-no-repeat bg-cover bg-center rounded-[35px] relative cursor-pointer group shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden'
                        style={{ backgroundImage: `url(${work.bgImage})` }}
                    >
                        {/* Overlay that appears on hover */}
                        <div className='absolute inset-0 bg-black/60 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center p-4'>
                            <p className='text-white text-center text-sm leading-relaxed font-outfit'>
                                {work.blurb}
                            </p>
                        </div>
                        <div
                            className='bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 
                            -translate-x-1/2 py-3 px-5 flex items-center justify-between transition-all duration-500 
                            transform group-hover:-translate-y-1 group-hover:shadow-md'
                        >
                            <div>
                                <h2 className='font-semibold'>{work.title}</h2>
                                <p className='text-sm text-gray-600 font-outfit'>{work.description}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Projects
