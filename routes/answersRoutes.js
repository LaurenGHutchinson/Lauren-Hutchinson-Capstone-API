import express from 'express';
const answersRouter = express.Router();

answersRouter.get('/', (req,res)=> {
    res.send("welcome to my answers API")
})
export default answersRouter;