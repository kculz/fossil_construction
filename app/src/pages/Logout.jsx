import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Logout = () => {
  const navigate = useNavigate();
  useEffect(() => {
    localStorage.setItem("user", "");
    navigate("/user/login");
    window.location.reload();
    toast.success("Logged out!");
  },[])
  return null
};

export default Logout;
