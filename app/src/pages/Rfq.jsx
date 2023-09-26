import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { FaTimes } from "react-icons/fa"

const Rfq = () => {

  const [values, setValues] = useState({
    fullname: "",
    email: "",
    subject: "",
    message: ""
  });

  const navigate = useNavigate();

  const handleRequest = async (e) => {
    e.preventDefault();
    try {

      const res = await axios.post('/rfq/send', values);
      toast.info(res.data.msg);
      navigate('/success');

    } catch (error) {
      console.log(error);
    }

  };

  const [sideNav, setSideNav] = useState(false);
  const handleSideNav = () => {
    setSideNav(false)
  }

  return (
    <>
 <div className="pt-24">
        <div className="grid md:grid-cols-3 h-screen">
          <aside className="md:flex hidden flex-col items-center justify-center bg-green-600 shadow gap-10 font-semibold px-2 h-full">
            <Link to="/client-area">Dashboard</Link>
            <Link to="/my-account">My account</Link>
            <Link to="/make-request" className="active">Make request</Link>
            <Link to="/chat">Chat to Support</Link>
            <Link to="/logout">Logout</Link>
          </aside>

            <Link className="aside-icon px-3 fixed md:hidden" onClick={()=> setSideNav(!sideNav)}>
              {
                !sideNav ? <p className="text-2xl text-green font-Montserrat font-semibold bg-green-600 rounded-full py-1 px-3 mt-4">&gt;</p> : <p className="text-2xl font-Montserrat font-semibold">&lt;</p>
              }
            </Link>

          <div className="md:col-span-2 w-full">
          <div className="bg-white md:px-32 px-10 w-full">
            <div className="flex justify-center items-center  w-full py-56">
                <form onSubmit={handleRequest} className="shadow rounded bg-white flex flex-col gap-3 p-3 lg:w-2/3 w-full">
                    <h1 className="md:text-3xl text-xl text-green-600 text-center capitalize">Request</h1>
                    <input onChange={(e) => setValues({...values, fullname: e.target.value})} type="text" name="fullname" id="fullname" placeholder="Enter your fullname" className="bg-transparent border border-green-600 rounded outline-none py-3 px-2 md:text-lg text-base text-green-600" required />
                    <input onChange={(e) => setValues({...values, email: e.target.value})} type="email" name="email" id="email" placeholder="Enter your email address" className="bg-transparent border border-green-600 rounded outline-none py-3 px-2 md:text-lg text-base text-green-600" required />
                    <input onChange={(e) => setValues({...values, subject: e.target.value})} type="text" name="subject" id="subject" placeholder="Enter request subject" className="bg-transparent border border-green-600 rounded outline-none py-3 px-2 md:text-lg text-base text-green-600" required />
                    <textarea onChange={(e) => setValues({...values, message: e.target.value})} name="message" id="message" cols="30" rows="5" className="bg-transparent border border-green-600 rounded outline-none py-3 px-2 md:text-lg text-base text-green-600" required placeholder="Message"></textarea>
                    <input type="submit" value="Sent request" className="bg-green-600 py-3 rounded text-lg text-white" />
                </form>
            </div>
        </div>
          </div>
        </div>
      </div>

      {
        sideNav && <aside className="flex md:hidden flex-col items-center justify-center bg-green-600/50 backdrop-blur absolute top-24 w-[80vw] shadow gap-10 font-semibold px-2 h-full">
        <Link><FaTimes size={30} color="white" className="" onClick={handleSideNav}/></Link>
        <Link to="/client-area"  onClick={handleSideNav}>Dashboard</Link>
        <Link to="/my-account" onClick={handleSideNav}>My account</Link>
        <Link className="active" to="/make-request" onClick={handleSideNav}>Make request</Link>
        <Link to="/chat" onClick={handleSideNav}>Chat to Support</Link>
        <Link to="/logout" onClick={handleSideNav}>Logout</Link>

      </aside>
      }





        
    </>
  )
}

export default Rfq