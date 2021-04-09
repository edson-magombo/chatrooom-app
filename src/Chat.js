import React, { useState, useEffect} from 'react';
import './Chat.css';
import {useParams} from 'react-router-dom';
import StarBorderOutLinedIcon, { InfoOutlined } from "@material-ui/icons/StarBorderOutlined";
import Message from "./Message";
import InfoOutlinedIcon  from "@material-ui/icons/InfoOutlined";
import db from "./firebase";
import ChatInput from "./ChatInput";
// import timestamp from  "./firebase"

function Chat(){
    const {roomId} = useParams();
    const [roomDetails, setRoomDetails] = useState(null);
    const [roomMessages, setRoomMessages]= useState([]);
    useEffect(() =>{
        if (roomId){
            db.collection("rooms")
            .doc(roomId)
            .onSnapshot((snapshot) =>  
           setRoomDetails(snapshot.data()) )
        }  
        db.collection("rooms").doc(roomId)
        .collection("messages")
        .orderBy( "timestamp", "asc" )
        .onSnapshot((snapshot) =>
             setRoomMessages(
                snapshot.docs.map((doc) => doc.data()))
        );
    }, [roomId]);

    console.log(roomDetails);
     console.log("MESSAGES>>>>" , roomMessages);
    
 
    return(
        <div className= "chat">
            {/* <h3>You are in the {roomId} room </h3> */}
            <div className ="chat__header">
                  <div className= "chat__headerLeft">
                    <h4 className = "chat__channelName">
                    <strong>#{roomDetails?.name}</strong>
                        <StarBorderOutLinedIcon />
                    </h4>
                  </div>
                  <div className= "chat__headerRight">
                      <p>
                      <InfoOutlinedIcon /> Details
                       </p>
                  </div>

            </div>
            <div className = "chat__messages">
                {roomMessages.map(({message, timestamp, user, userImage}) =>(
                <Message
                message={message}
                timestamp={timestamp}
                user={user}
                userImage = {userImage}
                key = {timestamp}
            
                />
             ))}
                
            </div>
           
                <div>{}</div>
           <ChatInput channelName = {roomDetails?.name} channelId = {roomId} />
        </div> 
    )
}
export default Chat;