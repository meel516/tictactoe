import "./ChatScreen.css";
const ChatScreen = () => {
  return (
    <div className="chat-screen">
      <div className="profile-section">
        <div className="profile">
          <img className="profile-child" alt="" src="/ellipse-12@2x.png" />
          <div className="robert-fox-parent">
            <h1 className="robert-fox">Robert Fox</h1>
            <h1 className="online" id="status">
              Online
            </h1>
          </div>
        </div>
      </div>
      <div className="hismessage-parent">
        <div className="hismessage">
          <div className="hi-frank-do-you-watch-nba-matc-wrapper">
            <div className="hi-frank-do">
              Hi Frank do you watch NBA match last night?
            </div>
          </div>
          <div className="wrapper">
            <div className="div">14.31</div>
          </div>
        </div>
        <div className="mymessage">
          <div className="of-course-the-match-was-amazin-wrapper">
            <div className="hi-frank-do">{`Of course the match was amazing `}</div>
          </div>
          <div className="container">
            <div className="div">14.40</div>
          </div>
        </div>
      </div>
      <div className="type-here-parent">
        <textarea className="type-here" placeholder="Type here..." />
        <button className="send">
          <img className="more-square-icon" alt="" src="/moresquare.svg" />
        </button>
      </div>
    </div>
  );
};

export default ChatScreen;
