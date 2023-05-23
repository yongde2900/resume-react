import { useState, useEffect } from "react";
import { fetchUser } from "../api";
import { useNavigate } from "react-router";
export default function Nav(props) {
  const navigate = useNavigate();
  const user = props.user;
  const setUser = props.setUser;

  useEffect(() => {
    (async () => {
      try {
        const result = await fetchUser();
        setUser(result.data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);
  function handleClick() {
    localStorage.removeItem("token");
    setUser(null);
    navigate("/login");
  }
  return (
    <nav className="bg-gray-800 py-5 flex justify-between w-full sm: space-x-4 py-2  mb-5">
      <div>
        {[
          ["Home", "/#"],
          ["Projects", "/#/projects"],
          ["Message Board", "/#/messageBoard"],
        ].map(([title, url]) => (
          <a
            href={url}
            className="mx-2 rounded-lg px-3 py-2 text-gray-100 font-medium hover:text-gray-300"
          >
            {title}
          </a>
        ))}
      </div>
      <div>
        {user ? (
          <a
            className="mx-2 rounded-lg px-3 py-2 text-gray-100 font-medium hover:text-gray-300"
            onClick={handleClick}
          >
            Log Out
          </a>
        ) : (
          <a
            href="/#/login"
            className="mx-2 rounded-lg px-3 py-2 text-gray-100 font-medium hover:text-gray-300"
          >
            Login
          </a>
        )}
      </div>
    </nav>
  );
}
