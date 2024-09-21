import { useState } from "react";
import { useFilter } from "../hooks/useFilter";
import ContextMenu from "./ContextMenu";

function ExpenseTable({ Expenses, setExpenses, expense, setExpense }) {
  const [filterData, setQuery] = useFilter(Expenses, (data) => data.category);
  const [contextMenu, setContextMenu] = useState({});
  const [clickedId, setClickedId] = useState("");

  let total = filterData.reduce(
    (acc, curr) => (acc = acc + Number(curr.amount)),
    0
  );

  // console.log(filterData);
  return (
    <>
      <ContextMenu
        contextMenu={contextMenu}
        setContextMenu={setContextMenu}
        clickedId={clickedId}
        setExpenses={setExpenses}
        setExpense={setExpense}
      />
      <table className="expense-table" onClick={() => setContextMenu({})}>
        <thead>
          <tr>
            <th>Title</th>
            <th>
              <select onClick={(e) => setQuery(e.target.value.toLowerCase())}>
                <option value="">All</option>
                <option value="Grocery">Grocery</option>
                <option value="Clothes">Clothes</option>
                <option value="Bills">Bills</option>
                <option value="Education">Education</option>
                <option value="Medicine">Medicine</option>
              </select>
            </th>
            <th className="amount-column">
              <div>
                <span>Amount</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="10"
                  viewBox="0 0 384 512"
                  className="arrow up-arrow"
                >
                  <title>Ascending</title>
                  <path d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z" />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="10"
                  viewBox="0 0 384 512"
                  className="arrow down-arrow"
                >
                  <title>Descending</title>
                  <path d="M169.4 470.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 370.8 224 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 306.7L54.6 265.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z" />
                </svg>
              </div>
            </th>
          </tr>
        </thead>
        <tbody>
          {filterData.map((expense) => (
            <tr
              key={expense.id}
              onContextMenu={(e) => {
                e.preventDefault();
                setContextMenu({ left: e.clientX, top: e.clientY });
                setClickedId(expense.id);
              }}
            >
              <td>{expense.title}</td>
              <td>{expense.category}</td>
              <td>₹{expense.amount}</td>
            </tr>
          ))}
          <tr>
            <th>Total</th>
            <th></th>
            <th>₹{total}</th>
          </tr>
        </tbody>
      </table>
    </>
  );
}

export default ExpenseTable;
