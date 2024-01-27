import User from "../models/user_model.js"

const Register_service= (userDetails)=>{
    return new Promise((resolve,reject)=>{
        console.log(userDetails);
        const username = userDetails.username;
        const password = userDetails.password;
        const email = userDetails.email;
        const name = userDetails.name;

        if ((username == "") || (password == "") || (email == "") || (name=="")) {
            reject({ message: "Empty fields in the request body" });
        }else if (!username || !password || !email || !name) {
            reject({ message: 'Missing fields in the request body' });
        } else {
            const newUser = new User({     // append new fields according to your needs (append new fields in schema also)
                UserID: username,
                Password: password,
                Email: email,
                Name : name,
            });
            newUser.save()
                .then(() => {
                    resolve({message:'User Registered Sucessfully'});
                })
                .catch((err) => {
                    reject({ message: 'Username already exists'});
                });
        }
    })
}

export default Register_service;