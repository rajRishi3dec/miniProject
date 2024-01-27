import Register_service from "../services/register_service.js";
import Login_service from "../services/login_service.js";

const authenticationController = {

    Register : (req,res)=>{
        Register_service(req.body)
        .then((message)=>{
            console.log(message);
            res.status(200).json(message);
        })
        .catch((err)=>{
            console.log(err);
            res.status(500).json(err);
        })
    },

    Login : (req,res)=>{
        Login_service(req.body)
        .then((message)=>{
            console.log(message);
            res.status(200).json(message);
        })
        .catch((err)=>{
            console.log(err);
            res.status(200).json(err);
        })
    },
}

export default authenticationController;