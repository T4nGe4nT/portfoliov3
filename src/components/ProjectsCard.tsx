import { useState } from "react";
import "./projectscard.css";

// Asset Imports
import cumulu from "../assets/projects/CumuluCast.png";
import todo from "../assets/projects/ToDoList.png";
import resto from "../assets/projects/Restro.png";
import {Button} from "@/components/ui/button.tsx";

interface Project {
    image: string;
    text: string;
}

const ProjectsCard: React.FC = () => {
    // State to keep track of the active carousel item
    const [activeIndex, setActiveIndex] = useState<number>(0);

    // Text and images corresponding to each project
    const projects: Project[] = [
        {
            image: cumulu,
            text: "CumuluCast - A sleek and efficient weather application that fetches real-time weather data for any desired ZIP code using RESTful API integration.",
        },
        {
            image: todo,
            text: "To-Do List App - A simple yet powerful to-do list application that allows users to effortlessly add and complete tasks, leveraging local storage for persistence.",
        },
        {
            image: resto,
            text: "Restro - A comprehensive restaurant management application built in Java with a Swing GUI, featuring order tracking, inventory management, and user authentication.",
        },
    ];

    // Handler to move to the next project
    const handleNext = () => {
        setActiveIndex((prevIndex) => (prevIndex + 1) % projects.length);
    };

    // Handler to move to the previous project
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

            {/* Display text corresponding to the active item */}
            <div className="project-description">
                <p>{projects[activeIndex].text}</p>
            </div>
        </>
    );
};

export default ProjectsCard;