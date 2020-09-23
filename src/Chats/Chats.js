import React from "react";
import "./Chats.css"
import Chat from "./Chat"

function Chats() {
    return (
        <div className="chats">
            <Chat
            name="Sarah"
            message="How are you?"
            timestamp="30 Minutes ago"
            profilePic="https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Lama_Portrait_06072007_01.jpg/800px-Lama_Portrait_06072007_01.jpg">
            </Chat>
            <Chat
                name="Sarah2"
                message="How are you?"
                timestamp="30 Minutes ago"
                profilePic="https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Lama_Portrait_06072007_01.jpg/800px-Lama_Portrait_06072007_01.jpg">
            </Chat>
            <Chat
                name="Sarah3"
                message="How are you?"
                timestamp="30 Minutes ago"
                profilePic="https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Lama_Portrait_06072007_01.jpg/800px-Lama_Portrait_06072007_01.jpg">
            </Chat>
            <Chat
                name="Sarah4"
                message="How are you?"
                timestamp="30 Minutes ago"
                profilePic="https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Lama_Portrait_06072007_01.jpg/800px-Lama_Portrait_06072007_01.jpg">
            </Chat>
        </div>
    );
}

export default Chats;