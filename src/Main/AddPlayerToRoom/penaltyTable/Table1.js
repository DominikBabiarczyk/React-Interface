import React, { useState } from "react";
import './Table1.css';

const Table1 = (props) => {

  const {userName, addedPlayer, setAddedPlayer} = props;

  const [approvedPlayer, setapprovedPlayer] = useState([]);

  const handleSubmit = (id, name) =>{
    const approvedPlayerUpDate = [...approvedPlayer, name];
    setapprovedPlayer(approvedPlayerUpDate);

  }

  const handleDelete = (id, name) => {
    const withoutPlayer = addedPlayer.filter(item => item.name !== name);
    setAddedPlayer(withoutPlayer);
  }

  const sendInvitesToDatabase = (from, ToName) => {

      const userToAdd = {
        fromUser: from,
        toUser: ToName,
        answer: false,
      };
      
      fetch('http://localhost:8080/api/invitations/add', {
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

  const handleSumbitAllPlayers = () =>{
      approvedPlayer.map(ToName => sendInvitesToDatabase(userName, ToName));
  }

  return (
    <table className="table">
      <thead>
        <tr>
          <th className="FirstRow">Lp</th>
          <th className="FirstRow">Nazwa Gracza</th>
          <th className="FirstRow">Zatwierdz</th>
        </tr>
      </thead>
      <tbody>
        {addedPlayer.map((item) => (
          <tr key={item.id}>
            <td className="RestTab">{item.id} </td>
            <td className="RestTab">{item.name}</td>
            <td className="RestTab">
              <button onClick={() => {handleSubmit(item.id, item.name)}} style={{background: approvedPlayer.includes(item.name) === false ? null : "green"}}>Zatwierdź</button>
              <button onClick={() => {handleDelete(item.id, item.name)}} >Usuń</button>
            </td>
          </tr>
        ))}
        <tr className="submitButton">
          <th>
            <button onClick={handleSumbitAllPlayers}>Zaproś</button>
          </th>
        </tr>
      </tbody>
    </table>
  );
};

export default Table1;