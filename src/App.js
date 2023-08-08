import logo from './logo.svg';
import './App.css';
import FrameComponent from './FrameComponent';
import ChatScreen from './components/ChatScreen';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="d-flex flex-column flex-sm-row justify-content-center">
       
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<FrameComponent/>}>
      
        <Route path='/chat' element={<ChatScreen/>}/>
        </Route>
     
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
