import express from 'express';
const questionsRouter = express.Router();

questionsRouter.get('/', (req,res)=> {
    res.send("welcome to my questions API")
})

export default questionsRouter;