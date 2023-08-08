import "./ChatScreen.css";
import { useState,useEffect,useCallback} from "react";
import axios from "axios";
import Mymessage from "./Mymessage";
import Hismessage from "./Hismessage";
let hismessagemap=new Map()
const ChatScreen = () => {
  const [messages,setMessages]=useState([])
  const [userName,setuserName]=useState('')
  const [send,setSend]=useState('')
  const [refresh,Setrefresh]=useState(false)
 
  console.log('refreshes')
  useEffect(()=>{
    
 messages.forEach(({_id,username})=>hismessagemap.set(_id,username))

  },[messages])
  useEffect(()=>{async function get(){
    const data= await axios.get('https://tictactoe-zsyj.onrender.com/getMessage')
    setMessages(data.data)

 
  
  

  }
get()
const intervalId=setInterval(()=>{
      get()
},1000)
return ()=>clearInterval(intervalId)},[refresh])
  return (
    <div className="chat-screen">
      {
        !userName &&<div className="login">
          <form className="d-flex" onSubmit={(e)=>{
            e.preventDefault()
          
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
      <div className="hismessage-parent d-block overflow-scroll">
       {(messages.length==0)||messages.map((dta,idx)=>{console.log('map was reached')
        if(userName==dta.username){
          if(!(hismessagemap.has(dta._id))){
          
            let sent= new Audio("https://quicksounds.com/uploads/tracks/285751901_593827859_1629229643.mp3")
sent.play()

          }
          return <Mymessage {...dta}/>
        }
        else{
          if(!(hismessagemap.has(dta._id))){
            let sent= new Audio("https://quicksounds.com/uploads/tracks/1589352698_1112378855_986823738.mp3")
sent.play()

          }
          return <Hismessage {...dta}/>
        }
       })}
      
      </div>
      <div className="type-here-parent">
        <textarea className="type-here" value={send} placeholder="Type here..." onInput={(e)=>setSend(e.target.value)} />
        <button type="button" onClick={async()=>{
 const confirmation = await axios.post('https://tictactoe-zsyj.onrender.com/newMessage',{username:userName,message:send

})
// let sent= new Audio("https://quicksounds.com/uploads/tracks/285751901_593827859_1629229643.mp3")
// sent.play()
Setrefresh(prev=>!prev)
setSend('')

        }} class="btn btn-primary send">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-send" viewBox="0 0 16 16">
  <path d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576 6.636 10.07Zm6.787-8.201L1.591 6.602l4.339 2.76 7.494-7.493Z"></path>
</svg>
              </button>
      
      </div>
      </>}
    </div>
  );
};

export default ChatScreen;
