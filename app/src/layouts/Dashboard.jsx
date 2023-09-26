import { useState } from "react"
import { FaTimes } from "react-icons/fa"
import { Link } from "react-router-dom"
import {FiGitPullRequest} from "react-icons/fi"
import {BsPersonFillGear, BsFillChatLeftDotsFill} from "react-icons/bs"

const Dashboard = () => {
  const [sideNav, setSideNav] = useState(false);
  const handleSideNav = () => {
    setSideNav(false)
  }
  return (
    <>
      <div className="pt-24">
        <div className="grid md:grid-cols-3 h-screen">
          <aside className="md:flex hidden flex-col items-center justify-center bg-green-600 shadow gap-10 font-semibold px-2 h-full">
            <Link to="/client-area" className="active">Dashboard</Link>
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
            <h1 className="text-center py-10 text-2xl md:text-4xl font-semibold">Dashboard</h1>
            <div className="flex flex-wrap justify-center items-center py-10 gap-5 md:px-10 px-10">
              
              <Link to="/make-request" className="shadow rounded p-5 bg-white">
              <FiGitPullRequest size={50} color="green" className="mb-2"/>
                Make request
              </Link>

              <Link to="/chat" className="shadow rounded p-5 bg-white">
              <BsFillChatLeftDotsFill size={50} color="green" className="mb-2"/>
                Chat to support
              </Link>

              <Link to="/my-account" className="shadow rounded p-5 bg-white">
              <BsPersonFillGear size={50} color="green" className="mb-2"/>
                My Account
              </Link>

             
            </div>
          </div>
        </div>
      </div>

      {
        sideNav && <aside className="flex md:hidden flex-col items-center justify-center bg-green-600/50 backdrop-blur absolute top-24 w-[80vw] shadow gap-10 font-semibold px-2 h-full">
        <Link><FaTimes size={30} color="white" className="" onClick={handleSideNav}/></Link>
        <Link className="active" onClick={handleSideNav}>Dashboard</Link>
        <Link to="/my-account" onClick={handleSideNav}>My account</Link>
        <Link to="/make-request" onClick={handleSideNav}>Make request</Link>
        <Link to="/chat" onClick={handleSideNav}>Chat to Support</Link>
        <Link to="/logout" onClick={handleSideNav}>Logout</Link>

      </aside>
      }
    </>
  )
}

export default Dashboard