import { useState } from "react";

const ListPlayerToAdd = (props) =>{

    const {playerList, addedPlayer, setAddedPlayer} = props;
    const [SearchName, SetsearchName] = useState("");

    const handleSearch = (e) =>{
        SetsearchName(e.target.value);
    }

    const PlayersToDropList = playerList.map(item => item.name);

    const handleButtonSubmitPlayer = () => {
        if(SearchName !== "" && !addedPlayer.some(item => item.name === SearchName)){
            const tabLength = addedPlayer.length+1;
            const playerListCopy = [...addedPlayer, {id: tabLength, name:SearchName}];  
            setAddedPlayer(playerListCopy);
        }
    }


    return(
        <div>
            <label htmlFor="searchLabel">Wyszukaj Gracz </label>

            <input
            id="searchLabel"
            type="text"
            list="ListPlayer"
            value={SearchName}
            onChange={handleSearch}
            ></input>

            <datalist id="ListPlayer">
                {playerList.map(item => item.name)}
                
                {PlayersToDropList
                .filter(PlayersToDropList => PlayersToDropList.toLowerCase().includes(SearchName.toLowerCase()))
                .map((PlayersToDropList) => (
                    <option value={PlayersToDropList}/>
                ))}
            </datalist>

            <div style={{padding:'20px', paddingTop:'70px', display:"flex", alignItems:'center'}}>
                <button onClick={handleButtonSubmitPlayer}>Dodaj Gracza</button>
            </div>

        </div>
    )
}

export default ListPlayerToAdd;