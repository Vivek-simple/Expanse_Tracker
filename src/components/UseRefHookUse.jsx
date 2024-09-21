import React, { useEffect, useRef, useState } from "react";

function UseRefHookUse({ setExpenses, setTotal }) {
  const titleRef = useRef(null);
  const categoryRef = useRef(null);
  const amountRef = useRef(null);

  function submit(e) {
    e.preventDefault();
    setExpenses((prevState) => [
      ...prevState,
      {
        id: crypto.randomUUID(),
        title: titleRef.current.value,
        category: categoryRef.current.value,
        amount: amountRef.current.value,
      },
    ]);
    setTotal((prevState) => prevState + Number(amountRef.current.value));
  }

  useEffect(() => {
    console.log("rendering");
  });

  return (
    <>
      <form className="expense-form" onSubmit={submit}>
        <div className="input-container">
          <label htmlFor="title">Title</label>
          <input id="title" name="title" required ref={titleRef} />
        </div>
        <div className="input-container">
          <label htmlFor="category">Category</label>
          <select id="category" name="category" required ref={categoryRef}>
            <option value="" hidden>
              Select Category
            </option>
            <option value="grocery">Grocery</option>
            <option value="clothes">Clothes</option>
            <option value="bills">Bills</option>
            <option value="education">Education</option>
            <option value="medicine">Medicine</option>
          </select>
        </div>
        <div className="input-container">
          <label htmlFor="amount">Amount</label>
          <input
            type="number"
            id="amount"
            name="amount"
            required
            ref={amountRef}
          />
        </div>
        <button className="add-btn">Add</button>
      </form>
    </>
  );
}

export default UseRefHookUse;
