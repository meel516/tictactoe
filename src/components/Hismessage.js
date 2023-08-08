import "./ChatScreen.css";
const Hismessage=({message,time})=>{
    return   <div className="hismessage ms-0">
    <div className="hi-frank-do-you-watch-nba-matc-wrapper">
      <div className="hi-frank-do">
        {message}
      </div>
    </div>
    <div className="wrapper">
      <div className="div">{time}</div>
    </div>
  </div>
}
export default Hismessage