import { useFetch } from "../components/hooks/useFetch";
import Expense from "../components/Expense";
import { useEffect, useState } from "react";
import "./Expenses.css";
import Button from "../components/Button";

const Expenses = ({ api, totalAmount, setTotalAmount }) => {
  const [open, setOpen] = useState();
  const { data: expenses, httpConfig } = useFetch(api.endpoints.expenses);
  const [description, setDescription] = useState();
  const [amount, setAmout] = useState();
  const [date, setDate] = useState();

  const insertNewExpense = () => {
    httpConfig("POST", null, {
      description,
      amount,
      date,
    });

    setOpen(false);
  };

  useEffect(() => {
    if (Array.isArray(expenses)) {
      const total = expenses.reduce((acc, expense) => acc + Number(expense.amount), 0);
      setTotalAmount(total); // Atualiza o estado no pai
    } else {
      setTotalAmount(0);
    }
  }, [expenses]);

  return (
    <div>
      <div className="app-container">
        <Button
            name="Adicionar"
            setFunction={() => {setOpen(true)}}
            cssConfig={{
              backgroundColor: "#3b82f6",
              backgroundColorHover: "#25529bff",
              color: "white",
              colorHover: "white",
            }}
          />

        {open && (
          <div className="overlay">
            <div className="modal">
              {/* Cabeçalho */}
              <div className="modal-header">
                <p>Cadastrar novo gasto</p>
                <button className="close-btn" onClick={() => setOpen(false)}>
                  ✖
                </button>
              </div>

              {/* Conteúdo */}
              <div className="modal-content">
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
              </div>

              {/* Rodapé */}
              <div className="modal-footer">
                <button
                  className="btn-secondary"
                  onClick={() => setOpen(false)}
                >
                  Cancelar
                </button>
                <button
                  className="btn-primary"
                  onClick={() => insertNewExpense()}
                >
                  Confirmar
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      {expenses && <Expense expenses={expenses} httpConfig={httpConfig} />}
    </div>
  );
};

export default Expenses;
