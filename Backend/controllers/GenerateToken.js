import jwt from "jsonwebtoken";

const generateToken = (userId, res) => {
  try {

    const token = jwt.sign({ userId }, process.env.JWT_TOKEN, { expiresIn: "2d" });
    res.cookie("token", token, {
      secure: process.env.NODE_ENV === "production",
      maxAge: 2 * 24 * 60 * 60 * 1000
    });
    console.log("Token generated and set in cookie");
  } catch (error) {
    // Handle errors
    console.error("Error generating token:", error);
    console.log("Error generating token");
  }
};

export default generateToken;
