import { Link } from "react-router-dom"

const Services = () => {
  const imageData = [
    {
        imageUrl: "https://images.pexels.com/photos/7031406/pexels-photo-7031406.jpeg?auto=compress&cs=tinysrgb&w=600",
        title: "Home Construction",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio aspernatur exercitationem cupiditate eum dicta odio, ex fuga reprehenderit facere aliquid."
    },

    {
        imageUrl: "https://images.pexels.com/photos/3551216/pexels-photo-3551216.jpeg?auto=compress&cs=tinysrgb&w=600",
        title: "Home Renovations",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio aspernatur exercitationem cupiditate eum dicta odio, ex fuga reprehenderit facere aliquid."
    },

    {
        imageUrl: "https://images.pexels.com/photos/323772/pexels-photo-323772.jpeg?auto=compress&cs=tinysrgb&w=600",
        title: "Complex Construction",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio aspernatur exercitationem cupiditate eum dicta odio, ex fuga reprehenderit facere aliquid."
    },
]
  return (
    <>
      {/* Services */}
      <div className="bg-white w-screen h-auto md:px-32 px-10 py-24">
            <h1 className="text-center md:text-5xl text-2xl text-gray-900 pt-10">What you will get</h1>
            <div className="text-center text-base py-2">Select the best of our services from the below list.</div>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 py-10">

                {
                    imageData.map((data, index) =>  <Link className="rounded shadow bg-white overflow-hidden" key={index}>
                    <img src={data.imageUrl} alt="construction image" />
                    <div className="text-center text-sm text-gray-700 p-2">
                        <h1 className="text-lg md:text-2xl text-semibold py-3">{data.title}</h1>
                        <p>{data.desc}</p>
                    </div>
                </Link>
                    
                    )
                }
                
            </div>
      </div>
      {/* Services end */}
    </>
  )
}

export default Services