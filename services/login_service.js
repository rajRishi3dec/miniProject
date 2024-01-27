import generate_token from "../utils/generate_tokens.js";
import User from "../models/user_model.js";

const Login_service = (details)=>{
    return new Promise((resolve,reject)=>{
        console.log(details);
        const username = details.username;
        const password = details.password;
        if ((username == "") || (password == "")) {
            reject({ message: "Empty fields in the request body" });
        }else if (!username || !password) {
            reject({ message: 'Missing fields in the request body' });
        } else{
            User.findOne({ UserID: username })    // set the search parameter
                .then((details) => {
                    if (details) {
                        if (details.Password == password) {
                            const token = generate_token({UserID : details.UserID},'1h')
                            resolve({ message: "Login Successful" , authToken : token , userID : details.UserID});
                        } else {
                            reject({ message: "Invalid Password" });
                        }
                    } else {
                        reject({ message: "User Not Found" });
                    }
                })
                .catch((err) => {
                    reject({ error: err });
                });
        }
    })
}

export default Login_service;