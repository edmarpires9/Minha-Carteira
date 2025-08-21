import "./App.css";
import { useEffect, useState } from "react";
import { useFetch } from "./components/hooks/useFetch";
import NavBar from "./components/NavBar";
import Button from "./components/Button";
import Expense from "./components/Expense";

function App() {
  const myAPI = "http://localhost:3000/expenses";
  const { data: expenses, httpConfig } = useFetch(myAPI);
  //* Expenses
  const [description, setDescription] = useState();
  const [amount, setAmout] = useState();
  const [date, setDate] = useState();

  // "expenses": [
  // {
  //   "id": 1,
  //   "description": "Groceries",
  //   "amount": 150.75,
  //   "category": "Food",
  //   "date": "2025-08-20",
  //   "paymentMethod": "Credit Card"
  // },
  // "recurring": true
  //     "installments": {
  //   "total": 3,
  //   "current": 1
  // }
  //ERRO SE VAZIO

  const insertNewExpense = () => {
    httpConfig({
      description,
      amount,
      date
    }, "POST");
  };

  return (
    <div>
      <NavBar />
      <form>
        <div className="form-group">
          <input
            type="text"
            id="fullname"
            required
            placeholder=" "
            onChange={(e) => setDescription(e.target.value)}
            autoComplete="name"
          />
          <label htmlFor="fullname">Nome</label>
        </div>
      </form>
      <form>
        <div className="form-group">
          <input
            type="number"
            step="0.01"
            min="0"
            id="fullname"
            required
            placeholder=""
            onChange={(e) => setAmout(e.target.value)}
            autoComplete="name"
          />
          <label htmlFor="fullname">R$ 0.00</label>
        </div>
      </form>
      <form>
        <div className="form-group">
          <input
            type="date"
            id="fullname"
            required
            placeholder=""
            onChange={(e) => setDate(e.target.value)}
            autoComplete="name"
          />
          <label htmlFor="fullname"></label>
        </div>
      </form>

      <Button
        name="Adicionar"
        setFunction={insertNewExpense}
        cssConfig={{
          backgroundColor: "#09a538ff",
          backgroundColorHover: "white",
        }}
      />

      {expenses &&
        expenses.map((expense) => (
          <Expense
            key={expense.id}
            id={expense.id}
            name={expense.description}
            amount={expense.amount}
            date={expense.date}
            myAPI={myAPI}
            httpConfig={httpConfig}
          />
        ))}
    </div>
  );
}

export default App;
