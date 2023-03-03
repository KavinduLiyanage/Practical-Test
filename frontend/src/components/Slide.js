import "../styles/Slide.css";
import TextOnSlide from "./TextOnSlide";

const Slide = ({ slide }) => {
    return (
        <>
            <TextOnSlide title={slide.title} subTitle={slide.subTitle} />
            <img src={slide.image} alt="image" className="image" />
        </>
    );
};

export default Slide;
