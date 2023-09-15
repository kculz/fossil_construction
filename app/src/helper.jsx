import React from "react";
import { Outlet, Navigate} from "react-router-dom";

export const userStore = (data) => {
    localStorage.setItem("user", JSON.stringify({
        username: data.user.username,
        jwt: data.jwt
    }))
    console.log(data)
};

export const userData = () => {
    const userStringfied = localStorage.getItem("user") || '""';
    return JSON.parse(userStringfied || {});
};

export const ProtectedRoute = () => {
    let {jwt} = userData();
    let auth = {'token': jwt};
    return(
        <React.Fragment>
            {auth.token? <Outlet /> : <Navigate to="/login" />}
        </React.Fragment>
    )
};