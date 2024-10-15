import {Card,CardHeader, CardTitle} from "@/components/ui/card.tsx";
import {Button} from "@/components/ui/button"
import { useState } from "react";

// Custom Components
import BodyCard from "./BodyCard";
import FootCard from "./FootCard.tsx"
import ProjectsCard from "./ProjectsCard";

//Asset imports
import nichImg from "../assets/nich.gif"
import otherImg from '../assets/sand.jpg';


// Content
const initialContent = {
    image: nichImg,
    text: `From the surfboard factory to the tech office space, I like to spend my time working on the things that spark my passions. Creating and exploring as many areas of the world as I can find. Always striving to problem solve, and never afraid of a challenge. Let me share a bit of myself with you. Browse through some of my favorite works and interests. Let me know what you think.`
};

const intrestContent = {
    image: otherImg,
    text: `I have a passion for surfing and exploring the ocean, and being outdoors is always a great experience for me. I also enjoy working with my hands, constantly seeking new ways to express my creativity. Technology fascinates me as well—it's incredible how quickly it's advancing, and it never ceases to amaze me.`
}

function MainCard() {
    const [content, setContent] = useState(initialContent);
    const [activeCard, setActiveCard] = useState('home');


    const handleHomeClick = () => {
        // Reset the content back to the initial state
        setContent(initialContent);
        setActiveCard('home');
    };

    const handleProjectsClick = () => {
        setActiveCard('projects');
    };

    const handleInterestsClick = () => {
        setContent(intrestContent)
        setActiveCard('interests');
    };


    const name = "Nicholas Holcomb";

    return (
        <>
            <Card className="main-card">
                <CardHeader>
                    <CardTitle className="card-title">{name}</CardTitle>
                    <div className="button-nav">
                        <Button
                            className={`btn-black ${activeCard === 'home' ? 'active' : ''}`}
                             onClick={handleHomeClick}
                        >
                            Home
                        </Button>
                        <Button
                            className={`btn-black ${activeCard === 'projects' ? 'active' : ''}`}
                             onClick={handleProjectsClick}
                        >
                            Projects
                        </Button>
                        <Button
                            className={`btn-black ${activeCard === 'interests' ? 'active' : ''}`}
                             onClick={handleInterestsClick}
                        >
                            Interest
                        </Button>
                    </div>
                </CardHeader>
                <hr />
                {activeCard === 'projects' ? (
                    <ProjectsCard />
                ) : (
                    <BodyCard image={content.image} text={content.text} />
                )}
                <hr />
                <FootCard />

            </Card>
        </>
    )
}

export default MainCard;