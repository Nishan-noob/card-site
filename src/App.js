import React from 'react';
import './App.css';
import SocialCard from './SocialCard';
import{useState, useEffect}from 'react';

function App() {

  const [users,setUsers]=useState([]);
  useEffect(()=>{
    (async()=>{
      let userData;
      try{
        const response=await fetch('https://swapi.dev/api/people');
        userData = (await response.json()).results;
        userData=userData.slice(0,9);
      }catch(error){
        console.log(error);
        userData=[];
      }
      setUsers(userData);
    })();

  },[]);

  return (
    <div className="App" style={{padding:'10px'}}>
      <h1>SOCIAL CARDS</h1>
      {/* <div style={{display:'flex', justifyContent:'space-around'}}> */}

      <div className='cards-box'>
      {users.map((user,index)=>(
        <SocialCard userData={user} key={index}/>
        ))}</div>
    </div>
        // </div>
  );
}

export default App;
