import React from "react"
import { Navigate, Outlet } from "react-router-dom"
import { userData } from "../helper";

const ProtectedRoute = () => {
    let {token} = userData();
    let auth = {'token': token};
    console.log(token);
  return (
        <React.Fragment>
            {auth.token? <Outlet /> : <Navigate to="/client-area" />}
        </React.Fragment>
  )
}

export default ProtectedRoute