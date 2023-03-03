const express = require("express");
const app = express();
const cors = require("cors");
const morgan = require("morgan");
const mongooseConnection = require("./helpers/mongoose-connection");
const appRoutes = require("./routes");
const SliderRoutes = require("./routes/slide.routes");

const dotenv = require("dotenv");
const { notFoundHandler } = require("./middleware/not-found.middleware");
const { errorHandler } = require("./middleware/error.middleware");
dotenv.config();

app.use(express.json());
app.use(cors());

//middleware
app.use(morgan("dev"));

///bringing routes
app.use("/api", appRoutes);

app.use(errorHandler);
app.use(notFoundHandler);

if (!(process.env.PORT && process.env.MONGO_ATLAS_URI)) {
    throw new Error(
        "Missing required environment variables. Check docs for more info."
    );
}

mongooseConnection();

app.listen(process.env.PORT, () => {
    console.log(`Server is listening on port ${process.env.PORT}`);
});
