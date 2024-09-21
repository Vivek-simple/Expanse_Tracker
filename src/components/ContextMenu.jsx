import React from "react";

function ContextMenu({
  contextMenu,
  setContextMenu,
  clickedId,
  setExpenses,
  setExpense,
}) {
  const Delete = () => {
    setContextMenu({});
    setExpenses((prevState) =>
      prevState.filter((expense) => expense.id != clickedId)
    );
  };

  const Edit = () => {
    setContextMenu({});
    setExpenses((prevState) =>
      prevState.filter((expense) => expense.id != clickedId)
    );
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
