import React, { useState } from "react";
import { v4 as uuid } from "uuid";

function ItemForm({ onItemFormSubmit }) {
  const [item, setItem] = useState({
    id: "",
    name: "",
    category: "",
  });
  const handleChange = (event) => {
    setItem({ ...item, [event.target.name]: event.target.value });
  };
  const newItem = {
    id: uuid(),
    name: item.name,
    category: item.category,
  };
  return (
    <form className="NewItem" onSubmit={() => onItemFormSubmit(newItem)}>
      <label>
        Name:
        <input
          onChange={handleChange}
          type="text"
          name="name"
          value={item.name}
        />
      </label>

      <label>
        Category:
        <select name="category" onChange={handleChange} value={item.category}>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button onClick={onItemFormSubmit} type="submit">
        Add to List
      </button>
    </form>
  );
}

export default ItemForm;
