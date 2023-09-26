import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

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

  return (
    <>
        <div className="bg-white md:px-32 px-10 w-screen">
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
    </>
  )
}

export default Rfq