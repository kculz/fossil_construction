import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import { Axios } from "../../../../config";
import { userData } from "../../../helper";
import { toast } from "react-toastify";

const UserProject = () => {
    const {id} = useParams();

    const {token} = userData();

    const [izApproved, setIsApproved] = useState(false);
    const [expectedStartDate, setExpectedStartDate] = useState('');
    const [expectedCompletion, setExpectedCompletion] = useState('');
    const [status, setStatus] = useState('waiting for approval');
    const [price, setPrice] = useState(0);

    const [values, setValues] = useState({
        expectedStartDate: '',
        expectedCompletion: '',
        status: 'waiting for approval',
        price: 0
    })

    const handleApprove = (e) => {
        setIsApproved(e.target.value);
    }

    useEffect(()=> {
        Axios.get(`/projects/get/${id}`, {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        }).then(res => {
            console.log(res)
            setValues(res.data.data);
        }).catch(err => {
            console.log(err)
        })
    },[]);

    const handleSubmit = async(e) => {
        e.preventDefault()

        // console.log(izApproved, price, expectedCompletion, expectedStartDate, status)

      try {
        const res = await Axios.put(`/projects/edit/${id}`, {
            price,
            expectedCompletion,
            expectedStartDate,
            status,
            isApproved: izApproved
        }, {
            headers: {
                "Authorization": `Bearer ${token}`
        }})

        console.log(res);
        toast.info("updated")
      } catch (error) {
        console.log(error);
        toast.error(error)
      }
    }



  return (
    <div className="top-24 py-5 grid grid-cols-3 place-content-center place-items-center">
        <div className="w-full  pl-5 col-span-2 py-24">
            <form className=" grid grid-cols-2 gap-x-8 gap-y-5" onSubmit={handleSubmit}>
                <div className="flex flex-col gap-1">
                    <p className="text-2xl text-gray-900 text-start">Owner id:</p>
                    <p className="text-xl text-gray-700 text-start">{values.id}</p>
                </div>

                <div className="flex flex-col gap-1">
                    <p className="text-2xl text-gray-900 text-start">Project Name:</p>
                    <p className="text-xl text-gray-700 text-start">{values.title}</p>
                </div>


                <div className="flex flex-col gap-1">
                    <p className="text-2xl text-gray-900 text-start">Description | Requirements:</p>
                    <p className="text-xl text-gray-700 text-start">{values.desc}</p>
                </div>

                <div className="flex flex-col gap-1">
                    <p className="text-2xl text-gray-900 text-start">Project Location:</p>
                    <p className="text-xl text-gray-700 text-start">{values.location}</p>
                </div>

                <div className="flex flex-col gap-1 pt-5">
                    <p className="text-2xl text-gray-900 text-start">Project Approval:</p>
                    <div className="space-x-2">
                        <label>Approve:</label>
                        <input
                        type="radio"
                        name="approval"
                        id="approval"
                        value={'true'}
                        checked={izApproved === 'true'}
                        className="accent-blue-500"
                        onChange={handleApprove}
                         />

                        <label>Reject:</label>
                        <input
                        type="radio"
                        name="approval"
                        id="approval"
                        value={'false'}
                        checked={izApproved === 'false'}
                        className="accent-red-500"
                        onChange={handleApprove}
                         />

                    </div>
                </div>

                <div></div>

                { izApproved === 'true' && (
                    <>
                    <div className="flex flex-col gap-1">
                    <p className="text-2xl text-gray-900 text-start">Change project status:</p>
                    <select className="border border-green-500 outline-none rounded px-2 py-2" name="status" id="status" onChange={e => setStatus(e.target.value)}>
                        <option value="waiting for approval" defaultValue></option>
                        <option value="started">Started</option>
                        <option value="almost done">Almost done</option>
                        <option value="completed">Completed</option>
                    </select>
                </div>

                <div className="flex flex-col gap-1">
                    <p className="text-2xl text-gray-900 text-start">Set Project Price:</p>
                    <input className="border border-green-500 outline-none rounded px-2 py-2" type="number" inputMode="numeric" min={0} name="price" id="price" placeholder="$0.00" onChange={e => setPrice( e.target.value)} required/>
                </div>

               

                <div className="flex flex-col gap-1">
                    <p className="text-2xl text-gray-900 text-start">Start Date:</p>
                    <input className="border border-green-500 outline-none rounded px-2 py-2" type="date" name="expectedStartDate" id="expectedStartDate" onChange={e => setExpectedStartDate( e.target.value)} required/>
                </div>

                <div className="flex flex-col gap-1">
                    <p className="text-2xl text-gray-900 text-start">Expected End Date:</p>
                    <input className="border border-green-500 outline-none rounded px-2 py-2" type="date" name="expectedCompletion" id="expectedCompletion" onChange={e => setExpectedCompletion( e.target.value)} required/>
                </div>
                    
                    </>
                    

                )}

                <input type="submit" value="Submit" className="cursor-pointer w-full bg-green-500 py-2 px-1 rounded text-white" />

            </form>
        </div>
        <div>
            <Link to={`/projects/remove/123456abcdwiu${id}`} className=" bg-red-600 py-2 px-4 rounded text-white">Delete</Link>
        </div>
    </div>
  )
}

export default UserProject