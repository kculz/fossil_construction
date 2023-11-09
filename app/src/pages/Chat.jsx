import { useState } from "react"
import { FaFacebook, FaInstagram, FaTimes, FaTwitter, FaWhatsapp } from "react-icons/fa"
import { Link } from "react-router-dom"



const Chat = () => {
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
          <Link to="/make-request">Make request</Link>
          <Link to="/create-project">Start Project</Link>
          <Link to="/my-project">My Projects</Link>
          <Link to="/chat" className="active">Chat to Support</Link>
          <Link to="/logout">Logout</Link>
        </aside>

          <Link className="aside-icon px-3 fixed md:hidden" onClick={()=> setSideNav(!sideNav)}>
            {
              !sideNav ? <p className="text-2xl text-green font-Montserrat font-semibold bg-green-600 rounded-full py-1 px-3 mt-4">&gt;</p> : <p className="text-2xl font-Montserrat font-semibold">&lt;</p>
            }
          </Link>

        <div className="md:col-span-2 w-full flex gap-10 justify-center items-center flex-wrap">
          
          <Link to="https://api.whatsapp.com/send?phone=263738382881&text=hi" target="_blank">
            <FaWhatsapp size={50} color="green" title="Use whatsapp for instant responses" />
            Whatsapp
          </Link>

          <Link className="cursor-not-allowed">
            <FaFacebook size={50} color="blue"  />
            Facebook
          </Link>

          <Link className="cursor-not-allowed">
            <FaInstagram size={50} color="purple"  />
            Instagram
          </Link>

          <Link className="cursor-not-allowed">
            <FaTwitter size={50} color="cyan"  />
            Twitter
          </Link>

        </div>
      </div>
    </div>

    {
      sideNav && <aside className="flex md:hidden flex-col items-center justify-center bg-green-600/50 backdrop-blur absolute top-24 w-[80vw] shadow gap-10 font-semibold px-2 h-full">
      <Link><FaTimes size={30} color="white" className="" onClick={handleSideNav}/></Link>
      <Link to="/client-area" onClick={handleSideNav}>Dashboard</Link>
        <Link to="/my-account" onClick={handleSideNav}>My account</Link>
        <Link to="/make-request" onClick={handleSideNav}>Make request</Link>
        <Link to="/create-project" onClick={handleSideNav}>Start Project</Link>
        <Link className="active" to="/chat" onClick={handleSideNav}>Chat to Support</Link>
        <Link to="/logout" onClick={handleSideNav}>Logout</Link>

    </aside>
    }
  </>
  )
}

export default Chat