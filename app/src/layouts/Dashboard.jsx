import { Link } from "react-router-dom"

const Dashboard = () => {
  return (
    <>
      <div className="pt-24">
        <div className="grid grid-cols-3 h-screen">
          <aside className="flex flex-col items-center justify-center bg-green-600 shadow gap-10 font-semibold px-2 h-full">
            <Link>Dashboard</Link>
            <Link>My account</Link>
            <Link>Make request</Link>
            <Link>Chat to Support</Link>
            <Link>Logout</Link>
          </aside>

          <div className="col-span-2">
            <h1 className="text-center py-10 text-2xl md:text-4xl font-semibold">Dashboard</h1>
            <div className="flex justify-center items-center py-10 gap-5 md:px-10 px-10">
              <div className="shadow rounded p-5 bg-white">
                Make request
              </div>

              <div className="shadow rounded p-5 bg-white">
                Chat to support
              </div>

              <div className="shadow rounded p-5 bg-white">
                My Account
              </div>

             
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Dashboard