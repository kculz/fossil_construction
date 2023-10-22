import { useEffect, useState } from "react";
import { userData } from "../../../helper";
import { Axios } from "../../../../config";
import { Link } from "react-router-dom";

const UserProjects = () => {
  const {token} = userData();

  const [projects, setProjects] = useState([]);

  useEffect(()=> {
     
      const fetchData = async() => {
          try {
              const res = await Axios.get("/projects/all", {
                  headers: {
                      "Authorization": `Bearer ${token}`
                  }
              });
              console.log(res);
              setProjects(res.data.data);

          } catch (error) {
              console.log(error);
          }
      }

      fetchData();

  }, [token])

  const [status, setStatus] = useState("waiting for approval");

  const filteredProjects = status === "waiting for approval"
        ? projects
        : projects.filter(item => item.status === status)
  return (
    <div className=" h-screen w-screen py-32">
              {/* Add status filter */}
      <div className="mb-4 px-10">
        <label htmlFor="filter" className="text-gray-500 pr-5">Filter by: </label>
        <select
          value={status}
          onChange={e => setStatus(e.target.value)}
          className="border border-gray-300 rounded px-3 py-2 outline-none"
        >
          <option value="waiting for approval">Waiting for approval</option>
          <option value="started">Started</option>
          <option value="half way done">Half way done</option>
          <option value="complete">Complete</option>
        </select>
      </div>

    <table className="w-full text-sm text-left text-gray-500 top-36">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50  ">
            <tr>
                <th scope="col" className="px-6 py-3">
                    Project Owner
                </th>
                <th scope="col" className="px-6 py-3">
                    Project Name
                </th>
                <th scope="col" className="px-6 py-3">
                    Location
                </th>
                <th scope="col" className="px-6 py-3">
                    Expected Start Date
                </th>
                <th></th>
               

            </tr>
        </thead>
        <tbody>
            
                {
                    filteredProjects.map((item, key) => {
                        return(
                            <tr key={key} className="bg-white border-b">
                                
                                 <td  scope="col" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                                    {item.User.username}
                                 </td>

                                 <td  scope="col" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                                    {item.title}
                                 </td>

                                 <td  scope="col" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                                    {item.location}
                                 </td>
                                 <td  scope="col" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                                  {item.expectedStartDate}
                                 </td>
                                 
                                 <td scope="col" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"><Link to={`/projects/${item.id}`} className="bg-green-600 rounded px-4 py-2 text-white">Edit Project</Link></td>
                                 
                            </tr>
                           
                        )
                    })
                }
               
                
           
        </tbody>
    </table>
</div>
  )
}

export default UserProjects