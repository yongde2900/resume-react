import { useState, useEffect } from "react";
import axios from "axios";
import Message from "./Message";
export default function Comment() {
  const [message, setMessage] = useState("");
  const [comments, setComments] = useState([]);
  async function fetchComments() {
    const result = await axios.get("http://localhost:80/api/comments");
    setComments(result.data.reverse());
  }

  useEffect(() => {
    (async function () {
      await fetchComments();
    })();
  }, []);

  async function handlesubmit(event) {
    event.preventDefault();
    const token = localStorage.getItem("token");
    try {
      const result = await axios({
        method: "post",
        url: "http://localhost:80/api/auth/me",
        headers: { Authorization: `Bearer ${token}` },
      });
      const user = result.data;

      const result2 = await axios.post("http://localhost:80/api/comments", {
        message,
        user_id: user.id,
      });
    } finally {
      await axios.post("http://localhost:80/api/comments", {
        message,
      });
      await fetchComments();
      setMessage("");
    }
    await fetchComments();
    setMessage("");
  }
  return (
    <div>
      <form>
        <textarea
          value={message}
          onChange={(event) => {
            setMessage(event.target.value);
          }}
        ></textarea>
        <button type="submit" onClick={handlesubmit}>
          submit
        </button>
      </form>
      <div className="w-2/5 mx-auto mt-5 py-5">
        <Message comments={comments} setComments={setComments}></Message>
      </div>
    </div>
  );
}
