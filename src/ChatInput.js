import React, {useState} from 'react';
import './ChatInput.css';
// import SendIcon from '@material-ui/icons/Send';
import Timestamp from "./firebase"
import {useStateValue} from "./StateProvider";
import db from './firebase';
import firebase from "./firebase";

function ChatInput({channelName, channelId }){
    const [input, setInput] = useState('');
    const [{user}] = useStateValue();
    
const sendMessage = (e) => {
    e.preventDefault();
     
    if (channelId){
        let payload ={
           
                message: input,
               // timestamp: firebase.firestore.Timestamp.now(),
                user : user.displayName,  
                userImage: user.photoURL,
        }
        db.collection("rooms").doc(channelId).collection('roomId').add(payload);
    //     db.collection('rooms').doc(channelId).collection({
    //     message: input,
    //     timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    //     user : user.displayName,  
    //     userImage: user.photoURL,
    // })
    }
    // if (!input) return ;
    // sendMessage(input)
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