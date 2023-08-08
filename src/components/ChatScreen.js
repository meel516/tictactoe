import "./ChatScreen.css";
import { useState,useEffect } from "react";
import axios from "axios";
import Mymessage from "./Mymessage";
import Hismessage from "./Hismessage";
const ChatScreen = () => {
  const [messages,setMessages]=useState([])
  const [userName,setuserName]=useState('')
  const [send,setSend]=useState('')
  const [refresh,Setrefresh]=useState(false)
  useEffect(()=>{async function get(){
    const data= await axios.get('http://localhost:5000/getMessage')
    setMessages(data.data)
    console.log(data)

  }
get()},[refresh])
  return (
    <div className="chat-screen">
      {
        !userName &&<div className="login">
          <form className="d-flex" onSubmit={(e)=>{
            e.preventDefault()
            console.log(e.target.username.value)
            setuserName(e.target.username.value)
            }}><input type="text" className="form-control" placeholder="enter your name" name="username"></input>
        <button type="submit" className="btn btn-primary align-self-center">login</button></form></div>
      }
      {
        
      userName&&
        <>
      <div className="profile-section d-flex justify-content-center">
        <div className="profile">
          <img className="profile-child" alt="" src="/ellipse-12@2x.png" />
          <div className="robert-fox-parent">
            <h1 className="robert-fox">{userName}</h1>
            <h1 className="online" id="status">
              Online
            </h1>
          </div>
        </div>
      </div>
      <div className="hismessage-parent d-block">
       {messages.map((dta,idx)=>{
        if(userName==dta.username){
          return <Mymessage {...dta}/>
        }
        else{
          return <Hismessage {...dta}/>
        }
       })}
      
      </div>
      <div className="type-here-parent">
        <textarea className="type-here" placeholder="Type here..." onBlur={(e)=>setSend(e.target.value)}/>
        <button className="send" onClick={async()=>{
 const confirmation = await axios.post('http://localhost:5000/newMessage',{username:userName,message:send

})
Setrefresh(prev=>!prev)
        }}>
          <img className="more-square-icon" alt="" src="/moresquare.svg" />
        </button>
      </div>
      </>}
    </div>
  );
};

export default ChatScreen;
