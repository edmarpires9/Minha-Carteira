import "./App.css";
import AppName from "./components/AppName";
import Card from "./components/Card";
import MainSection from "./components/MainSection";
import NavBar from "./components/NavBar";

function App() {
  /*
   * This app was created by Edmar Chagas Pires from Brazil.
   * Feel free to take inspiration from these ideas or use them.
   * Although Node.js now supports .env files, this approach works fine for now.
   */

  const env = [
    { id: 1, name: "JSON Server", url: "http://localhost:3000/" },
    { id: 2, name: "DEV-API", url: "" },
  ];
  return(
  <div>
    <NavBar/>
    <MainSection/>
  </div>);
}

export default App;
