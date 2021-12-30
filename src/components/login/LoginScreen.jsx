import React from 'react'
import { useNavigate } from 'react-router-dom';
export const LoginScreen = () => {
    const navigation = useNavigate();

    const handleLogin = ()=>{
        navigation("/", {
            replace: true
        });
    }
    return (
        <div className = "container m-5">
            <h1>Login Screen</h1>
            <hr />
            <button className="btn btn-primary" onClick = {()=> handleLogin()}>Login</button>
        </div>
    )
}
