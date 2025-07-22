import React, { useState } from "react";

function NewTaskForm({
  categories = ["Code", "Food", "Money", "Misc"],
  onTaskFormSubmit = () => {}
}) {
  const [text, setText] = useState("");
  const [category, setCategory] = useState(categories[0]);

  function handleSubmit(e) {
    e.preventDefault();
    onTaskFormSubmit({ text, category });
    setText("");
    setCategory(categories[0]);
  }

  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
  <label>
    Details
    <input
      type="text"
      placeholder="New task details"
      value={text}
      onChange={(e) => setText(e.target.value)}
    />
  </label>
  <label>
    Category
    <select
      value={category}
      onChange={(e) => setCategory(e.target.value)}
    >
      {categories.map((c) => (
        <option key={c} value={c}>{c}</option>
      ))}
    </select>
  </label>
  <button type="submit">Add task</button>
</form>

  );
}

export default NewTaskForm;
