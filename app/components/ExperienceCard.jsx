import React from 'react'

const ExperienceCard = ({ title, date, company, summary }) => {
    return (
        <div className="border p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 bg-[#FAF9F6] flex flex-col">
            <div className="mb-2 min-h-[80px]">
                <h3 className="text-xl">{title}</h3>
                <p className="font-outfit-b green">{company}</p>
                <p className="font-outfit italic-text">{date}</p>
            </div>
            <p className="font-outfit flex-1">{summary}</p>
        </div>
    )
}

export default ExperienceCard
