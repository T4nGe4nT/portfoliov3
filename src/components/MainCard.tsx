import {Card,CardHeader, CardTitle} from "@/components/ui/card.tsx";
import {Button} from "@/components/ui/button"






function MainCard() {

    const name = "Nicholas Holcomb";

    return (
        <>
            <Card>
                <CardHeader>
                    <CardTitle className="card-title">{name}</CardTitle>
                    <div className="button-nav">
                       <Button variant="ghost">Home</Button>
                       <Button variant="ghost">Projects</Button>
                       <Button variant="ghost">Interest</Button>
                    </div>
                </CardHeader>

            </Card>
        </>
    )
}

export default MainCard;