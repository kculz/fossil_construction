import { useEffect, useState, useRef } from "react";
import { userData } from "../../../helper";
import { Axios } from "../../../../config";
import { Link } from "react-router-dom";
import { useReactToPrint } from 'react-to-print';

const UserProjects = () => {
  const {token} = userData();

  const printRef = useRef();

  const handlePrint = useReactToPrint({
    content: () => printRef.current,
  })
  
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

  const [status, setStatus] = useState("all");

  const filteredProjects = status === "all"
        ? projects
        : projects.filter(item => item.status === status)
  return (
    <div className=" h-full w-full py-32">
              {/* Add status filter */}
      <div className="mb-4 px-10 flex gap-5">
        <div>
            <label htmlFor="filter" className="text-gray-500 pr-5">Filter by: </label>
            <select
            value={status}
            onChange={e => setStatus(e.target.value)}
            className="border border-gray-300 rounded px-3 py-2 outline-none"
            >
            <option value="all" defaultValue>All</option>
            <option value="waiting for approval">Waiting for approval</option>
            <option value="started">Started</option>
            <option value="half way done">Half way done</option>
            <option value="complete">Complete</option>
            </select>
        </div>
        <button onClick={handlePrint} className="bg-green-600 rounded text-white px-4 py-2">Print Page</button>
      </div>

    <table ref={printRef} className="w-full text-sm text-left text-gray-500 top-36">
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
                {/* <th scope="col" className="px-6 py-3">
                    Details
                </th> */}
                <th scope="col" className="px-6 py-3">
                    Status
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
                                 {/* <td  scope="col" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                                    {item.desc}
                                 </td> */}
                                 <td  scope="col" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                                  {item.status}
                                 </td>
                                 
                                 <td scope="col" className="px-6 py-4 text-4xl font-medium text-gray-900 whitespace-nowrap"><Link to={`/projects/${item.id}`} className="rounded px-4 py-2 text-gray-900">...</Link></td>
                                 
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