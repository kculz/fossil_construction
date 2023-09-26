// import { FaFacebook, FaInstagram, FaTwitter, FaWhatsapp } from "react-icons/fa"
// import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <div className="bg-green-600 w-screen h-24 md:px-32 px-10 py-3">
      <div className="flex md:flex-row flex-col justify-between items-center">
        {/* <h1 className="md:text-3xl text-lg text-white font-semibold">Fossil Construction</h1>
        <div className="flex gap-5">
          <Link ><FaTwitter size={30} /></Link>
          <Link ><FaFacebook size={30} /></Link>
          <Link ><FaWhatsapp size={30} /></Link>
          <Link ><FaInstagram size={30} /></Link>
        </div> */}

      </div>
      <p className="text-center text-base mt-9">&copy; copyrights reserved 2023</p>
    </div>
  )
}

export default Footer