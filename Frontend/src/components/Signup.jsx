import { Link } from 'react-router-dom';
import FormSignup from './FormSignup';
const Signup = () => {
  return (
    <div className='flex items-center justify-center h-screen'>
    <div className="bg-gray-300 p-8 rounded-lg shadow-lg w-96">
      <h2 className="text-2xl font-bold text-center text-blue-600  mb-6">
        Create Account
      </h2>
      <FormSignup />
      <p className="text-center mt-4">
        Already have an account ?  
        <Link to="/login" className='text-blue-600'>
          Login
        </Link>
      </p>
    </div>
    </div>
  );
};

export default Signup;
