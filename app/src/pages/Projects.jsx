import { useEffect, useState } from "react"
import { Axios } from "../../config"
import { userData } from "../helper";
import { Link } from "react-router-dom";

const Projects = () => {

    const {token} = userData();

    const [projects, setProjects] = useState([]);

    useEffect(()=> {
       
        const fetchData = async() => {
            try {
                const res = await Axios.get("/projects", {
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
  return (
    
<div className=" h-screen w-screen py-32">
    <table className="w-full text-sm text-left text-gray-500 top-36">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50  ">
            <tr>
                <th scope="col" className="px-6 py-3">
                    Project name
                </th>
                <th scope="col" className="px-6 py-3">
                    Start Date
                </th>
                <th scope="col" className="px-6 py-3">
                    End Date
                </th>
                <th scope="col" className="px-6 py-3">
                    Price
                </th>
                <th scope="col" className="px-6 py-3">
                    Status
                </th>
                <th scope="col" className="px-6 py-3">
                    
                </th>
               

            </tr>
        </thead>
        <tbody>
            
                {
                    projects.map((item, key) => {
                        return(
                            <tr key={key} className="bg-white border-b">
                                 <td  scope="col" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                                    {item.title}
                                 </td>

                                 <td  scope="col" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                                    {item.expectedStartDate}
                                 </td>

                                 <td  scope="col" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                                    {item.expectedCompletion}
                                 </td>
                                 <td  scope="col" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                                    { item.price === null ? (
                                        <span className="text-yellow-600">Price not set!</span>
                                    ) : (
                                        item.price
                                    )}
                                 </td>
                                 <td  scope="col" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">

                                    {item.status === 'complete' ? (
                                        <span className="text-green-500 bg-yellow-200/70 py-1 px-1 rounded">Completed</span>
                                    ) : (
                                        item.status
                                    )}
                                 </td>
                                 <td scope="col" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                 {item.isPaid ? (
                                        <span className="text-green-500 bg-yellow-200/70 py-1 px-1 rounded">Paid</span>
                                    ) : (
                                        <Link className="bg-green-600 px-4 py-2 rounded text-white cursor-not-allowed">Pay</Link>
                                    )}
                                 </td>
                            </tr>
                           
                        )
                    })
                }
               
                
           
        </tbody>
    </table>
</div>

  )
}

export default Projects