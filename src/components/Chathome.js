import { useEffect, useState } from "react";
import "./Chathome.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const Chathome = (props) => {
  const userName=props.userName

  const [chats,setChats]=useState([])
  const navigate=useNavigate()
  useEffect(()=>{
    async function get(){
     let list = await axios.get('https://tictactoe-zsyj.onrender.com/friends/friendslist',{params:{
      username:userName
      
     }})
  setChats(list.data[0].friends)

    }
    if(userName!=""){get()}
    
  },[userName])
  return (
    <div className="chathome">
      {
        
          !userName &&<div className="login">
            <form className="d-flex" onSubmit={(e)=>{
              e.preventDefault()
            
              props.setuser(e.target.username.value)
           
              }}><input type="text" className="form-control" placeholder="enter your name" name="username"></input>
             
              
          <button type="submit" className="btn btn-primary align-self-center">login</button></form></div>
        
      }{userName&&<>
      <div className="position-absolute">
      { chats.map((friend)=><> <div className="friend mb-2" onClick={()=>navigate(`/home/${friend}`)}>
        <div className="messagepreview">
          <img
            className="messagepreview-child"
            alt=""
            src="/ellipse-12@2x.png"
          />
          <div className="robert-fox-parent">
            <h1 className="robert-fox">{friend}</h1>
            <h2 className="hey-lets-play">{`Hey, let’s play basketball `}</h2>
          </div>
        </div>
        <span className="span">15.43</span>
      </div></>)
     
      }
      </div>
      <div className="searchchathome">
        <div className="searchchathome-child" />
        <div className="searchchathome-item" />
        <button className="iconlylight-outlinesearch">
          <img className="search-icon" alt="" src="/search.svg" />
        </button>
        <input className="search-chat" type="text" placeholder="Search Chat" />
        <img
          className="iconlylight-outlinescan"
          alt=""
          src="/iconlylightoutlinescan.svg"
        />
      </div>
      <div className="footerchathome">
        <div className="footerchathome-child" />
        <div className="homeindicator">
          <div className="home-indicator1" />
        </div>
        <button className="iconlylight-outlinehome">
          <img className="search-icon" alt="" src="/home.svg" />
        </button>
        <button className="iconlylight-outlinesetting">
          <img className="search-icon" alt="" src="/setting.svg" />
        </button>
        <button className="iconlylight-outlineadd-user">
          <img className="search-icon" alt="" src="/adduser.svg" />
        </button>
      </div>
      </>}
    </div>
  );
};

export default Chathome;
