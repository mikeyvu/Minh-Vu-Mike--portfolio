import React from "react";
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

type StackGroup = {
    title: string;
    items: string[];
};

type StackCard = {
    title: string;
    groups: StackGroup[];
};

const stackCards: StackCard[] = [
    {
        title: "Programming Languages",
        groups: [
            {
                title: "Languages",
                items: ["TypeScript", "JavaScript", "Java"],
            },
        ],
    },
    {
        title: "Frontend Development",
        groups: [
            {
                title: "Framework & Libraries",
                items: ["React", "Shadcn UI"],
            },
            {
                title: "Styling",
                items: ["Tailwind CSS", "Bootstrap"],
            },
            {
                title: "Core Technologies",
                items: ["HTML5", "CSS3", "Vanilla JavaScript"],
            },
        ],
    },
    {
        title: "Backend & Databases",
        groups: [
            {
                title: "Backend Frameworks",
                items: ["FastAPI", "Spring Boot"],
            },
            {
                title: "API Design",
                items: ["RESTful APIs"],
            },
            {
                title: "Databases",
                items: ["PostgreSQL", "MySQL"],
            },
            {
                title: "Authentication & Security",
                items: ["Spring Security", "OAuth 2.0", "JSON Web Token (JWT)"],
            },
        ],
    },
    {
        title: "Mobile Development",
        groups: [
            {
                title: "Framework",
                items: ["Flutter"],
            },
        ],
    },
    {
        title: "Development Tools & Workflow",
        groups: [
            {
                title: "Version Control",
                items: ["Git", "GitHub"],
            },
            {
                title: "Containerization",
                items: ["Docker"],
            },
            {
                title: "Build Tools",
                items: ["Maven"],
            },
        ],
    },
];

function Expertise() {
    return (
    <div className="container expertise-section" id="expertise">
        <div className="items-container skills-container">
            <h1>Tech Stack</h1>
            <div className="skills-grid">
                {stackCards.map((card) => (
                    <div className="skill" key={card.title}>
                        <h3>{card.title}</h3>
                        {card.groups.map((group) => (
                            <div className="flex-chips" key={`${card.title}-${group.title}`}>
                                <span className="chip-title">{group.title}:</span>
                                {group.items.map((item) => (
                                    <Chip key={`${group.title}-${item}`} className='chip' label={item} />
                                ))}
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    </div>
    );
}

export default Expertise;