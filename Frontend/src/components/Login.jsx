import { Link } from 'react-router-dom';
import FormLogin from './FormLogin';


export default function Login() {
  return (
    <div className='flex justify-center items-center h-screen'>
    <div className="bg-gray-300 p-8 rounded-lg shadow-lg w-96">
      <h2 className="text-2xl font-bold text-center text-blue-600  mb-6">
        Login Your Account
      </h2>
      <FormLogin />
      <p className="text-center  mt-4">
        Not have an account?&nbsp;  
        <Link to="/signup" className='text-blue-600'>
          sign up
        </Link>
      </p>
      <p className='text-center mt-4'>
      </p>
      
    </div>
    </div>
  )
}
