import Button from "./Button";
import "./Expense.css";
import { useFetch } from "./hooks/useFetch";

const Expense = ({ id, name, amount, date, myAPI, httpConfig}) => {
  let formattedDate = date.split("-").reverse().join("/");

  const handleDelete = () => {
    httpConfig({}, "DELETE", id);   
  }

  return (
    <div>
      <div className="expense-card">
        <div>
          <p className="expense-title">{name}</p>
          <p className="expense-amount">R$ {amount}</p>
        </div>
        <p className="expense-date">{formattedDate}</p>
      <Button
        name="Apagar"
        setFunction={handleDelete}
        cssConfig={{
          backgroundColor: "#ff0000ff",
          backgroundColorHover: "white",
        }}
      />
      </div>
    </div>
  );
};

export default Expense;
