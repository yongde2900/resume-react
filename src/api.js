import axios from "axios";

const request = axios.create({
  baseurl: "http://localhost:80/api/",
  responsetype: "json",
  withcredentials: true,
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${localStorage.getItem("token")}`,
  },
});

export { request };
