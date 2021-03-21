import React from "react";
import {Avatar} from "@material-ui/core";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import SearchIcon from "@material-ui/icons/Search";
import HelpOutLineIcon from "@material-ui/icons/HelpOutline";
import "./Header.css";
function Header(){
    return(
        <div className= "header">
            <div className= "header__left">
            <Avatar className="header__avatar" alt= "Eddie Gomboz"></Avatar>
            <AccessTimeIcon />
            </div>
            <div className= "header__search">
                <SearchIcon />
                <input placeholder = "search chatroom" />
            </div>
            <div className= "header__left">
                <HelpOutLineIcon />
            </div>
        </div>
    )
}
export default Header;