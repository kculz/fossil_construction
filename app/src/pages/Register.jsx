import { Link } from "react-router-dom"

const Register = () => {
  return (
    <>
        <div className="grid md:grid-cols-2 grid-cols-1 gap-5 w-screen h-screen">
            {/* Register form */}
            <div className="flex justify-center items-center">
            <form action="" className="flex flex-col gap-5 justify-center items-center md:pt-0 pt-24">
                <h1 className="text-center md:text-3xl text-xl font-semibold">Register here</h1>
                <p className="text-sm text-center">To become a user.</p>
                <input type="text" name="username" id="username" placeholder="Enter your username" className="border border-green-600 bg-transparent outline-none px-2 py-3 text-lg text-green-600 rounded lg:w-[500px] w-full " />
                <input type="email" name="email" id="email" placeholder="Enter your email" className="border border-green-600 bg-transparent outline-none px-2 py-3 text-lg text-green-600 rounded lg:w-[500px] w-full " />
                <input type="password" name="password" id="password" placeholder="Enter password" className="border border-green-600 bg-transparent outline-none px-2 py-3 text-lg text-green-600 rounded lg:w-[500px] w-full " />
                <input type="password" name="password" id="password" placeholder="Confirm password" className="border border-green-600 bg-transparent outline-none px-2 py-3 text-lg text-green-600 rounded lg:w-[500px] w-full " />
                <input type="submit" value="Register"  className="bg-green-600 rounded py-3 px-4 text-center w-full"/>

                <Link to="/">Already a <span className="text-lg text-green-600 font-semibold">User</span></Link>
            </form>
            </div>
            {/* Register form end */}

            {/* Registration Content*/}
            <div className="bg-green-600 flex justify-center items-center gap-3 flex-col px-10">
                <h1 className="md:text-5xl text-2xl font-semibold">Benefits of being  registered </h1>
                <p className="md:text-basic text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis expedita aut et natus eius asperiores nostrum voluptatem pariatur deleniti non.</p>

            </div>
            {/* Registration Content end  */}
        </div>
       
    </>
  )
}

export default Register