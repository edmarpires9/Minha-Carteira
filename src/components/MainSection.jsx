import Button from "./Button";
import "./MainSection.css";
import { useEffect, useState } from "react";

const MainSection = ({ setPageToShow }) => {
  const createUser = (firstName, password) => {
    //^ Criar um hook com metodos HTTP get, post, update, delete.
    alert("TODO: Usuário criado com sucesso");
  };

  const [user, setUser] = useState([]);
  const [firstName, setFirstName] = useState("");
  const [password, setPassword] = useState("");
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  //^ Refatorar isso para um hook com metódos HTTP get, post, update, delete.
  useEffect(() => {
    async function fetchData() {
      const res = await fetch("http://localhost:3000/reg_user");
      const data = await res.json();
      setUser(data);
    }
    fetchData();
  }, []);

  const login = () => {
    const userFound = user.find(
      (data) => data.name === firstName && data.password === password
    );

    if (userFound) {
      setError(""); // limpa o erro
      setSuccess("Usuário encontrado");
    } else {
      setSuccess("");
      setError("Usuário não encontrado ou senha incorreta"); // mensagem de erro
    }
  };

  return (
    <div className="main-section">
      <div className="main-section-fit-content">
        <h1 className="main-section-h1">
          Engage your goals, right inside your app
        </h1>
        <h2 className="main-section-h2">Collect goals that make you grow</h2>
      </div>
<form>
  <div className="form-group">
    <input
      type="text"
      id="fullname"
      required
      placeholder=" "
      onChange={(e) => setFirstName(e.target.value)}
      autoComplete="name"
    />
    <label htmlFor="fullname">Nome</label>
  </div>

  <div className="form-group">
    <input
      type="password"
      id="password"
      required
      placeholder=" "
      onChange={(e) => setPassword(e.target.value)}
      autoComplete="current-password"
    />
    <label htmlFor="password">Senha</label>
  </div>
</form>

      {success && <p style={{ color: "green" }}>{success}</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
      <Button
        name="Criar usuário"
        setFunction={createUser}
        cssConfig={{
          backgroundColor: "#181818",
          backgroundColorHover: "white",
        }}
      />
      <Button
        name="Entrar"
        setFunction={login}
        cssConfig={{
          backgroundColor: "#181818",
          backgroundColorHover: "white",
        }}
      />
    </div>
  );
};

export default MainSection;
