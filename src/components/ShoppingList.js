import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items, onItemFormSubmit }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [search, setSearch] = useState("");

  function handleSearchbar(event) {
    setSearch(event.target.value);
  }
  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  const itemsToDisplay = items
    .filter((item) => {
      if (selectedCategory === "All") return true;

      return item.category === selectedCategory;
    })
    .filter((item) =>
      item.name.toLowerCase().includes(search.toLocaleLowerCase())
    )
    .map((item) => (
      <Item key={item.id} name={item.name} category={item.category} />
    ));

  return (
    <div className="ShoppingList">
      <ItemForm onItemFormSubmit={onItemFormSubmit} />
      <Filter
        search={search}
        onSearchChange={handleSearchbar}
        onCategoryChange={handleCategoryChange}
      />
      <ul className="Items">{itemsToDisplay}</ul>
    </div>
  );
}

export default ShoppingList;
