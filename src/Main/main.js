import { Fragment, useState } from "react";
import "./main.css";
import AddPlayerToRoom from "./AddPlayerToRoom/AddPlayerToRoom";
import Invitations from "./invite/invite";

const Main = (props) => {

    const {users, userName} = props;

    const [SelectedOptionMenu, setSelectedOptionMenu] = useState("");

    const handleMenu = (option) =>{
        setSelectedOptionMenu(option);
    }


    const [data, setPlayerList] = useState(users);

    const [addedPlayer, setAddedPlayer] = useState([])

    return(
        
        <div>
            <div className="manuBar">
                <p>{userName}</p>
            </div>
            <div className="menuBar">
                <button onClick={() => handleMenu("newRom")}>Stwórz pokój</button>
                <button onClick={() => handleMenu("invitations")}>Zaproszenia</button>
            </div>
            
            {SelectedOptionMenu==="newRom" && (<AddPlayerToRoom userName = {userName} data={data} addedPlayer = {addedPlayer} setPlayerList = {setAddedPlayer}/>)}
            {SelectedOptionMenu==="invitations" && (<Invitations></Invitations>)}
        </div>

    )

}

export default Main