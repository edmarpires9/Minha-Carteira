// Navbar.jsx
import AppName from "./AppName";
import "./NavBar.css";
import "./icons/all.css";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(null);

  const toggleMenu = (menu) => {
    setOpen(open === menu ? null : menu);
  };

  return (
    <nav className="navbar">
      <AppName/>
      <ul className="nav-links">
        <li
          className="nav-item"
          onClick={() => toggleMenu("product")}
        >
          <span className={open === 'product' ? "nav-span-active" : "nav-span"}>Product <i class="fa-solid fa-chevron-down"></i></span>
          {open === "product" && (
            <ul className="dropdown">
              <li>Product Overview</li>
              <li>Integrations</li>
              <li>Analytics</li>
            </ul>
          )}
        </li>

        <li
          className="nav-item"
          onClick={() => toggleMenu("use-cases")}
        >
          <span className={open === 'use-cases' ? 'nav-span-active' : 'nav-span'}>Use Cases <i class="fa-solid fa-chevron-down"></i></span>
          {open === "use-cases" && (
              <div className="dropdown">
            <ul>
              <li>Social</li>
              <li>Chat</li>
              <li>Community</li>
            </ul>
              </div>
          )}
        </li>
      </ul>
    </nav>
  );
}
