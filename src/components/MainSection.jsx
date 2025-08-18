import Button from "./Button";
import User from "./User";
import "./MainSection.css";

const MainSection = ({ setPageToShow }) => {
  const createUser = (firstName, password) => {
    //^ Criar um hook com metodos HTTP get, post, update, delete.
    alert("TODO: Usuário criado com sucesso");
  };

  //^ Criar um hook com metodos HTPP get, post, update, delete.
  const login = () => {
    alert("TODO: Login realizado com sucesso!");
  };

  return (
    <div className="main-section">
      <div className="main-section-fit-content">
        <h1 className="main-section-h1">
          Engage your goals, right inside your app
        </h1>
        <h2 className="main-section-h2">Collect goals that make you grow</h2>
      </div>
      <User />
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
