import { useState } from 'react'
import {Link} from 'react-router-dom'
import {FaBars, FaTimes} from 'react-icons/fa'
import { userData } from '../helper';

const Header = () => {
    const [openNav, setOpenNav] = useState(false);
    const handleNav = () => {
        setOpenNav(false);
    }
    const {token} = userData();

    if(token){
        return(
            <>
            {/* Main Menu */}
                <header className="w-screen h-24 bg-gray-900/50 backdrop-blur fixed flex justify-between items-center lg:px-32 px-10 z-50">
                    <h1 className="text-xl lg:text-3xl text-white"><Link to="/" onClick={handleNav}>Fossil Construction</Link></h1>
                    <ul className="md:flex hidden justify-center items-center gap-5 ">
                        <li>
                            <Link to="/client-area" className="lg:text-sm text-xs  text-gray-100 hover:text-green-900">Dashboard</Link>
                        </li>
                        <li>
                            <Link to="/my-account" className="lg:text-sm text-xs  text-gray-100 hover:text-green-900">My Account</Link>
                        </li>
                        <li>
                            <Link to="/make-request" className="lg:text-sm text-xs  text-gray-100 hover:text-green-900">Make Request</Link>
                        </li>
                        <li>
                            <Link to="/chat" className="lg:text-sm text-xs  text-gray-100 hover:text-green-900">Chat to Support</Link>
                        </li>
                        <li>
                            <Link to="/logout" className="lg:text-sm text-xs  text-gray-100 hover:text-green-900">Logout</Link>
                        </li>
                    </ul>
        
                    {/* Menu icon */}
        
                    <Link className="md:hidden block" onClick={() => setOpenNav(!openNav)}>
                    {
                        !openNav ? <FaBars  size={30} color='white'/> : <FaTimes size={30} color='white'/>
                    }
        
                    </Link>
        
                </header>
            
            {/* Main Menu ends */}
        
            {/* Mobile Menu */}
        
           {
            openNav &&  <ul className="w-full md:hidden fixed flex flex-col gap-5 top-24 bg-gray-900/50 backdrop-blur justify-center items-center px-10 py-10 z-50">
            <li>
                <Link onClick={handleNav} to="/client-area" className="lg:text-sm text-xs  text-gray-100 hover:text-green-900">Dashboard</Link>
            </li>
            <li>
                <Link onClick={handleNav} to="/my-account" className="lg:text-sm text-xs  text-gray-100 hover:text-green-900">My Account</Link>
            </li>
            <li>
                <Link onClick={handleNav} to="/make-request" className="lg:text-sm text-xs  text-gray-100 hover:text-green-900">Make Request</Link>
            </li>
            <li>
                <Link onClick={handleNav} to="/chat" className="lg:text-sm text-xs  text-gray-100 hover:text-green-900">Chat to Support</Link>
            </li>
            <li>
                <Link onClick={handleNav} to="/logout" className="lg:text-sm text-xs  text-gray-100 hover:text-green-900">Logout</Link>
            </li>
        </ul>
           }
        
            {/* Mobile Menu end*/}
        
            </>
        )
    }else{
        return (
            <>
            {/* Main Menu */}
                <header className="w-screen h-24 bg-gray-900/50 backdrop-blur fixed flex justify-between items-center lg:px-32 px-10 z-50">
                    <h1 className="text-xl lg:text-3xl text-white"><Link to="/" onClick={handleNav}>Fossil Construction</Link></h1>
                    <ul className="md:flex hidden justify-center items-center gap-5 ">
                        <li>
                            <Link to="/" className="lg:text-sm text-xs  text-gray-100 hover:text-green-900">Home</Link>
                        </li>
                        <li>
                            <Link to="/services" className="lg:text-sm text-xs  text-gray-100 hover:text-green-900">Services</Link>
                        </li>
                        <li>
                            <Link to="/contact" className="lg:text-sm text-xs  text-gray-100 hover:text-green-900">Contact Us</Link>
                        </li>
                        <li>
                            <Link to="/make-request" className="lg:text-sm text-xs  text-gray-100 hover:text-green-900">RFQ (Request for quotation)</Link>
                        </li>
                        <li>
                            <Link to="/faq" className="lg:text-sm text-xs  text-gray-100 hover:text-green-900">FAQ</Link>
                        </li>
                    </ul>
        
                    {/* Menu icon */}
        
                    <Link className="md:hidden block" onClick={() => setOpenNav(!openNav)}>
                    {
                        !openNav ? <FaBars  size={30} color='white'/> : <FaTimes size={30} color='white'/>
                    }
        
                    </Link>
        
                </header>
            
            {/* Main Menu ends */}
        
            {/* Mobile Menu */}
        
           {
            openNav &&  <ul className="w-full md:hidden fixed flex flex-col gap-5 top-24 bg-gray-900/50 backdrop-blur justify-center items-center px-10 py-10 z-50">
            <li>
                <Link to="/" onClick={handleNav} className="text-gray-200 text-lg hover:text-green-900">Home</Link>
            </li>
            <li>
                <Link to="/services" onClick={handleNav} className="text-gray-200 text-lg hover:text-green-900">Services</Link>
            </li>
            <li>
                <Link to="/contact" onClick={handleNav} className="text-gray-200 text-lg hover:text-green-900">Contact Us</Link>
            </li>
            <li>
                <Link to="/make-request" onClick={handleNav} className="text-gray-200 text-lg hover:text-green-900">RFQ (Request for Quotation)</Link>
            </li>
            <li>
                <Link to="/faq" onClick={handleNav} className="text-gray-200 text-lg hover:text-green-900">FAQ</Link>
            </li>
        </ul>
           }
        
            {/* Mobile Menu end*/}
        
            </>
          )
    }
  
}

export default Header