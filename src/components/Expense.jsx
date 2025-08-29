import "./Expense.css";
import "../components/icons/all.css";

const Expense = ({ expenses, httpConfig }) => {
  const formattedDate = (date) => {
    return date.split("-").reverse().join("/");
  };

  const handleDelete = (id) => {
    httpConfig("DELETE", id);
  };

  const checkPaymentStatus = (date, isPayed) => {
    const today = new Date(); // data atual
    const expenseDate = new Date(date); // transforma string em Date
    const isPeding = expenseDate >= today; // retorna true se pendente

    //Retorna que está pago
    if (isPeding && isPayed) {
      // return ({<i class="fa-solid fa-circle-info" title="Pendente"></i></p>});
    }
    //retorna que está pedente
    if (isPeding) {
      return "expense-status-peding";
    }
  };

  return (
    <div>
      {expenses.map((expense) => (
        <div className="expense-card">
          <div>
            <div className="expense-card-title-and-close">
              <p className="expense-title">{expense.description}</p>
              <p className="expense-close-btn" onClick={() => {handleDelete(expense.id)}}>✖</p>
            </div>
            <p className="expense-amount">R$ {expense.amount}</p>
            <p className="expense-amount">{expense.date}</p>
            {checkPaymentStatus(expense.date, expense.isPayed)}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Expense;
