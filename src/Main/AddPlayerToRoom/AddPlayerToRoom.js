import React from "react";
import ListPlayerToAdd from "./ListPlayerToAdd";
import Table1 from "./penaltyTable/Table1";
import "./AddPlayerToRoom.css"

const AddPlayerToRoom = (props) =>{

    const {userName, data, addedPlayer, setPlayerList} = props;

    return(
        <div className="AddPlayer">
            <div style={{padding:'20px'}}>
            <ListPlayerToAdd playerList={data} addedPlayer={addedPlayer} setAddedPlayer={setPlayerList}/>
            </div>

            <div style={{padding:'20px'}}>
            <Table1 userName={userName} addedPlayer={addedPlayer} setAddedPlayer={setPlayerList}/>
            </div>     

        </div>
    )
}
export default AddPlayerToRoom;