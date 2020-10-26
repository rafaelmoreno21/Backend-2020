import mongoose from "mongoose";
import "dotenv/config";

mongoose.connect(`${process.env.DB_MONGO}`, {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex:true})
    .then(() => console.log('MongoDB Connected...'))
    .catch((err) => console.log(err));


