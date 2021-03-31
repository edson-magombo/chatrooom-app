import React from 'react';
import "./Login.css";
import { Button } from '@material-ui/core';
import { auth, provider } from './firebase';
import { useStateValue } from './StateProvider';
import {actionTypes} from "./reducer";
function Login(){
    const [state, dispatch] = useStateValue();
     
    const signIn = ()=>{
        auth
        .signInWithPopup(provider)
        .then((result) =>{
            console.log(result);
            dispatch({
                type:actionTypes.SET_USER,
                user: result.user, 
            })

        })
        .catch((Error) =>{
            alert(Error.message);
        });
    };
    return(
        <div className = "login">
            <div className= "login__container">
               <img
               src = "https://pbs.twimg.com/profile_images/1330975410398646272/F5Si7DUQ.jpg"
               alt = "" />
            <h1>Sign in to Chatroom App</h1>
            <p>edsonmagombo920@gmail.com</p>
            <Button onClick={signIn} >Sign In with Google</Button>
            </div>
        </div>
    )
}
export default Login;