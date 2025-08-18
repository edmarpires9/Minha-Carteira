import AppName from "./AppName";
import "./NavBar.css";
import "./icons/all.css";
// import { useState } from "react";

export default function Navbar() {
  // const [open, setOpen] = useState(null);
  //^ Após feito algum sistema de autenticação desbloquear funcionalidades quando o usuário estiver logado. 
  // const toggleMenu = (menu) => {
  //   setOpen(open === menu ? null : menu);
  // };

  return (
    <nav className="navbar">
      <AppName/>
      {/* <ul className="nav-links">
        <li
          className="nav-item"
          onClick={() => toggleMenu("achievements")}
        >
          <span className={open === 'achievements' ? "nav-span-active" : "nav-span"}>Achievements <i class="fa-solid fa-chevron-down"></i></span>
          {open === "achievements" && (
            <ul className="dropdown">
              <li>achievements Overview</li>
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
      </ul> */}
    </nav>
  );
}
