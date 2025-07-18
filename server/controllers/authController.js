import User from "../models/User.js";
import jwt from "jsonwebtoken";

//Register new user
export const registerUser = async (req, res) => {
  try {
    const { name, email, password, address, role } = req.body;

    // Basic validation
    if (!name || !email || !password) {
      return res.status(400).json({ message: "Please fill all required fields." });
    }

    // Check if user already exists
    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(400).json({ message: "User already exists with this email." });
    }

    // Create new user
    const newUser = new User({
      name,
      email,
      password,
      address,
      role: role || "user", 
    });

    // Save user (hashed by pre-save hook)
    await newUser.save();

    // Create JWT token
    const token = jwt.sign(
      { userId: newUser._id, name:newUser.name, role: newUser.role },
      process.env.JWT_SECRET,
      { expiresIn: "7d" }
    );

    // Respond with user info & token
    res.status(201).json({
      _id: newUser._id,
      name: newUser.name,
      email: newUser.email,
      role: newUser.role,
      token,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error during registration." });
  }
};



////Login User API 

export const loginUser = async(req,res)=> {
    try {
        const {email,password} = req.body;

        if(!email, !password){
           return res.status(400).json({message: 'Plese enter email and password'})
        }

        const user = await User.findOne({email});

        if(!user){
           return res.status(400).json({message:'invalid User'});
        }

        const isMatch = await user.matchPassword(password);

        if(!isMatch){
            return res.status(400).json({message:'Invalid credentials.'})
        }
        
        const token = jwt.sign(
            {id:user._id, role:user.role, name:user.name },
            process.env.JWT_SECRET,
            { expiresIn: "7d" }
        )

        res.status(200).json({
            id:user._id,
            name:user.name,
            email:user.email,
            role:user.role,
            token
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({message:'Internal Server Error'})
    }
}