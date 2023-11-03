import { useState } from "react";
import { FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Axios } from "../../config";
import { toast } from "react-toastify";
import { userData } from "../helper";

const CreateProject = () => {

    const {token} = userData();
    const [sideNav, setSideNav] = useState(false);
    const handleSideNav = () => {
      setSideNav(false)
    };

    const [values, setValues] = useState({
        title: "",
        desc: "",
        location: ""
    

    });


    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            console.log(values);
            const res = await Axios.post('/projects',values,{
                headers: {
                    "Accept": "application/json",
                    "Authorization": `Bearer ${token}`
                }
            });

            if(res){
                toast.success(res.data.msg);
            }

        } catch (error) {
            console.log(error.response.data)
        }
    }
  return (
    <>
        <div className="pt-24">
      <div className="grid md:grid-cols-3 h-screen">
        <aside className="md:flex hidden flex-col items-center justify-center bg-green-600 shadow gap-10 font-semibold px-2 h-full">
          <Link to="/client-area">Dashboard</Link>
          <Link to="/my-account" >My account</Link>
          <Link to="/make-request">Make request</Link>
          <Link to="/project" className="active">Start Project</Link>
          <Link to="/chat">Chat to Support</Link>
          <Link to="/logout">Logout</Link>
        </aside>

          <Link className="aside-icon px-3 fixed md:hidden" onClick={()=> setSideNav(!sideNav)}>
            {
              !sideNav ? <p className="text-2xl text-green font-Montserrat font-semibold bg-green-600 rounded-full py-1 px-3 mt-4">&gt;</p> : <p className="text-2xl font-Montserrat font-semibold">&lt;</p>
            }
          </Link>

        <div className="md:col-span-2 w-full grid place-content-center">
          
          <form action="" className="flex flex-col gap-5 w-[300px] p-5 md:w-[500px]" onSubmit={handleSubmit}>
            <h1 className="md:text-3xl text-2xl text-center">Create a Project</h1>
            <div className="flex flex-col">
                <label htmlFor="title">Project Title</label>
                <input type="text"  name="title" id="title" onChange={(e) => setValues({...values, title: e.target.value})} className="border border-green-600 outline-none py-2 px-5 rounded" placeholder="Project Title" required/>
            </div>

            <div className="flex flex-col">
                <label htmlFor="location">Project Location</label>
                <input type="text"  name="location" id="location" onChange={(e) => setValues({...values, location: e.target.value})} className="border border-green-600 outline-none py-2 px-5 rounded" placeholder="Project Location" required />
            </div>

            <div className="flex flex-col">
                <label htmlFor="desc">Project Details</label>
                <textarea type="text" rows={10} name="desc" id="desc" onChange={(e) => setValues({...values, desc: e.target.value})} className="border border-green-600 outline-none py-2 px-5 rounded" placeholder="Project Details | Project requirements" required></textarea>
            </div>

           
           

            <input type="submit" value="Propose Project" className="bg-yellow-400 rounded cursor-pointer py-2"/>
          </form>
          
        </div>
      </div>
    </div>

    {
      sideNav && <aside className="flex md:hidden flex-col items-center  bg-green-600/50 backdrop-blur absolute top-24 w-[80vw] shadow gap-10 font-semibold px-2 h-full">
      <Link><FaTimes size={30} color="white" className="" onClick={handleSideNav}/></Link>
      <Link to="/client-area" onClick={handleSideNav}>Dashboard</Link>
      <Link className="active" to="/my-account" onClick={handleSideNav}>My account</Link>
      <Link to="/make-request" onClick={handleSideNav}>Make request</Link>
      <Link to="/chat" onClick={handleSideNav}>Chat to Support</Link>
      <Link to="/logout" onClick={handleSideNav}>Logout</Link>

    </aside>
    }
    </>
  )
}

export default CreateProject