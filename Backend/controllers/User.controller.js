import User from "../models/User.model.js";
import bcrypt from "bcryptjs";
import generateToken from "./GenerateToken.js";

export const Signup = async (req, res) => {
  try {
    const { name, email, password, confirmPassword } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({
        success: false,
        message: "missing fields !",
      });
    }

    if (password !== confirmPassword) {
      return res.status(400).json({
        success: false,
        message: "confirm password does not match !",
      });
    }

    const user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({
        success: false,
        message: "email already exist !",
      });
    }

    const hashPassword = await bcrypt.hash(password , 10 );
    const newUser = new User({
      name,
      email,
      password:hashPassword,
    });

    newUser.save().then(() => {
      generateToken(newUser._id,res);
      return res.status(201).json({
        success: true,
        message: "User created successfully !",
      });
    });

  } catch (error) {
    console.log(error);
    return res.status(400).json({
      success: false,
      message: "User is not created !",
    });
    
  }
};

export const Login = async (req , res) => {

  try{

  
  const {email , password} = req.body;

  if(!email || !password){
    return res.status(400).json({
      success:false,
      message:"missing field"
    })
  }

const user = await User.findOne({email});

  if(!user){
    return res.status(400).json({
      success:false,
      message:"user does not exist !"
    })
  }

  const verifiedUser = await bcrypt.compare(password , user.password);

  if(!verifiedUser){
    return res.status(400).json({
      success:false,
      message:"invalid credentials !"
    })
  }

  generateToken(user._id,res);
  return res.status(200).json({
    success:true,
    message:"user login successfull"
  })
}
catch(error){
  console.log(error)
  return res.status(500).json({
    success:false,
    message:"server error !"
  })

}
  
};

export const Logout = async (req,res) =>{
  try {
    res.clearCookie("token");
    return res.status(200).json({
      success:true,
      message:"logout successfull"
    })
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success:false,
      message:"server error"
    })
  }
}


export const getAllUsers = async (req,res) => {

const loggedUser = req.user[0]._id?.toString();
 
  try {
    const allUsers = await User.find({_id:{$ne : loggedUser}}).select("-password");
    return res.status(200).json({allUsers});
  } catch (error) {
    return res.status(200).json({
      success:false,
      message:"not getting userData from getAllUsers"
    });
  }
}

