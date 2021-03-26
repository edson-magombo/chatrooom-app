import React, { useState } from "react"
import './App.css';
import Header from "./Header";
import Sidebar from "./Sidebar";
import Chat from "./Chat";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

function App() {

const [user, setUser] = useState("ED");
 

  return (
    <div className="app">
    <Router>
      { !user ? (
        <h1>LOG IN PAGE</h1>
      ): (

      <>
    <Header />
   <div className= "app_body">
    <Sidebar />

    <Switch>
      <Route path= "/room/:roomId">
      
       <Chat />
      </Route>
      <Route path="/">
        <h1> WELCOME TO CHATROOM PLEASE SELECT THE CHANNEL </h1>
     </Route>
    </Switch>
   </div>
   </> 
    )}
    </Router>
 </div>
 );    
}
export default App;
