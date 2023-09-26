import { useState } from "react"
import { FaTimes } from "react-icons/fa"
import { Link } from "react-router-dom"

const Account = () => {
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
          <Link to="/chat">Chat to Support</Link>
          <Link to="/logout">Logout</Link>
        </aside>

          <Link className="aside-icon px-3 fixed md:hidden" onClick={()=> setSideNav(!sideNav)}>
            {
              !sideNav ? <p className="text-2xl text-green font-Montserrat font-semibold bg-green-600 rounded-full py-1 px-3 mt-4">&gt;</p> : <p className="text-2xl font-Montserrat font-semibold">&lt;</p>
            }
          </Link>

        <div className="md:col-span-2 w-full">
          
          account
        </div>
      </div>
    </div>

    {
      sideNav && <aside className="flex md:hidden flex-col items-center  bg-green-600/50 backdrop-blur absolute top-24 w-[80vw] shadow gap-10 font-semibold px-2 h-full">
      <Link><FaTimes size={30} color="white" className="" onClick={handleSideNav}/></Link>
      <Link onClick={handleSideNav}>Dashboard</Link>
      <Link onClick={handleSideNav}>My account</Link>
      <Link onClick={handleSideNav}>Make request</Link>
      <Link onClick={handleSideNav}>Chat to Support</Link>
      <Link to="/logout" onClick={handleSideNav}>Logout</Link>

    </aside>
    }
  </>
  )
}

export default Account