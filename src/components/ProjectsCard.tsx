import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import { useState } from "react";

// CSS Import
import "./projectscard.css";

// Asset Imports
import cumulu from "../assets/projects/CumuluCast.png";
import todo from "../assets/projects/ToDoList.png";
import resto from "../assets/projects/Restro.png";

function ProjectsCard() {
    // State to keep track of the active carousel item
    const [activeIndex, setActiveIndex] = useState(0);

    // Text corresponding to each project
    const projectTexts = [
        "CumuluCast - A weather forecast app with real-time updates and radar views.",
        "To-Do List App - Organize your tasks efficiently with priority sorting.",
        "Restro - A restaurant management app to streamline operations and menus."
    ];

    // Handler to update the active index when navigating
    const handlePrevious = () => {
        setActiveIndex((prevIndex) =>
            prevIndex === 0 ? projectTexts.length - 1 : prevIndex - 1
        );
    };

    const handleNext = () => {
        setActiveIndex((prevIndex) =>
            prevIndex === projectTexts.length - 1 ? 0 : prevIndex + 1
        );
    };

    return (
        <>
            <Carousel className="carousel">
                <CarouselContent>
                    <CarouselItem><img className="img" src={cumulu} alt="Cumulu Project" /></CarouselItem>
                    <CarouselItem><img className="img" src={todo} alt="To Do List" /></CarouselItem>
                    <CarouselItem><img className="img" src={resto} alt="Resto" /></CarouselItem>
                </CarouselContent>
                <CarouselPrevious onClick={handlePrevious} />
                <CarouselNext onClick={handleNext} />
            </Carousel>

            {/* Display text corresponding to the active item */}
            <div className="project-description">
                <p>{projectTexts[activeIndex]}</p>
            </div>
        </>
    );
}

export default ProjectsCard;
