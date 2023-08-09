import { useState } from "react";
import {
  Button,
  TextField,
  InputAdornment,
  Icon,
  IconButton,
} from "@mui/material";
import "./LoginScreen.css";
const LoginScreen = () => {
  const [showPassword, setShowPassword] = useState(false);
  const handleShowPasswordClick = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="login-screen">
      <img
        className="dayflow-sitting-icon"
        alt=""
        src="/dayflow-sitting@1x.png"
      />
      <h1 className="hello-welcome-back">Hello, Welcome Back</h1>
      <h2 className="happy-to-see">
        Happy to see you again, to use your account please login first.
      </h2>
      <div className="statusbar-wrapper">
        <div className="statusbar">
          <img className="notch-icon1" alt="" src="/notch1.svg" />
          <div className="left-side1">
            <div className="statusbar-time1">
              <div className="time1">9:41</div>
            </div>
          </div>
          <img className="right-side-icon1" alt="" src="/right-side1.svg" />
        </div>
      </div>
      <div className="homeindicator">
        <div className="home-indicator1" />
      </div>
      <button className="backbutton">
        <div className="backbutton-child" />
        <img
          className="iconlylight-outlinearrow-l"
          alt=""
          src="/iconlylightoutlinearrowleft.svg"
        />
      </button>
      <div className="input-div">
        <button className="forgot-password">Forgot Password</button>
        <Button className="login-button" variant="contained" color="secondary">
          Login
        </Button>
        <TextField
          className="email-adress"
          fullWidth
          color="secondary"
          variant="outlined"
          type="email"
          label="Email Address"
          size="medium"
          margin="normal"
          required
          error
        />
        <TextField
          className="password"
          fullWidth
          color="secondary"
          variant="outlined"
          type={showPassword ? "text" : "text"}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  onClick={handleShowPasswordClick}
                  aria-label="toggle password visibility"
                >
                  <Icon>{showPassword ? "visibility_off" : "visibility"}</Icon>
                </IconButton>
              </InputAdornment>
            ),
          }}
          label="Password"
          placeholder="Placeholder"
          size="medium"
          margin="normal"
          required
          error
        />
      </div>
      <button className="xmlid-17-">
        <img className="xmlid-22-icon" alt="" src="/xmlid-22.svg" />
        <img className="xmlid-18-icon" alt="" src="/xmlid-18.svg" />
      </button>
      <button className="vector-parent">
        <img className="vector-icon" alt="" src="/vector.svg" />
        <img className="vector-icon1" alt="" src="/vector1.svg" />
        <img className="vector-icon2" alt="" src="/vector2.svg" />
        <img className="vector-icon3" alt="" src="/vector3.svg" />
      </button>
      <button className="vector-wrapper">
        <img className="vector-icon4" alt="" src="/vector4.svg" />
      </button>
      <div className="or-login-with-parent">
        <div className="or-login-with">Or Login with</div>
        <div className="frame-child" />
        <div className="frame-item" />
      </div>
    </div>
  );
};

export default LoginScreen;
