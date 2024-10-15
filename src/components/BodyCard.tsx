import "./bodycard.css"


// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
function BodyCard({ image, text }) {
    return (
        <div className="sub-card">
            <img src={image} alt="Nicholas" className="img-fluid" />
            <p className="text"><em>{text}</em></p>
        </div>
    );
}

export default BodyCard;