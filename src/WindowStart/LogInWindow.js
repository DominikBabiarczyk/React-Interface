import React, {useState} from 'react';
import "./LogInWindow.css"
import { BrowserRouter as Router, Route, Navigate, Routes} from 'react-router-dom';


const LogInWindow = (props) => {
    const{users, handleLoginSuccessful} = props;

    const [nameUser, setNameUser] = useState('');
    const [passwordUser, setPasswordUser] = useState('');

    const hadleInputNameChange = (e) => {
        setNameUser(e.target.value);
    }

    const handleInputPasswordChange = (e) => {
        setPasswordUser(e.target.value);
    }

    const [loggedIn, setLoggedIn] = useState(false);

    const LogInUser = () => {
        const isNameFound = users.some(item => item.name === nameUser);
        if(isNameFound){
            const UserIndex = users.findIndex(item => item.name === nameUser);
            //const passwordToCheck = users[UserIndex].password;
            if (users[UserIndex].password === passwordUser){
                const nameLoggedUser = users[UserIndex].name;
                handleLoginSuccessful(nameLoggedUser);
            }
        }
    }

    return(

        <div className='main'>
            <div className='firstRow'>
                <p>Nazwa:</p>
                <input type='text' value={nameUser} onChange={hadleInputNameChange} placeholder='Wpisz...'/>
            </div>

            <div className='secondRow'>
                <p>Hasło</p>
                <input type="text" value={passwordUser} onChange={handleInputPasswordChange} placeholder='Wpisz...'/>
            </div>  
            <div className='PlaceButtonLogIn'>
                <button onClick={LogInUser}>Log In</button>
            </div>    

        </div>

    )
}

export default LogInWindow