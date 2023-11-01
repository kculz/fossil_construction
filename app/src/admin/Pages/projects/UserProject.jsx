// import { useEffect, useState } from "react";
// import { useParams } from "react-router-dom"
// import { Axios } from "../../../../config";
// import { userData } from "../../../helper";
// import { toast } from "react-toastify";

// const UserProject = () => {

//   const {token} = userData();

//     const {id} = useParams();

 




//   return (
//     <div className="relative w-screen md:px-32 px-10 py-32">


       
//         <form className="md:w-1/2 w-full" onSubmit={handleSubmit}>

//         <div className="grid md:grid-cols-2 md:gap-6">
//                 <div className="flex flex-col">
//                     <p className="text-xl font-bold text-gray-900">Project Title</p>
//                     <p className="text-[16px] py-2 text-gray-900">{project.title}</p>
//                 </div>
               

//                 <div className="flex flex-col">
//                     <p className="text-xl font-bold text-gray-900">Project Location</p>
//                     <p className="text-[16px] py-2 text-gray-900">{project.location}</p>
//                 </div>

//                 <div className="flex flex-col">
//                     <p className="text-xl font-bold text-gray-900">Project Description</p>
//                     <p className="text-[16px] py-2 text-gray-900">{project.desc}</p>
//                 </div>
//                 <div className="flex flex-col">
//                     <p className="text-xl font-bold text-gray-900">Approve Project</p>
//                     <div className="flex gap-2">
//                     <label htmlFor="approved">Approve</label>
//                     <input type="radio" name="approval" id="approval" value={true} checked={project.isApproved === true} onChange={handleApproval} className="accent-green-600"/>
//                     <label htmlFor="approved">Reject</label>
//                     <input type="radio" name="approval" id="approval" value={false} checked={project.isApproved === false} onChange={handleApproval} className="accent-red-600"/>
//                     </div>
//                 </div>
//             </div>

        

//         <div className="grid md:grid-cols-2 md:gap-6">
//             <div className="relative z-0 w-full mb-6 group">

//                 <label htmlFor="floating_email" className="text-xl font-bold text-gray-900">Set Project Status</label>

//                 <select name="status" value={project.status} onChange={handleChange} id="" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none   dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer">
//                     <option value="started">Started</option>
//                     <option value="almost done">Almost Done</option>
//                     <option value="complete">Complete</option>
//                 </select>

//                 </div>
//                 <div className="relative z-0 w-full mb-6 group">
//                 <label htmlFor="floating_password" className="text-xl font-bold text-gray-900">Set Project Price</label>
//                 <input type="text" value={project.price} onChange={handleChange} name="floating_password" id="floating_password" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none   dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer" placeholder="" required />
//             </div>

//         </div>

//         <div className="grid md:grid-cols-2 md:gap-6">
//             <div className="relative z-0 w-full mb-6 group">
//                 <label htmlFor="floating_first_name" className="text-xl font-bold text-gray-900">Set Start Date</label>
//                 <input type="date" value={project.expectedStartDate} onChange={handleChange} name="floating_first_name" id="floating_first_name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none   dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer" placeholder=" " required />
//             </div>
//             <div className="relative z-0 w-full mb-6 group">
//                 <label htmlFor="floating_last_name" className="text-xl font-bold text-gray-900">Set Expected End Date</label>
//                 <input type="date" value={project.expectedCompletion} onChange={handleChange} name="floating_last_name" id="floating_last_name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none   dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer" placeholder=" " required />
//             </div>
//         </div>
        
//         <button type="submit" className="text-white bg-green-600 hover:bg-green-600 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-600 dark:focus:ring-green-600">Set Project</button>
//         </form>


//     </div>
    
//   )
// }

// export default UserProject