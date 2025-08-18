import { useState } from "react";
import "./App.css";
import MainSection from "./components/MainSection";
import NavBar from "./components/NavBar";
import CreateUser from "./components/User";

function App() {
  /*
   * This app was created by Edmar Chagas Pires from Brazil.
   * Feel free to take inspiration from these ideas or use them.
   * Although Node.js now supports .env files, this approach works fine for now.
   */

  // const env = [
  //   { id: 1, name: "JSON Server", url: "http://localhost:3000/" },
  //   { id: 2, name: "DEV-API", url: "" },
  // ];

  const [pageToShow, setPageToShow] = useState('mainSection');

  return (
    <div>
      <NavBar/>
      {pageToShow === 'mainSection' && <MainSection setPageToShow={setPageToShow}/>}
      {pageToShow === 'createUser' && <CreateUser/>}
    </div>
  );
}

export default App;
