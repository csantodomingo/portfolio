import React from 'react'
import ExperienceCard from './ExperienceCard'
import { experiences } from '@/assets/assets'

const Experience = () => {
    return (
        <div id='experience' className='w-full px-[10%] py-10 scroll-mt-20'>
            <h2 className='text-center text-5xl mb-16'>Experience</h2>

            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 items-stretch">
                {experiences.map((experience, idx) => (
                    <ExperienceCard
                        key={idx}
                        title={experience.title}
                        date={experience.date}
                        company={experience.company}
                        summary={experience.summary}
                    />
                ))}
            </div>
        </div>
    )
}

export default Experience
