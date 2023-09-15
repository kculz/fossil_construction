import { Link } from "react-router-dom"

const Dashboard = () => {
  return (
    <>
      <div className="py-24">
        <div className="grid grid-cols-3">
          <aside className="flex flex-col gap-5 py-2 px-2 bg-green-600 h-full">
            <Link>Dashboard</Link>
            <Link>My account</Link>
            <Link>Make request</Link>
            <Link>Chat to Support</Link>
            <Link>Logout</Link>
          </aside>

          <div className="col-span-2">
            <h1 className="text-center">Dashboard</h1>
          </div>
        </div>
      </div>
    </>
  )
}

export default Dashboard