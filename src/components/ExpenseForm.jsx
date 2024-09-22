import React, { useState } from "react";
import Input from "./Input";
import Select from "./Select";

function ExpenseForm({
  setExpenses,
  expense,
  setExpense,
  editing,
  setEditing,
}) {
  // function submit(e){
  //   e.preventDefault();
  //   const expense={...getFormData(e.target),id:crypto.randomUUID()};
  //   setExpenses((prevState)=>[...prevState,expense])
  //   e.target.reset();
  // }

  // const getFormData=(form)=>{

  //   const formData=new FormData(form);
  //   const data={}
  //   for(const [key,value] of formData.entries()){
  //     data[key]=value;
  //   }
  //   return data;
  // }

  // Another Good Way

  // const [title, setTitle] = useState("");
  // const [category, setCategory] = useState("");
  // const [amount, setAmount] = useState("");

  // function submit(e) {
  //   e.preventDefault();
  //   const id = crypto.randomUUID();
  //   const expense = { title, category, amount, id };
  //   console.log(expense);
  //   setExpenses((prevState) => [...prevState, expense]);
  //   setTitle("");
  //   setAmount("");
  //   setCategory("");
  // }

  // we can do all in one state
  const [error, setError] = useState({});
  const validateConfig = {
    title: [
      { required: "true", message: "title is required" },
      { minLength: 5, message: "length should be greater or equal to 5" },
    ],
    category: [{ required: "true", message: "Category must be selected" }],
    amount: [
      { required: "true", message: "Amount is required" },
      { type: Number, message: "Enter a valid amount" },
    ],
  };

  function checkValidate(formData) {
    const errorData = {};
    Object.entries(formData).forEach(([key, value]) => {
      validateConfig[key].some((rule) => {
        if (rule.required && !value) {
          errorData[key] = rule.message;
          return true;
        }

        if (rule.minLength && value.length < 5) {
          errorData[key] = rule.message;
          return true;
        }

        if (rule.type && isNaN(Number(value))) {
          errorData[key] = rule.message;
          return true;
        }
      });
    });

    setError(errorData);
    return errorData;
  }

  function submit(e) {
    e.preventDefault();
    const foundData = checkValidate(expense);
    if (Object.keys(foundData).length) return;
    {
      editing
        ? setExpenses((prevState) =>
            prevState.map(
              (ele) =>
                ele.id === editing
                  ? {
                      ...ele,
                      ...expense,
                    } // Update the title of the matching expense
                  : ele //Keep other expenses unchanged
            )
          )
        : setExpenses((prevState) => [
            ...prevState,
            { ...expense, id: crypto.randomUUID() },
          ]);
    }
    setEditing("");
    setExpense({
      title: "",
      category: "",
      amount: "",
    });
  }

  function add(e) {
    const { name, value } = e.target;
    setExpense((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    setError({});
  }

  return (
    <form className="expense-form" onSubmit={submit}>
      <Input
        id="title"
        label="Title"
        name="title"
        value={expense.title}
        onChange={add}
        error={error.title}
      />
      <Select
        id="category"
        label="Category"
        name="category"
        value={expense.category}
        onChange={add}
        error={error.category}
        options={["Grocery", "Clothes", "Bills", "Education", "Medicine"]}
        defaultOption="Select Category"
      />
      <Input
        id="amount"
        label="Amount"
        name="amount"
        value={expense.amount}
        onChange={add}
        error={error.amount}
      />
      <button className="add-btn">{editing ? "Save" : "Add"}</button>
    </form>
  );
}

export default ExpenseForm;
