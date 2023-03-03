const mongoose = require("mongoose");

const mongooseConnection = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_ATLAS_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log(`MongoDB connected : ${conn.connection.host}`);
    } catch (err) {
        console.log("MongoDB not connected " + err);
        process.exit(1);
    }
};

module.exports = mongooseConnection;
