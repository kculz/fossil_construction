import { useEffect, useState } from "react"
import { FaTimes } from "react-icons/fa"
import { Link } from "react-router-dom"
import { toast } from "react-toastify";
import { userData } from "../helper";
import { Axios } from "../../config";

const Account = () => {

  const {id, token} = userData();

  const [sideNav, setSideNav] = useState(false);
  const handleSideNav = () => {
    setSideNav(false)
  };

  const [values, setValues] = useState({
    fullname: '',
    email: '',
    username: '',
    password: ''
  });

  const [userInfo, setUserInfo] = useState([]);

  useEffect(()=> {
   
    const fetchData = async() => {
       try {
        const res = await Axios.get(`/users/${id}`, {
          headers: {
            "Authorization": `Bearer ${token}`
          }
        });
        setUserInfo(res.data.data);
       } catch (error) {
        console.log(error);
        toast.warn(error);
       }
    }

    fetchData();
    
  }, [id]);

  
  const handleAccount = async (e) => {
    e.preventDefault();

    try {

      const res = await Axios.post(`/users/edit/${id}`, values, {
        headers: {
          'Authorization': `Bearer ${token}`,
        }
      });
      const {msg} = res.data;
      toast.success(msg);
      console.log(res.data);

    } catch (error) {
      console.log(error);
      toast.warn(error);
    }
  }

  return (
    <>
    <div className="pt-24">
      <div className="grid md:grid-cols-3 h-screen">
        <aside className="md:flex hidden flex-col items-center justify-center bg-green-600 shadow gap-10 font-semibold px-2 h-full">
          <Link to="/client-area">Dashboard</Link>
          <Link to="/my-account" className="active">My account</Link>
          <Link to="/make-request">Make request</Link>
          <Link to="/chat">Chat to Support</Link>
          <Link to="/logout">Logout</Link>
        </aside>

          <Link className="aside-icon px-3 fixed md:hidden" onClick={()=> setSideNav(!sideNav)}>
            {
              !sideNav ? <p className="text-2xl text-green font-Montserrat font-semibold bg-green-600 rounded-full py-1 px-3 mt-4">&gt;</p> : <p className="text-2xl font-Montserrat font-semibold">&lt;</p>
            }
          </Link>

        <div className="md:col-span-2 w-full grid place-content-center">
          
          <form action="" className="flex flex-col gap-5 w-[300px] p-5 md:w-[500px]" onSubmit={handleAccount}>
            <h1 className="md:text-3xl text-2xl text-center">Update account information</h1>
            <input type="text" value={userInfo.fullname} name="fullname" id="fullname" onChange={(e) => setValues({...values, fullname: e.target.value})} className="border border-green-600 outline-none py-2 px-5 rounded" />
            <input type="text" value={userInfo.username} name="username" id="username" onChange={(e) => setValues({...values, username: e.target.value})} className="border border-green-600 outline-none py-2 px-5 rounded" />
            <input type="email" value={userInfo.email} name="email" id="email" onChange={(e) => setValues({...values, email: e.target.value})} className="border border-green-600 outline-none py-2 px-5 rounded" />
            <input type="password" placeholder="Change password" name="password" id="password" onChange={(e) => setValues({...values, password: e.target.value})} className="border border-green-600 outline-none py-2 px-5 rounded" />

            <input type="submit" value="Update Info" className="bg-yellow-400 rounded py-2"/>
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

export default Account