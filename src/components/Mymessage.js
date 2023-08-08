import "./ChatScreen.css";
function formatTimestampFromMilliseconds(timestamp) {
  const date = new Date(timestamp);
  const hours = date.getHours();
  const minutes = date.getMinutes();

  const hoursStr = hours < 10 ? `0${hours}` : `${hours}`;
  const minutesStr = minutes < 10 ? `0${minutes}` : `${minutes}`;

  return `${hoursStr}:${minutesStr}`;
}
console.log(formatTimestampFromMilliseconds(14666295),'sjkhgkugkdda')
const Mymessage=({message,time,_id})=>{
    return  <div key={_id} className="mymessage">
    <div className="of-course-the-match-was-amazin-wrapper">
      <div className="hi-frank-do">{message}</div>
    </div>
    <div className="wrapper">
      <div className="div">{formatTimestampFromMilliseconds(parseInt(time))}</div>
    </div>
  </div>
}
export default Mymessage