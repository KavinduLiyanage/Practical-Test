const slideModel = require("../models/slide.model");

// saving new slide data using async and await
const addSlide = async (req, res, next) => {
    const { image, title, subTitle } = req.body;
    const newSlide = new slideModel({ image, title, subTitle });

    try {
        const savedSlide = await newSlide.save();
        res.status(201).send({
            savedSlide,
            message: "New slide added successfully!",
        });
    } catch (error) {
        res.status(500).send(error);
    }
};

//function to get required slides
const getSlides = async (req, res, next) => {
    const limit = req.query.slides;
    console.log({ limit });
    try {
        const slides = await slideModel
            .find()
            .limit(parseInt(limit))
            .select({ __v: 0, createdAt: 0, updatedAt: 0 });

        res.status(200).send({ slides });
    } catch (err) {
        res.status(500).send(err);
    }
};

module.exports = { addSlide, getSlides };
