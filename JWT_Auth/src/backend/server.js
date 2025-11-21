import express from "express";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors());

app.post("/login",(req,res) =>{
    const {email,password}=req.body;

    if(email === "test@gmail.com" && password === "123"){
        return res.json({
            token:"abc123xyz"
        });
    }

    return res.status(401).json({message:"Invalid credenrials"});
});

const PORT= 5000;
app.listen(PORT,() =>{
    console.log(`server running on port ${PORT}`);
});