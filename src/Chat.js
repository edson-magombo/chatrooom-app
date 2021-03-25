import React from 'react';
import './Chat.css';
import {useParams} from 'react-router-dom';
import StarBorderOutLinedIcon, { InfoOutlined } from "@material-ui/icons/StarBorderOutlined";
import InfoOutlinedIcon  from "@material-ui/icons/InfoOutlined";

function Chat(){
    const {roomId} = useParams();
    return(
        <div className= "chat">
            {/* <h3>You are in the {roomId} room </h3> */}
            <div className ="chat__header">
                  <div className= "chat__headerLeft">
                    <h4 className = "chat__channelName">
                        <strong># general</strong>
                        <StarBorderOutLinedIcon />
                    </h4>
                  </div>
                  <div className= "chat__headerRight">
                      <InfoOutlinedIcon /> Details

                  </div>

            </div>
        
        </div>
    )
}
export default Chat;