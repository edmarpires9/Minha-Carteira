import "./App.css";
import { useState } from "react";
import { useFetch } from "./components/hooks/useFetch";
import NavBar from "./components/NavBar";
import Button from "./components/Button";
import Expense from "./components/Expense";

function App() {
  /* 
  * To see the comments in the correct colors, use the Colorful Comments extension.
  & Future new ideas to implement - I am my POO
  ^ Page Not Found
  ^ Validations
  ~ Category icon
  ~ PayamentMethod icon
  ~ Sort by amount, category, due date
  ~ Recurring
  ~ Checkbox payed,
  ~ Installments
  ~ modals new expense
  ~ Transition when card was created
  */

  /*
  ? I know the best way to do things, but for now I am the only one handling POO, Front-end, Back-end, Database, QA, and more...
  * On this team, so I decide:
  ! Cut off database and back-end API
  & In order to focus on the front-end and make this application faster in the limited time I have
  ^ Database replaced by JSON-SERVER
  ^ Since JavaScript can be used on the front-end, the application logic was implemented here to avoid the need for a back-end PHP or NodeJS.
  */

  const api = {
    endpoints: {
      "expenses": "http://localhost:3000/expenses"
    }
  }
  const { data: expenses, httpConfig } = useFetch(api.endpoints.expenses);
  const [description, setDescription] = useState();
  const [amount, setAmout] = useState();
  const [date, setDate] = useState();

  const insertNewExpense = () => {
    httpConfig("POST", null , {
      description,
      amount,
      date
    });
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
          backgroundColor: "#218838",
          backgroundColorHover: "#28a745",
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
            myAPI={api.endpoints.expenses}
            httpConfig={httpConfig}
          />
        ))}
    </div>
  );
}

export default App;
