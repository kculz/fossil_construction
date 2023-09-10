import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import axios from "axios"
import { toast } from "react-toastify";

const Register = () => {

  const navigate = useNavigate();

  const [values, setValues] = useState({
    fullname: '',
    email: '',
    username: '',
    password: '',
    confirmPassword: ''
  });

  const handleRegister = async (e) => {
    e.preventDefault();

    if(values.password != values.confirmPassword){
      toast.warning("password does'nt match.");
      return;
    }

    await axios.post('/users/register', values).then((res) => {
      console.log(res.data.msg);
      toast.info(res.data.msg);
      navigate('/client-area');


    }).catch((err) => {

      console.log(err.error);
      toast.error(err.error);

    })

  };
  return (
    <>
        <div className="grid md:grid-cols-2 grid-cols-1 gap-5 w-screen h-screen">
            {/* Register form */}
            <div className="flex justify-center items-center">
            <form onSubmit={handleRegister} action="" className="flex flex-col gap-5 justify-center items-center md:pt-0 pt-24">
                <h1 className="text-center md:text-3xl text-xl font-semibold">Register here</h1>
                <p className="text-sm text-center">To become a user.</p>
                <input required onChange={(e)=> setValues({...values, username: e.target.value})} type="text" name="username" id="username" placeholder="Enter your username" className="border border-green-600 bg-transparent outline-none px-2 py-3 text-lg text-green-600 rounded lg:w-[500px] w-full " />
                <input required onChange={(e)=> setValues({...values, email: e.target.value})} type="email" name="email" id="email" placeholder="Enter your email" className="border border-green-600 bg-transparent outline-none px-2 py-3 text-lg text-green-600 rounded lg:w-[500px] w-full " />
                <input required onChange={(e)=> setValues({...values, password: e.target.value})} type="password" name="password" id="password" placeholder="Enter password" className="border border-green-600 bg-transparent outline-none px-2 py-3 text-lg text-green-600 rounded lg:w-[500px] w-full " />
                <input required onChange={(e)=> setValues({...values, confirmPassword: e.target.value})} type="password" name="confirmPassword" id="confirmPassword" placeholder="Confirm password" className="border border-green-600 bg-transparent outline-none px-2 py-3 text-lg text-green-600 rounded lg:w-[500px] w-full " />
                <input type="submit" value="Register"  className="bg-green-600 rounded py-3 px-4 text-center w-full"/>

                <Link to="/">Already a <span className="text-lg text-green-600 font-semibold">User</span></Link>
            </form>
            </div>
            {/* Register form end */}

            {/* Registration Content*/}
            <div className="bg-green-600 flex justify-center items-center gap-3 flex-col px-10">
                <h1 className="md:text-5xl text-2xl font-semibold">Benefits of being  registered </h1>
                <p className="md:text-basic text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis expedita aut et natus eius asperiores nostrum voluptatem pariatur deleniti non.</p>

            </div>
            {/* Registration Content end  */}
        </div>
       
    </>
  )
}

export default Register