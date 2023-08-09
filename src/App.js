import logo from './logo.svg';
import './App.css';
import FrameComponent from './FrameComponent';
import ChatScreen from './components/ChatScreen';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Chathome from './components/Chathome';
import { useCallback, useState } from 'react';
function App() {
  const [userName,setuserName]=useState('')
  const func=useCallback((val)=>setuserName(val),[])
  return (
    <>
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Welcome</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link" aria-current="page" href="/home">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/home/chathome">Chat</a>
        </li>
        
      </ul>
      
    </div>
  </div>
</nav>
     {/* <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className='container-fluid'>
      <a class="navbar-brand" href="#">Welcome</a>
      <button className='navbar-toggler' type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label='Toggle navigation'>
        <span className='navbar-toggler-icon'></span>
      </button>
      <div className='collapse navbar-collapse' id="navbarSupportedContent">

     
        <ul className="navbar-nav mr-auto">
        <li className="nav-item active">
        <a className="nav-link" href='/home'>Home<span className="sr-only"></span></a>
       </li>
       <li className="nav-item">
        <a className="nav-link" href='/home/chat'>Login</a>
       </li>
        </ul>
        </div>
        </div>
      </nav> */}
    <div className="d-flex flex-column flex-sm-row justify-content-center">
     
       
      <BrowserRouter>
      <Routes>
        <Route path='/home' element={<FrameComponent/>}>
          <Route path='chathome' element={<Chathome userName={userName} setuser={func}/>}/>
      
        <Route path=":opposite" element={<ChatScreen userName={userName}/>}/>
        </Route>
     
      </Routes>
      </BrowserRouter>
    </div>
    </>
  );
}

export default App;
