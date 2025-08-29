import { BrowserRouter, Routes, Route } from "react-router-dom";
import Expenses from "./pages/Expenses"
import Overview from "./components/Overview";
import { useState } from "react";

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

  const api = {
    endpoints: {
      "expenses": "http://localhost:3000/expenses"
    }
  }

  const [totalAmount, setTotalAmount] = useState(0);


  return (
    <div>
      <div className="row">
      <Overview iconPath={'./icons8-money-100.png'} title={'Minha carteira'}/>
      <Overview iconPath={'./icons8-debt-100.png'} title={'Fatura:'} info={totalAmount}/>
      </div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Expenses 
            api={api}
            totalAmount={totalAmount}
            setTotalAmount={setTotalAmount}
          />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
