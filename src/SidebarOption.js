import React from "react";
import "./SidebarOption.css";
function SidebarOption({Icon, title ,addChannelOption}){
    return(
        <div className = "sidebarOption" onClick={addChannelOption ? addChannel : selectChannel}>
            {Icon && <Icon className = "sidebarOption__icon" />}
    {Icon ? (
    <h3>{title}</h3>
    ) :(
         <h3 className ="sidebarOption__channel">
             <span className="sidebarOption__hash"></span># {title}</h3> 
         )}
        </div>
    );
}
export default SidebarOption ;