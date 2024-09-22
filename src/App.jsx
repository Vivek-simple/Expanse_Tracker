import React, { useEffect, useState } from "react";
import "./App.css";
import ExpenseForm from "./components/ExpenseForm";
import UseRefHookUse from "./components/UseRefHookUse";
import ExpenseTable from "./components/ExpenseTable";
import data from "./data";
import { useStorage } from "./hooks/useStorage";
function App() {
  const [editing, setEditing] = useStorage("editing", "");
  const [Expenses, setExpenses] = useStorage("Expenses", data);
  const [expense, setExpense] = useStorage("expense", {
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
          editing={editing}
          setEditing={setEditing}
        />
        {/* <UseRefHookUse setExpenses={setExpenses} setTotal={setTotal} /> */}
        <ExpenseTable
          Expenses={Expenses}
          setExpenses={setExpenses}
          setExpense={setExpense}
          setEditing={setEditing}
        />
      </div>
    </main>
  );
}

export default App;
