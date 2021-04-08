import React, { useState, useEffect } from "react";
import "./ChatInput.css";
// import timestamp from "./firebase"
import { useStateValue } from "./StateProvider";
import db from "./firebase";
import firebase from "./firebase";
import * as Firebase from "firebase";

function ChatInput(props) {
  const [input, setInput] = useState("");
  const [{ user }] = useStateValue();

  useEffect(() => {
    console.log(Date.now());
  }, []);

  const sendMessage = (e) => {
    e.preventDefault();

    if (!input) return false;

    if (props.channelId) {
      db.collection("rooms").doc(props.channelId).collection("messages").add({
        message: input,
        timestamp: Date.now(),
        user: user.displayName,
        userImage: user.photoURL,
      });
    }

    setInput("");
  };

  return (
    <div className="chatInput">
      <form>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder={`Type a message #${props.channelName?.toLowerCase()}`}
        />
        <button type="submit" onClick={sendMessage}>
          SEND{" "}
        </button>
      </form>
    </div>
  );
}
export default ChatInput;
