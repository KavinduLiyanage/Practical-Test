import { useEffect, useState } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import "../styles/carousel.css";
import { Api } from "../services/Api";
import Slide from "./Slide";

const Carousel = ({ slides, infinite }) => {
    const [current, setCurrent] = useState(0);
    const [sliderData, setSliderData] = useState(null);

    //fetching data using useEffect
    useEffect(() => {
        fetchSliderData();
    }, []);

    //To fetch data
    const fetchSliderData = async () => {
        try {
            const res = await Api.get("carousel?slides=" + slides);
            setSliderData(res?.data?.slides);
        } catch (err) {
            console.log(err);
        }
    };

    //to slide into next slide
    const nextSlide = () => {
        infinite
            ? setCurrent((prevState) =>
                  prevState === sliderData?.length - 1 ? 0 : prevState + 1
              )
            : setCurrent((prevState) =>
                  prevState === sliderData?.length - 1
                      ? prevState
                      : prevState + 1
              );
    };

    //to slide into previous slide
    const prevSlide = () => {
        infinite
            ? setCurrent((prevState) =>
                  prevState === 0 ? sliderData?.length - 1 : prevState - 1
              )
            : setCurrent((prevState) =>
                  prevState === 0 ? prevState : prevState - 1
              );
    };

    if (sliderData?.length <= 0) {
        return <div>No data</div>;
    }

    return (
        <section className="slider">
            {sliderData?.length !== 1 && (
                <>
                    <FaAngleLeft
                        color="white"
                        className="left-arrow"
                        onClick={prevSlide}
                    />
                    <FaAngleRight
                        color="white"
                        className="right-arrow"
                        onClick={nextSlide}
                    />
                </>
            )}
            {sliderData?.length > 0 && <Slide slide={sliderData[current]} />}
        </section>
    );
};

export default Carousel;
