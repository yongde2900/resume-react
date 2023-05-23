import React from "react";

const MessageBoard = () => {
  const messages = [
    { user: "John", time: "2023-05-24 10:00", content: "Hello, how are you?" },
    {
      user: "Jane",
      time: "2023-05-24 10:05",
      content: "I'm good. Thanks for asking!",
    },
    // Add more messages here
  ];

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Message Board</h1>
      {messages.map((message, index) => (
        <div key={index} className="bg-white p-4 rounded shadow mb-4">
          <div className="flex justify-between mb-2">
            <span className="font-bold">{message.user}</span>
            <span className="text-gray-500">{message.time}</span>
          </div>
          <p>{message.content}</p>
        </div>
      ))}
    </div>
  );
};

export default MessageBoard;
