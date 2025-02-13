// Form.js

import { useState } from 'react';
import InputField from './InputField';
import { FaUser, FaEnvelope, FaLock } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
const FormSignup = () => {
  const navigate = useNavigate();

  const handleSubmit = async (e) =>{
    e.preventDefault();

    console.log(" i  am here !");
    try {
      const response = await fetch('http://localhost:5000/user/signup', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
          },
          withCredentials: true,
          credentials: "include",
          body: JSON.stringify(formData) // Ensure the body is a string
      });
      const data = await response.json();
      
      if(data.success){
       console.log("success");
       navigate("/");
      }
      else{
        console.log("error in signup")
        console.log(data.message);
      }
      
  } catch (error) {
    console.log("Error Ocuure !")
      console.error('Error:', error);
  }
  
  }

    const [formData,setformData] = useState({
        "name":"",
        "email":"",
        "password":"",
        "confirmPassword":""
    })
  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
      <InputField icon={FaUser} type="text" name="name" placeholder="Full Name" formData={formData} setformData={setformData}/>
      <InputField icon={FaEnvelope} type="email" name="email" placeholder="Email Address" formData={formData} setformData={setformData}/>
      <InputField icon={FaLock} type="password" name="password" placeholder="Password" formData={formData} setformData={setformData}/>
      <InputField icon={FaLock} type="password" name="confirmPassword" placeholder="Confirm Password" formData={formData} setformData={setformData}/>
      <button

        type='submit'
        className="w-full py-2 bg-blue-600 text-green-100 rounded hover:bg-blue-700"
        
      >
        Sign Up
      </button>
    </form>
  );
};

export default FormSignup;
