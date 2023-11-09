/* eslint-disable react/prop-types */
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { toast } from "react-toastify";
import { userStore } from "../helper";
import { Axios } from "../../config";

const Login = () => {

  const navigate = useNavigate();

  const [values, setValues] = useState({
   
    username: '',
    password: '',
   
  });

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await Axios.post('/users/login', values);
      let {msg, code} = res.data;
      toast.success(`${msg}, code: ${code}`);
      navigate('/client-area');
      userStore(res.data);
      window.location.reload();

    } catch (error) {
      let {msg, code} = error.response.data;
      console.log(msg);
      toast.warn(`${msg}, code: ${code}`);
    }
   

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
                <p className="md:text-basic text-sm">It grants access to valuable information about the company&apos;s services and projects, keeping you informed, it opens doors to job opportunities, with direct application options .  Regular updates on company news and industry trends keep you informed..</p>

            </div>
            {/* Registration Content end  */}
        </div>
       
    </>
  )
}

export default Login