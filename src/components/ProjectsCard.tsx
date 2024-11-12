import { useState } from "react";
import "./projectscard.css";

// Asset Imports
import cumulu from "../assets/projects/CumuluCast.png";
import todo from "../assets/projects/ToDoList.png";
import resto from "../assets/projects/Restro.png";
import repay from "../assets/projects/repaydemo.gif";
import { Button } from "@/components/ui/button.tsx";

interface Project {
    image: string;
    text: string;
    skills: string[];
}

const ProjectsCard: React.FC = () => {
    // State to keep track of the active carousel item
    const [activeIndex, setActiveIndex] = useState<number>(0);

    // List of projects with images, text, and skills
    const projects: Project[] = [
        {
            image: repay,
            text: "Repay is a peer-to-peer transaction service designed for setting up recurring payments with friends. It offers a simple, sleek experience, leveraging third-party APIs to securely manage financial exchanges.",
            skills: ["react", "javascript", "typescript", "html5", "css3", "postgresql", "figma", "gimp", "jira"]
        },
        {
            image: cumulu,
            text: "CumuluCast is a sleek and efficient weather application that fetches real-time weather data for any desired ZIP code using RESTful API integration.",
            skills: ["javascript", "html5", "css3"]
        },
        {
            image: todo,
            text: "A simple yet powerful to-do list application that allows users to effortlessly add and complete tasks, leveraging local storage for persistence.",
            skills: ["javascript", "html5", "css3"]
        },
        {
            image: resto,
            text: "Restro is a comprehensive restaurant management application built in Java with a Swing GUI, featuring order tracking, inventory management, and user authentication.",
            skills: ["java", "sqlite", "sqlite-studio"]
        },
    ];


    // Handlers for carousel navigation
    const handleNext = () => {
        setActiveIndex((prevIndex) => (prevIndex + 1) % projects.length);
    };

    const handlePrev = () => {
        setActiveIndex((prevIndex) =>
            prevIndex === 0 ? projects.length - 1 : prevIndex - 1
        );
    };

    return (
        <>
            <div className="carousel">
                <Button className="car1-button" onClick={handlePrev}>
                    Prev
                </Button>

                <div className="carousel-item">
                    <img className="img" src={projects[activeIndex].image} alt={`Project ${activeIndex + 1}`} />
                </div>

                <Button className="car2-button" onClick={handleNext}>
                    Next
                </Button>
            </div>

            {/* Display text and skills for the active project */}
            <div className="project-description">
                <p>{projects[activeIndex].text}</p>
                <div className="skills-icons">
                    {projects[activeIndex].skills.map((skill, index) => (
                        <i key={index} className={`devicon-${skill.toLowerCase().replace(/\s+/g, '-')}-plain colored`} title={skill}></i>
                    ))}
                </div>
            </div>
        </>
    );
};

export default ProjectsCard;
