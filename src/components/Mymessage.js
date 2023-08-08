import "./ChatScreen.css";
const Mymessage=({message,time})=>{
    console.log(message)
    return  <div className="mymessage">
    <div className="of-course-the-match-was-amazin-wrapper">
      <div className="hi-frank-do">{message}</div>
    </div>
    <div className="wrapper">
      <div className="div">{time}</div>
    </div>
  </div>
}
export default Mymessage