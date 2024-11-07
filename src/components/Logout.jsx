import React from "react";
import { useNavigate } from "react-router-dom";
import { removeCookie } from "react-use-cookie";

const Logout = () => {
  const nav = useNavigate();

  const handleLogout = () => {
    removeCookie("my_token");
    nav("/");
  };

  return (
    <button
      onClick={handleLogout}
      className="text-stone-700 hover:text-white border border-stone-700 hover:bg-stone-800 focus:ring-4 focus:outline-none focus:ring-stone-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-stone-500 dark:text-stone-500 dark:hover:text-white dark:hover:bg-stone-500 dark:focus:ring-stone-800"
    >
      Logout
    </button>
  );
};

export default Logout;
