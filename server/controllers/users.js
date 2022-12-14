import Users from "../models/userModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const getUsers = async(req, res) => {
    try {
        const users = await Users.findAll({
            attributes:['id','name','email']
        });
        res.json(users);
    } catch (error) {
        console.log(error);
    }
}

export const Register = async(req, res) => { //user register requires user to give name email password and confirm password
    const { name, email, password, confPassword } = req.body;
    if(password !== confPassword) return res.status(400).json({msg: "Password and confirm password does not match."}); 
    if(name.length < 4) return res.status(400).json({msg: "Username must be atleast 4 characters long."});
    if(name.length > 30) return res.status(400).json({msg: "Username cannot be more than 30 characters long."});
    if(password.length < 6) return res.status(400).json({msg: "Password must be atleast 6 characters long."});
    if(password.length > 255) return res.status(400).json({msg: "Password cannot be more than 255 characters long."});
    const salt = await bcrypt.genSalt();
    const hashPassword = await bcrypt.hash(password, salt); //crypt user password for database
    try {
        await Users.create({ //create user to database
            name: name,
            email: email,
            password: hashPassword
        });
        res.json({msg: "Register successful"});
    } catch (error) {
        res.status(404).json({msg:"Username or email already in use."});
        console.log(error);
    }
}

export const Login = async(req, res) => { //user login requires email and password
    try {
        const user = await Users.findAll({ //checks if given email is in database
            where:{
                email: req.body.email
            }
        });
        
        const match = await bcrypt.compare(req.body.password, user[0].password); //ccompares if user given password is correct
        if(!match) return res.status(400).json({msg: "Incorrect email or password."}); // if password or email doesnt match
        const userId = user[0].id;
        const name = user[0].name;
        const email = user[0].email;
        const accessToken = jwt.sign({userId, name, email}, process.env.ACCESS_TOKEN_SECRET,{ //set user accectoken
            expiresIn: '20s' //token expire time
        });
        const refreshToken = jwt.sign({userId, name, email}, process.env.REFRESH_TOKEN_SECRET,{ //set user refreshtoken
            expiresIn: '2d' //token expire time
        });
        await Users.update({refresh_token: refreshToken},{ //update user refreshtoken
            where:{
                id: userId
            }
        });
        res.cookie('refreshToken', refreshToken,{ //save token in cookies
            secure: process.env.NODE_ENV !== "production",
            httpOnly: true,
            maxAge: 24 * 60 * 60 * 1000
        });
        res.json({ accessToken });
    } catch (error) {
    res.status(404).json({msg:"Something went wrong try again later."});
    }
}

export const Logout = async(req, res) => { //logs user out
    const refreshToken = req.cookies.refreshToken; // checks if refreshtoken matches with token in cookies
    if(!refreshToken) return res.sendStatus(204); //if refresh token is not found do this
    const user = await Users.findAll({
        where:{
            refresh_token: refreshToken
        }
    });
    if(!user[0]) return res.sendStatus(204); //if user not found respond with status 204
    const userId = user[0].id;
    await Users.update({refresh_token: null},{
        where:{
            id: userId
        }
    });
    res.clearCookie('refreshToken'); //clear token cookies
    return res.sendStatus(200);
}

export const deleteUser = async(req, res) => { //delete for user
    const refreshToken = req.cookies.refreshToken;  
    if(!refreshToken) return res.sendStatus(204);   //if token not found respond with status 204
    const user = await Users.findAll({ //find user with token
        where:{
            refresh_token: refreshToken
        }
    });
    if(!user[0]) return res.sendStatus(204);  //if user not found respond with status 204
    const userId = user[0].id; 
    await Users.destroy({   //delete user based on logged in id
        where:{
            id: userId
        }
    });
    res.clearCookie('refreshToken'); //clears cookies 
    return res.sendStatus(200);
}

