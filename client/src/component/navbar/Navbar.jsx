import React from "react";
import "./Navbar.css";
const getGreeting = () => {
  const hour = new Date().getHours();
  if (hour >= 5 && hour < 12) return "Good Morning";
  if (hour >= 12 && hour < 17) return "Good Afternoon";
  if (hour >= 17 && hour < 21) return "Good Evening";
  return "Hello"; // night time
};
export default function Navbar({ userName, onLogout }) {
  return (
    <nav className="navbar">
      <div className="navbar-logo">Expenses Managment Dashboard</div>
      <div className="navbar-user">
        <span>
          {getGreeting()}, {userName}!
        </span>
        <button onClick={onLogout} className="btn-logout">
          Logout
        </button>
      </div>
    </nav>
  );
}
