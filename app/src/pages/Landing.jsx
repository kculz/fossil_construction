/* eslint-disable react/prop-types */
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { toast } from "react-toastify";
import { userData, userStore } from "../helper";
import { Axios } from "../../config";

const Landing = () => {

    const imageData = [
        {
            imageUrl: "https://images.pexels.com/photos/7031406/pexels-photo-7031406.jpeg?auto=compress&cs=tinysrgb&w=600",
            title: "Home Construction",
            desc: "At Fossil Contracting, we specialize in home construction. Our team of professionals is dedicated to bringing your dream home to life. From concept to completion, we handle every aspect of the construction process, including planning, design, and execution. With our expertise and attention to detail, we create high-quality, safe, and beautiful homes that exceed your expectations. Trust us to build your perfect home from the ground up."
        },

        {
            imageUrl: "https://images.pexels.com/photos/3551216/pexels-photo-3551216.jpeg?auto=compress&cs=tinysrgb&w=600",
            title: "Home Renovations",
            desc: "At Fossil Contracting , we specialize in home renovation services. Whether you're looking to update a single room or transform your entire home, our skilled team is here to help. We understand that your home is a reflection of your personal style and needs. With our expertise in design and construction, we breathe new life into your space, enhancing its functionality and aesthetics. From kitchen and bathroom remodels to complete home makeovers, we provide top-quality craftsmanship and attention to detail. Let us turn your vision into reality and create a home that you'll love for years to come."
        },

        {
            imageUrl: "https://curacaosewegenbouw.com/wp-content/uploads/2014/06/pic_cwm15.jpg",
            title: "Road Construction",
            desc: "We specialize in road construction, providing comprehensive solutions for building and improving road infrastructure. Our team delivers high-quality results that prioritize safety, durability, and efficiency. From planning and design to excavation, paving, and finishing touches, we ensure a seamless and well-executed project. With state-of-the-art equipment, advanced techniques, and a focus on sustainability, we create durable roadways that withstand heavy traffic and harsh weather. Safety is our top priority, and we minimize disruptions to surrounding communities and the environment. Contact us for professional and reliable road construction services that enhance connectivity and improve mobility."
        },
        {
            imageUrl: "https://st2.depositphotos.com/1000291/8752/i/450/depositphotos_87526854-stock-photo-excavator-loader-at-earthmoving-works.jpg",
            title: "Earthworks",
            desc: "At our construction company, we specialize in earthworks, offering comprehensive solutions for excavation, grading, and land preparation. Our experienced team is dedicated to delivering high-quality results that meet the unique requirements of each project."
        },
    ]

    const navigate = useNavigate();

    const [values, setValues] = useState({
        username: '',
        password: ''
    });

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const res = await Axios.post('/users/login', values);
            let {msg, code} = res.data;
            toast.success(`${msg}, code: ${code}`);
            navigate('/client-area');
            userStore(res.data);
            window.location.reload();
      
          } catch (error) {
            const {msg} = error.response.data;
            console.log(msg);
            toast.warn(`Invalid credentials`);
          }
    }

    const {token} = userData();

    if(token){
        return(
<>
            {/* Hero */}
                <div className="hero landing-page-hero bg-gray-600  ">
                    <div className="flex flex-col justify-center md:items-start items-center gap-4">
                        <h1 className="md:text-3xl text-lg text-gray-800">Welcome to <span className="text-green-600 font-bold">Fossil Contracting,</span>leading construction company dedicated to delivering top-quality construction services.</h1>
                        <p className="text-sm text-gray-800"> We specialize in civil works, contract mining, road construction building and structural works, home construction and renovations</p>
                        <Link className="py-3 px-4 bg-green-600 rounded-md">Read more...</Link>
                    </div>
                   <div className="flex justify-center items-center flex-col">
                    {/* <div className="bg-green-900/30 backdrop-blur rounded-lg lg:w-2/3 w-full p-5">
                        <h1 className="text-gray-100 text-center text-2xl font-bold pb-10">Login Here</h1>
        
                        <form onSubmit={handleLogin} action="" className="flex flex-col gap-3">
                            <input onChange={(e)=> setValues({...values, username: e.target.value})} type="text" name="username" id="username" className="border-b border-green-700 bg-transparent outline-none py-3 px-3 text-green-900 text-lg" placeholder="Enter Username Here"/>
                            <input onChange={(e)=> setValues({...values, password: e.target.value})} type="password" className="border-b border-green-700 bg-transparent outline-none py-3 px-3 text-green-900 text-lg" name="password" id="password" placeholder="Enter password here"/>
                            <input type="submit" value="Login" className="bg-gray-200 py-2 px-2 rounded-md text-center" />
                            {/* <Link >Login</Link> */}
                            {/* <p className="text-xs text-white py-8">Dont have an account <span className="text-green-600 text-sm"><Link to="/user/register">Register</Link></span></p> */}
                        {/* </form> */}
                    {/* </div> */} 
                   </div>
                </div>
        
            {/* Hero end */}
        
            {/* Services */}
                <div className="bg-white w-screen h-auto md:px-32 px-10 py-10">
                    <h1 className="text-center md:text-5xl text-2xl text-gray-900 py-10">What you will get</h1>
                    <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 py-10">
        
                        {
                            imageData.map((data, index) =>  <div className="rounded shadow bg-white overflow-hidden" key={index}>
                            <img src={data.imageUrl} alt="construction image" />
                            <div className="text-center text-sm text-gray-700 p-2">
                                <h1 className="text-lg md:text-2xl text-semibold py-3">{data.title}</h1>
                                <p>{data.desc}</p>
                            </div>
                        </div>
                            
                            )
                        }
                       
        
                      
        
                    </div>
                    <div className="flex justify-center items-center py-2">
                        <Link to="/services" className="bg-green-600 py-2 px-4 rounded">Go to services</Link>
                    </div>
                </div>
            {/* Services end */}
        
            {/* News letter */}
        
            <div className="bg-green-600 md:px-32 px-10 py-10 w-screen">
                <div className="grid md:grid-cols-2 grid-cols-1 py-20">
                    <div className=" w-full">
                        <h1 className="text-gray-300 md:text-4xl text-2xl py-5">Subscribe to our <span className="md:text-4xl text-3xl text-white font-semibold">Newsletters</span></h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente sequi nulla ipsa rerum.</p>
                    </div>
        
                    <div className=" w-full">
                        <form action="" className="flex flex-col gap-2">
                            <input type="email" name="email" id="email" placeholder="Enter email"  required className="px-2 py-2 rounded" />
                            <input type="submit" value="Subscribe" className="bg-green-50 py-2 rounded"/>
                        </form>
                    </div>
                </div>
            </div>
        
            {/* News letter end*/}
        
            {/* */}
            </>
        )
    }else{
        return (
            <>
            {/* Hero */}
                <div className="hero landing-page-hero bg-gray-600  ">
                    <div className="flex flex-col justify-center md:items-start items-center gap-4">
                    <h1 className="md:text-3xl text-lg text-gray-800">Welcome to <span className="text-green-600 font-bold">Fossil Contracting,</span>leading construction company dedicated to delivering top-quality construction services.</h1>
                        <p className="text-sm text-gray-900"> We specialize in civil works, contract mining, road construction building and structural works, home construction and renovations</p>
                        <Link className="py-3 px-4 bg-green-600 rounded-md">Read more...</Link>
                    </div>
                   <div className="flex justify-center items-center flex-col">
                    <div className="bg-green-900/30 backdrop-blur rounded-lg lg:w-2/3 w-full p-5">
                        <h1 className="text-gray-100 text-center text-2xl font-bold pb-10">Login Here</h1>
        
                        <form onSubmit={handleLogin} action="" className="flex flex-col gap-3">
                            <input onChange={(e)=> setValues({...values, username: e.target.value})} type="text" name="username" id="username" className="border-b border-green-700 bg-transparent outline-none py-3 px-3 text-green-900 text-lg" placeholder="Enter Username Here"/>
                            <input onChange={(e)=> setValues({...values, password: e.target.value})} type="password" className="border-b border-green-700 bg-transparent outline-none py-3 px-3 text-green-900 text-lg" name="password" id="password" placeholder="Enter password here"/>
                            <input type="submit" value="Login" className="bg-gray-200 py-2 px-2 rounded-md text-center" />
                            {/* <Link >Login</Link> */}
                            <p className="text-xs text-white py-8">Dont have an account <span className="text-green-600 text-sm"><Link to="/user/register">Register</Link></span></p>
                        </form>
                    </div>
                   </div>
                </div>
        
            {/* Hero end */}
        
            {/* Services */}
                <div className="bg-white w-screen h-auto md:px-32 px-10 py-10">
                    <h1 className="text-center md:text-5xl text-2xl text-gray-900 py-10">What you will get</h1>
                    <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 py-10">
        
                        {
                            imageData.map((data, index) =>  <div className="rounded shadow bg-white overflow-hidden" key={index}>
                            <img src={data.imageUrl} alt="construction image" />
                            <div className="text-center text-sm text-gray-700 p-2">
                                <h1 className="text-lg md:text-2xl text-semibold py-3">{data.title}</h1>
                                <p>{data.desc}</p>
                            </div>
                        </div>
                            
                            )
                        }
                       
        
                      
        
                    </div>
                </div>
            {/* Services end */}
        
            {/* News letter */}
        
            <div className="bg-green-600 md:px-32 px-10 py-10 w-screen">
                <div className="grid md:grid-cols-2 grid-cols-1 py-20">
                    <div className=" w-full">
                        <h1 className="text-gray-300 md:text-4xl text-2xl">Subscribe to our <span className="md:text-4xl text-3xl text-white font-semibold">Newsletters</span></h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente sequi nulla ipsa rerum.</p>
                    </div>
        
                    <div className=" w-full">
                        <form action="" className="flex flex-col gap-2">
                            <input type="email" name="email" id="email" placeholder="Enter email"  required className="px-2 py-2 rounded" />
                            <input type="submit" value="Subscribe" className="bg-green-50 py-2 rounded"/>
                        </form>
                    </div>
                </div>
            </div>
        
            {/* News letter end*/}
        
            {/* */}
            </>
          )
    }

 
}

export default Landing