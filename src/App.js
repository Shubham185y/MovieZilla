import Header from "./components/Header";
import Cards from "./components/Cards";
import {Route, Routes} from 'react-router-dom'
import AddMovie from "./components/AddMovie";
import Details from "./components/Details";
import { createContext, useEffect, useState } from "react";
import Login from "./components/Login";
// import { Login } from "@mui/icons-material";
import Signup from './components/Signup'
const Appstate = createContext();
function App() {
  const [login, setLogin] = useState(false);
  const [userName, setUserName] = useState("");

  return (
    <Appstate.Provider value={{login, userName, setLogin, setUserName}} >
    <div className="App relative">
     <Header/>
     <Routes>
         <Route  path="/" element={<Cards/>} />
         <Route path="/addmovie" element={<AddMovie/>}/>
         <Route path="/Details/:id" element={<Details/>}/>
         <Route path="/signup" element={<Signup/>}/>
         <Route path="/login" element={<Login/>}/>
     </Routes>
     
    </div>
    </Appstate.Provider>
  );
}

export default App;
export {Appstate}