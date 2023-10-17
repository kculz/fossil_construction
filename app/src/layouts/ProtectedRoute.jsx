import React from "react"
import { Navigate, Outlet, useLocation } from "react-router-dom"
import { userData } from "../helper";

const ProtectedRoute = () => {
    const location = useLocation();
    let {token} = userData();
    let auth = {'token': token};
  return (
        <React.Fragment>
            {auth.token? <Outlet /> : <Navigate to="/user/login" state={location.state} />}
        </React.Fragment>
  )
}

export default ProtectedRoute

