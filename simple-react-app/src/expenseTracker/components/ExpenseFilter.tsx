import React from "react";
import categories from "../categories";

interface Props {
  onSelectCatagory: (category: string) => void;
}

const ExpenseFilter = ({ onSelectCatagory }: Props) => {
  return (
    <select
      className="form-select"
      onChange={(event) => onSelectCatagory(event.target.value)}
    >
      <option value="">All categories</option>
      {categories.map((category) => (
        <option key={category} value={category}>
          {category}
        </option>
      ))}
    </select>
  );
};

export default ExpenseFilter;
