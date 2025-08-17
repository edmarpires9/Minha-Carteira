import "./Card.css";
const Card = () => {
  return (
    <div className="card">
      <div className="space-around">
        <p className="card-quest-name">Um novo começo</p>
        <p className="card-quest-days-left">Prazo ∞ dias</p>
      </div>
      <p className="card-quest-description">
        Crie um usuário para começar utilizar a aplicação
      </p>
      <button className="card-new-task-button">+</button>
    </div>
  );
};

export default Card;
