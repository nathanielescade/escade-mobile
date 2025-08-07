import { useState } from 'react';
import { ArrowLeft, Send } from 'lucide-react';

export default function Messages({ goBack }) {
  const [messages, setMessages] = useState([
    { id: 1, text: "Hey there! How's it going?", sender: 'other', time: '9:30 AM' },
    { id: 2, text: "I'm good! Working on EscadeMobile", sender: 'me', time: '9:32 AM' },
    { id: 3, text: "That's awesome! Can't wait to see it", sender: 'other', time: '9:35 AM' },
  ]);
  const [newMessage, setNewMessage] = useState('');

  const sendMessage = () => {
    if (newMessage.trim() !== '') {
      const newMsg = {
        id: messages.length + 1,
        text: newMessage,
        sender: 'me',
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setMessages([...messages, newMsg]);
      setNewMessage('');
      
      // Simulate reply
      setTimeout(() => {
        const reply = {
          id: messages.length + 2,
          text: "That's cool!",
          sender: 'other',
          time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        };
        setMessages(prev => [...prev, reply]);
      }, 1000);
    }
  };

  return (
    <div className="flex flex-col h-full">
      <div className="p-4 border-b flex items-center">
        <button onClick={goBack} className="mr-2">
          <ArrowLeft className="w-6 h-6 text-gray-900" />
        </button>
        <h2 className="text-lg font-bold text-gray-900">Messages</h2>
      </div>
      
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((msg) => (
          <div 
            key={msg.id} 
            className={`max-w-xs p-3 rounded-xl ${
              msg.sender === 'me' 
                ? 'bg-blue-500 text-white ml-auto' 
                : 'bg-gray-200 mr-auto'
            }`}
          >
            <p>{msg.text}</p>
            <p className={`text-xs mt-1 ${msg.sender === 'me' ? 'text-blue-100' : 'text-gray-500'}`}>
              {msg.time}
            </p>
          </div>
        ))}
      </div>
      
      <div className="p-4 border-t flex items-center">
        <input
          type="text"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
          placeholder="Type a message..."
          className="flex-1 p-2 border rounded-full px-4"
        />
        <button 
          onClick={sendMessage}
          className="ml-2 bg-blue-500 text-white p-2 rounded-full"
        >
          <Send className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}