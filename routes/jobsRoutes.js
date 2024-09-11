import express from 'express';
const jobsRouter = express.Router();

jobsRouter.get('/', (req,res)=> {
    res.send("welcome to my jobs API")
})

export default jobsRouter;