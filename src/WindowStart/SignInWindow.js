import React, {useState} from "react";
import "./SignInWindow.css"

const SignInWindow = (props) =>{
    const {users} = props;
    const [newWindow, SetNewWindow] = useState(false);

    //const [isNameFound, SetIsNameFound] = useState(false);
    const [announcement, setAnnouncement] = useState("initial");

    const [nameUser, setNameUser] = useState('');
    const [passwordUser, setPasswordUser] = useState('');

    const hadleInputNameChange = (e) => {
        setNameUser(e.target.value);
    }

    const handleInputPasswordChange = (e) => {
        setPasswordUser(e.target.value);
    }


    const CreateNewUser = () =>{
        const isNameFound = users.some(item => item.name === nameUser);
        
        if(isNameFound){
            const foundIndex = users.findIndex(item => item.name === nameUser);
            //if(passwordUser === users[foundIndex].password){}
            setAnnouncement("Ta nazwa już istnieje");
        }else{
            if(passwordUser !== "" && nameUser !== ""){
                sendData();
                setAnnouncement("Dodano użytkownika")
            }else{
                setAnnouncement("brak nazwy lub hasła")
            }
        }
        
    }

    const sendData = () => {

        const userToAdd = {
            name: nameUser,
            password: passwordUser,
        };
        
        fetch('http://localhost:8080/api/users/add', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userToAdd)
        })
        .then(response => response.json())
        .then(data => {
            console.log('Added user:', data);
        })
        .catch(error => console.error('Error:', error));

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
            
            <div className="PlaceButtonSignIn">
                <button onClick={CreateNewUser}>Zapisz użytkownika</button>    
            </div>    

            <div>
                <p>{announcement}</p>
            </div>
        </div>
    )
    
}

export default SignInWindow