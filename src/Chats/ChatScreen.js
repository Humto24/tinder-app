import React, {useState} from "react";
import "./ChatScreen.css"
import Avatar from "@material-ui/core/Avatar";

function ChatScreen() {
    const [input, setInput] = useState('');
    const [messages, setMessages] = useState([
        {
            name: 'Sarah',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Lama_Portrait_06072007_01.jpg/800px-Lama_Portrait_06072007_01.jpg',
            messages: 'Whats up'
        },
        {
            name: 'Sarah',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Lama_Portrait_06072007_01.jpg/800px-Lama_Portrait_06072007_01.jpg',
            messages: 'Whats up'
        },
        {
            name: 'Sarah',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Lama_Portrait_06072007_01.jpg/800px-Lama_Portrait_06072007_01.jpg',
            messages: 'Whats up'
        },
        {
            messages: 'YO YO BITCH'
        }
    ]);

    const handleSend = e => {
        e.preventDefault();
        setMessages([...messages, {messages: input}]);
        setInput("");
    }

    return (
        <div className="chat-screen">
            <p className="chat-screen-timestamp">You matched with Sarah on 10/08/2020</p>
            {messages.map(messages => (
                messages.name ? (
                    <div className="chat-screen-message">
                        <Avatar className="chat-screen-image" alt={messages.name} src={messages.image}/>
                        <p className="chat-screen-text">{messages.messages}</p>
                    </div>
                ) : (
                    <div className="chat-screen-message">
                        <p className="chat-screen-text-user">{messages.messages}</p>
                    </div>
                )
            ))}

            <form className="chat-screen-input">
                <input value={input} onChange={e => setInput(e.target.value)} className="chat-screen-input-filed" placeholder="Type a message" type="text"/>
                <button onClick={handleSend} type="submit" className="chat-screen-input-button">SEND</button>
            </form>

        </div>
    )
        ;
}

export default ChatScreen;