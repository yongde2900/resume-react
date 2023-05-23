import axios from "axios";

const request = axios.create({
  baseUrl: "http://localhost:80/api/",
  responsetype: "json",
  withcredentials: true,
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${localStorage.getItem("token")}`,
  },
});

const fetchUser = () => {
  return request.post("http://localhost:80/api/auth/me");
};
const fetchComment = () => {
  return request.get("http://localhost:80/api/comments");
};
const postComment = async (message) => {
  try {
    const result = await fetchUser();
    const user = result.data;
    return await request.post("http://localhost:80/api/comments", {
      message,
      user_id: user.id,
    });
  } catch (e) {
    return await request.post("http://localhost:80/api/comments", { message });
  }
};

const deleteComment = async (id) => {
  return await request.delete(`http://localhost:80/api/comments/${id}`);
};
const editComment = async (id, message) => {
  return await request.put(`http://localhost:80/api/comments/${id}`, {
    message,
  });
};

const login = async (email, password) => {
  return await request.post("http://localhost:80/api/auth/login", {
    email,
    password,
  });
};
export {
  request,
  fetchUser,
  fetchComment,
  postComment,
  deleteComment,
  editComment,
  login,
};
