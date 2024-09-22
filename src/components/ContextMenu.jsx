import React from "react";

function ContextMenu({
  contextMenu,
  setContextMenu,
  clickedId,
  setExpenses,
  setExpense,
  Expenses,
  setEditing,
}) {
  const Delete = () => {
    setContextMenu({});
    setExpenses((prevState) =>
      prevState.filter((expense) => expense.id != clickedId)
    );
  };

  const Edit = () => {
    setContextMenu({});
    const { title, category, amount } = Expenses.find(
      (data) => data.id == clickedId
    );
    setExpense({ title, category, amount });
    setEditing(clickedId);
  };

  if (!contextMenu.left) return;
  return (
    <div className="context-menu" style={contextMenu}>
      <div onClick={Edit}>Edit</div>
      <div onClick={Delete}>Delete</div>
    </div>
  );
}

export default ContextMenu;
