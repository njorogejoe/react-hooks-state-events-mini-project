import React from "react";

function Task({ text, category, onDelete }) {
  return (
    <li className="task">
      <span>{text}</span> - <span>{category}</span>
      <button onClick={onDelete}>Delete</button>
    </li>
  );
}

export default Task;
