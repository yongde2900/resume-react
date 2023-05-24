import axios from "axios";
const api = process.env.REACT_APP_API;

const request = axios.create({
  baseUrl: api,
  responsetype: "json",
  withcredentials: true,
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${localStorage.getItem("token")}`,
  },
});

const fetchUser = () => {
  return request.post(`${api}/auth/me`);
};
const fetchComment = () => {
  return request.get(`${api}/comments`);
};
const postComment = async (message, user) => {
  try {
    console.log(message, user);
    return await request.post(`${api}/comments`, {
      message,
      user_id: user.id,
    });
  } catch (e) {
    return await request.post(`${api}/comments`, { message });
  }
};

const deleteComment = async (id) => {
  return await request.delete(`${api}/comments/${id}`);
};
const editComment = async (id, message) => {
  return await request.put(`${api}/comments/${id}`, {
    message,
  });
};

const login = async (email, password) => {
  return await request.post(`${api}auth/login`, {
    email,
    password,
  });
};
const register = async (email, password, name, confirmPassword) => {
  return await request.post(`${api}/users`, {
    email,
    password,
    name,
    confirm_password: confirmPassword,
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
  register,
};
