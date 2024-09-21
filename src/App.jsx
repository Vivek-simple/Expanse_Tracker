import React, { useEffect, useState } from "react";
import "./App.css";
import ExpenseForm from "./components/ExpenseForm";
import UseRefHookUse from "./components/UseRefHookUse";
import ExpenseTable from "./components/ExpenseTable";
import data from "./data";
function App() {
  const [Expenses, setExpenses] = useState(data);
  const [expense, setExpense] = useState({
    title: "",
    category: "",
    amount: "",
  });
  return (
    <main>
      <h1>Track Your Expense</h1>
      <div className="expense-tracker">
        <ExpenseForm
          setExpenses={setExpenses}
          expense={expense}
          setExpense={setExpense}
        />
        {/* <UseRefHookUse setExpenses={setExpenses} setTotal={setTotal} /> */}
        <ExpenseTable
          Expenses={Expenses}
          setExpenses={setExpenses}
          expense={expense}
          setExpense={setExpense}
        />
      </div>
    </main>
  );
}

export default App;
