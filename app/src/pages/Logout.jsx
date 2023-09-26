import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Logout = () => {
  const navigate = useNavigate();
  useEffect(() => {
    localStorage.setItem("user", "");
    toast.success("Logged out!");
    navigate("/user/login");
  },[navigate])
  return null
};

export default Logout;
