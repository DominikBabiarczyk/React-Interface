import React, { useState } from "react";
import LogInWindow from "./LogInWindow"
import SignInWindow from "./SignInWindow"
import "./StartWindow.css"

const StartWidnow = (props) =>{

    const {users, handleLoginSuccessful} = props;

    const [loginOption, setLoginOption] = useState("LogIn")
    
    const ToggleLoginWindow = (window) =>{
        setLoginOption(window);
    } 

    return(
        <div className="LogInOption">

            <div className="Buttons">
                <button onClick={() => ToggleLoginWindow("LogIn")}>Log In</button>
                <button onClick={() => ToggleLoginWindow("SignIn")}>Sign In</button>
            </div>

            <div>
                {loginOption === "LogIn" && (<LogInWindow users={users} handleLoginSuccessful={handleLoginSuccessful}/>)}
                {loginOption === "SignIn" && (<SignInWindow users={users}/>)}
            </div>
        </div>
        
    )
}

export default StartWidnow