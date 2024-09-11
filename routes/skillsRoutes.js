import express from 'express';
const skillsRouter = express.Router();

skillsRouter.get('/', (req,res)=> {
    res.send("welcome to my skills API")
})

export default skillsRouter;