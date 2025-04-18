import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import React from "react";

const Header = () => {
  const { currentUser, logout } = useAuth();

  return (
    <header className="bg-green-600 shadow-lg mt-6 mx-4 rounded-2xl">
      
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        
      <img src="/task.png" alt="Logo" className="w-20 h-20 rounded-full" /><span className="text-white text-2xl font-bold ml-2 flex-item-center">Task Management system</span>
       
        <nav>
          {currentUser ? (
            <div className="flex items-center space-x-4">
              <span className="text-white hover:text-indigo-200">Hi, </span><span className="text-red-500 hover:text-indigo-200">{currentUser.name}</span>
              <Link to="/" className="text-white hover:text-indigo-200">Dashboard</Link>
              <Link to="/tasks/new" className="text-white hover:text-indigo-200">New Task</Link>
              <button
               type='button'
                onClick={logout}
                className="bg-white text-indigo-600 px-4 py-2 rounded-md hover:bg-indigo-100 transition-colors"
              >
                Logout
              </button>
            </div>
          ) : (
            <div className="flex items-center space-x-4">
              <Link
                to="/login"
                className="text-white hover:text-indigo-200"
              >
                Login
              </Link>
              <Link
                to="/register"
                className="bg-white text-indigo-600 px-4 py-2 rounded-md hover:bg-indigo-100 transition-colors"
              >
                Register
              </Link>
            </div>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;