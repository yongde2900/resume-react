import React, { useState, useEffect } from "react";
import { FaEllipsisH, FaTrash, FaEdit, FaSave } from "react-icons/fa";
import { fetchComment, postComment, deleteComment, editComment } from "../api";

const MessageBoard = (props) => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const [editingMessageId, setEditingMessageId] = useState(null);
  const [editedMessage, setEditedMessage] = useState("");
  const user = props.user;

  useEffect(() => {
    (async function () {
      const result = await fetchComment();
      console.log(result.data);
      setMessages(result.data);
    })();
  }, []);

  const handleAddMessage = async () => {
    const result = await postComment(newMessage);
    console.log(result.data);
    setMessages([...messages, result.data]);
    setNewMessage("");
  };

  const handleDeleteMessage = async (id) => {
    await deleteComment(id);
    const updatedMessages = messages.filter((message) => message.id !== id);
    setMessages(updatedMessages);
  };

  const handleEditMessage = (id, content) => {
    setEditingMessageId(id);
    setEditedMessage(content);
  };

  const handleSaveMessage = async (id) => {
    console.log(editedMessage);
    await editComment(id, editedMessage);
    const updatedMessages = messages.map((message) => {
      if (message.id === id) {
        return { ...message, message: editedMessage };
      }
      return message;
    });
    setMessages(updatedMessages);
    setEditingMessageId(null);
    setEditedMessage("");
  };

  return (
    <div className="container mx-auto p-4 min-h-screen">
      <h1 className="text-2xl font-bold mb-4">Message Board</h1>
      {messages.map((message) => (
        <div key={message.id} className="bg-white p-4 rounded shadow mb-4">
          <div className="flex justify-between mb-2">
            <div className="flex items-center">
              <FaEllipsisH className="text-gray-500 mr-2 cursor-pointer" />
              <span className="font-bold">
                {message.user ? message.user?.name : "Anonymous"}
              </span>
              <span className="text-gray-500 ml-2">{message.created_at}</span>
            </div>
            <div className="flex items-center">
              {user?.id === message.user?.id && user ? (
                editingMessageId === message.id ? (
                  <>
                    <FaSave
                      className="text-green-500 mr-2 cursor-pointer"
                      onClick={() => handleSaveMessage(message.id)}
                    />
                    <FaTrash
                      className="text-red-500 cursor-pointer"
                      onClick={() => handleDeleteMessage(message.id)}
                    />
                  </>
                ) : (
                  <FaEdit
                    className="text-gray-500 mr-2 cursor-pointer"
                    onClick={() =>
                      handleEditMessage(message.id, message.message)
                    }
                  />
                )
              ) : null}
            </div>
          </div>
          {editingMessageId === message.id ? (
            <textarea
              value={editedMessage}
              onChange={(e) => setEditedMessage(e.target.value)}
              className="w-full border-gray-300 border-2 rounded p-2 mb-2"
            />
          ) : (
            <p>{message.message}</p>
          )}
        </div>
      ))}
      <div className="bg-white p-4 rounded shadow mt-4">
        <textarea
          placeholder="Enter your message"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          className="w-full border-gray-300 border-2 rounded p-2 mb-2"
        ></textarea>
        <button
          onClick={handleAddMessage}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Add Message
        </button>
      </div>
    </div>
  );
};

export default MessageBoard;
