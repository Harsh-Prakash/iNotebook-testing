import React from "react";
import { BrowserRouter, Routes, Route,useNavigate } from "react-router-dom";
import NavBar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import NoteState from "./context/notes/NoteState";
import Alert from "./components/Alert";
import Signup from "./components/Signup";
import Login from "./components/Login";
import { useState } from "react";

const navigate=useNavigate()
function App() {
  const [alert, setAlert] = useState(null)
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 2000)
  }
useEffect(()=>{
    navigate("/login")
  })
  return (
    <>
      <NoteState>
        <BrowserRouter>
          <NavBar />
          <Alert alert={alert}/>
          <div className="container">
            <Routes>
              <Route  path="/" index element={<Home showAlert={showAlert}/>} />
              <Route  path="/about" index element={<About />} />
              <Route  path="/signup" index element={<Signup showAlert={showAlert}/>} />
              <Route  path="/login" exact={true} index element={<Login showAlert={showAlert}/>} />
            </Routes>
          </div>
        </BrowserRouter>
      </NoteState>
    </>
  );
}
export default App;
