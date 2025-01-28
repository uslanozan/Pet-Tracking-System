import { useRef } from 'react';

const ChatForm = ({chatHistory ,setChatHistory, generateBotResponse}) => {
    const inputRef = useRef();

    const handleFormSubmit = (e) => {
        e.preventDefault();
        const userMessage = inputRef.current.value.trim();
        if (!userMessage) return;
        inputRef.current.value= "";

        //? Updating chat history
        setChatHistory(history => [...history, {role: "user", text: userMessage}]);

        //? Thinking placeholder 
        setTimeout(() => setChatHistory((history) => [...history,{role: "model",text: "Thinking..."}]),600);

        //? Bot response
        generateBotResponse([...chatHistory,{role: "model",text: "Thinking..."}]);
      };

    return (
        <form action="#" className="chat-form" onSubmit={handleFormSubmit}>
            <input ref={inputRef} type="text" placeholder="Message..." className="message-input" required />
            <button className="material-symbols-rounded">arrow_upward</button>
        </form>
    );
};

export default ChatForm;
