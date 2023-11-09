import { Link } from "react-router-dom"

const Services = () => {
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