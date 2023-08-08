import "./Chathome.css";
const Chathome = () => {
  return (
    <div className="chathome">
      <div className="friend">
        <div className="messagepreview">
          <img
            className="messagepreview-child"
            alt=""
            src="/ellipse-12@2x.png"
          />
          <div className="robert-fox-parent">
            <h1 className="robert-fox">Robert Fox</h1>
            <h2 className="hey-lets-play">{`Hey, let’s play basketball `}</h2>
          </div>
        </div>
        <span className="span">15.43</span>
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
    </div>
  );
};

export default Chathome;
