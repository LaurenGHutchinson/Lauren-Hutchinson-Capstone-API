import express from 'express';
import "dotenv/config"
import initKnex from 'knex';
import cors from 'cors';
import config from "./knexfile.js"
import jobsRouter from './routes/jobsRoutes.js';
import questionsRouter from './routes/questionsRoutes.js';
import skillsRouter from './routes/skillsRoutes.js';
import answersRouter from './routes/answersRoutes.js';


const app = express(); //initializing an express app
const knex = initKnex(config); //importing server data from knex config file and saving it into a variable

const PORT = process.env.PORT || 8080; //setting the port to be taken from the .env or setting backup

app.use(express.json()); //initializing json middleware 
app.use(cors({origin: process.env.CORS_ORIGIN})); //intialize cors for sending and receiving data from client-end

app.get('/', (req,res)=> {
    res.send("Welcome to my capstone API")
})

app.use("/jobs", jobsRouter);
app.use("/skills", skillsRouter);
app.use("/questions", questionsRouter);
app.use("/answers", answersRouter);


app.listen(PORT, ()=> {
    console.log("App running on port:" + PORT);
});