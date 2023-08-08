import "./ChatScreen.css";
function formatTimestampFromMilliseconds(timestamp) {
  const date = new Date(timestamp);
  const hours = date.getHours();
  const minutes = date.getMinutes();

  const hoursStr = hours < 10 ? `0${hours}` : `${hours}`;
  const minutesStr = minutes < 10 ? `0${minutes}` : `${minutes}`;

  return `${hoursStr}:${minutesStr}`;
}
const Hismessage=({message,time})=>{
    return   <div className="hismessage ms-0">
    <div className="hi-frank-do-you-watch-nba-matc-wrapper">
      <div className="hi-frank-do">
        {message}
      </div>
    </div>
    <div className="wrapper">
      <div className="div">{formatTimestampFromMilliseconds(parseInt(time))}</div>
    </div>
  </div>
}
export default Hismessage