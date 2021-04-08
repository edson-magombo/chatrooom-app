import React, {useState} from 'react';
import './ChatInput.css';
// import timestamp from "./firebase"
import {useStateValue} from "./StateProvider";
import db from './firebase';
import Timestamp from "./firebase";

function ChatInput({channelName, channelId }){
    const [input, setInput] = useState("");
    const [{user}] = useStateValue();
    
const sendMessage = (e) => {
    e.preventDefault();
    
     if (!input) return false;

    if (channelId){
        db.collection("rooms").doc(channelId).collection("messages").add({
         message : input, 
         timestamp: Timestamp.now(),
         user: user.displayName,
         userImage: user.photoURL,

     } );
    }

    setInput("");
};
  
    return(
        <div className= "chatInput">
            <form>
                <input 
                value={input}
                onChange = {(e) => setInput(e.target.value)}
                placeholder= {`Type a message #${channelName?.toLowerCase()}`}/>
                <button type = "submit" onClick  ={sendMessage}>
                 SEND </button>
            </form>
            
        </div>
    );
}
export default ChatInput;