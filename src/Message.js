import React from 'react';
import "./Message.css";
 

function Message({message, timestamp, user, userImage}){
    return  (
        <div className= "msg">
        <div className = "message">
            <img src={userImage} alt = ""/>
        <div className = "message__info">
            <h4>
                {user} {" "}
                <span className= "message__timestamp">
                    {/* {" "} */}
                 {new Date(timestamp).toLocaleTimeString()}
                 </span>
            </h4> 
            <p>{message}</p>
        </div>
        </div>
        </div>
    ); 
    
    
} 
export default Message;