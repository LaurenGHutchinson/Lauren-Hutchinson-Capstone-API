import express from 'express';
import "dotenv/config"
import initKnex from 'knex';
import cors from 'cors';
import config from "./knexfile.js"
import jobsRouter from './routes/jobsRoutes.js';
import questionsRouter from './routes/questionsRoutes.js';
import skillsRouter from './routes/skillsRoutes.js';
import answersRouter from './routes/answersRoutes.js';
import debuggerRouter from './routes/debuggerRoutes.js'
import codingChallengeRouter from './routes/codingChallengeRoutes.js'


const app = express(); 
const knex = initKnex(config); 

const PORT = process.env.PORT || 8080;

app.use(express.json()); 
app.use(cors({origin: process.env.CORS_ORIGIN || `https://www.byteback-edu.com` || "https://frabjous-lolly-1006b2.netlify.app"}));

app.get('/', (req,res)=> {
    res.send("Welcome to my capstone API")
})

app.use("/jobs", jobsRouter);
app.use("/skills", skillsRouter);
app.use("/questions", questionsRouter);
app.use("/answers", answersRouter);
app.use("/debugger", debuggerRouter)
app.use("/codingChallenge", codingChallengeRouter)


app.listen(PORT, ()=> {
    console.log("App running on port:" + PORT);
});