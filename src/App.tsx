import { useState } from 'react';
import axios from 'axios';

import './App.css';

function App() {
    const [message, setMessage] = useState('');
    const [botReply, setBotReply] = useState('');

    const handleChat = async () => {
        try {
            const response = await axios.post(
                `${import.meta.env.VITE_SERVER_URL}/chat`,
                {
                    message,
                }
            );

            setBotReply(response.data.reply);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div>
            <h1>Chat Bot</h1>
            <div>
                <input
                    type="text"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                />
                <button onClick={handleChat}>Send</button>
            </div>
            <p>{botReply}</p>
        </div>
    );
}

export default App;
