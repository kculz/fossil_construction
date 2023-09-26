/* eslint-disable react/prop-types */
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import axios from "axios"
import { toast } from "react-toastify";
import { userStore } from "../helper";

const Login = () => {

  const navigate = useNavigate();

  const [values, setValues] = useState({
   
    username: '',
    password: '',
   
  });

  const handleLogin = async (e) => {
    e.preventDefault();

    //  axios.defaults.withCredentials = true;
     await axios.post('/users/login', values).then((res) => {

      navigate('/client-area');
      userStore(res.data);
      window.location.reload();
      toast.success(res.data.msg);



  }).catch((err) => {

      toast.error(err.error);

  })

  };
  return (
    <>
        <div className="grid md:grid-cols-2 grid-cols-1 gap-5 w-screen h-screen">
            {/* Login form */}
            <div className="flex justify-center items-center">
            <form onSubmit={handleLogin} action="" className="flex flex-col gap-5 justify-center items-center md:pt-0 pt-24">
                <h1 className="text-center md:text-3xl text-xl font-semibold">Login here</h1>
                <p className="text-sm text-center">Get started.</p>
                <input required onChange={(e)=> setValues({...values, username: e.target.value})} type="text" name="username" id="username" placeholder="Enter your username" className="border border-green-600 bg-transparent outline-none px-2 py-3 text-lg text-green-600 rounded lg:w-[500px] w-full " />
                
                <input required onChange={(e)=> setValues({...values, password: e.target.value})} type="password" name="password" id="password" placeholder="Enter password" className="border border-green-600 bg-transparent outline-none px-2 py-3 text-lg text-green-600 rounded lg:w-[500px] w-full " />
                
                <input type="submit" value="Login"  className="bg-green-600 rounded py-3 px-4 text-center w-full"/>

                <Link to="/user/register">Not a User? <span className="text-lg text-green-600 font-semibold">Register</span></Link>
            </form>
            </div>
            {/* Login form end */}

            {/* Registration Content*/}
            <div className="bg-green-600 flex justify-center items-center gap-3 flex-col px-10">
                <h1 className="md:text-5xl text-2xl font-semibold">Benefits of being  Registered </h1>
                <p className="md:text-basic text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis expedita aut et natus eius asperiores nostrum voluptatem pariatur deleniti non.</p>

            </div>
            {/* Registration Content end  */}
        </div>
       
    </>
  )
}

export default Login