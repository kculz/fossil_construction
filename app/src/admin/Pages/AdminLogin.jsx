import { useState } from "react"
import { toast } from "react-toastify";
import { Axios } from "../../../config";
import { useNavigate } from "react-router-dom";
import { userStore } from "../../helper";

const AdminLogin = () => {

    const [values, setValues] = useState({
        username: '',
        password: ''
    });

    const navigate = useNavigate();

    const handleLogin = async(e) => {
        e.preventDefault();

        try {
            const res = await Axios.post('/users/login', values);

            let {msg, code} = res.data;

            toast.success(`Admin ${msg}, ${code}`);
            navigate('/projects');
            userStore(res.data);
            window.location.reload();

        } catch (error) {
            let {msg, code} = error.response.data;
            console.log(msg);
            toast.warn(`${msg}, code: ${code}`);
        }
    }
  return (
    <div className="w-screen h-screen flex items-center justify-center px-10 md:px-32">

        <form action="" className="md:w-1/2 w-full flex flex-col gap-3" onSubmit={handleLogin}>
            <label htmlFor="Username">Username:</label>
            <input type="text" name="username" id="username" className="py-2 px-4 border border-green-600 rounded outline-none" onChange={(e) => setValues({...values, username: e.target.value })} />

            <label htmlFor="password">Password:</label>
            <input type="password" name="password" id="password" className="py-2 px-4 border border-green-600 rounded outline-none"  onChange={(e) => setValues({...values, password: e.target.value })}/>

            <input type="submit" value="Login" className="cursor-pointer bg-green-600 px-4 py-2" />
        </form>
    </div>
  )
}

export default AdminLogin