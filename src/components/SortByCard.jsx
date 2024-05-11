import React from "react";

const SortByCard = ({ item, handleSortedByParams, setSortedBy }) => {
  const { title, sort } = item;

  return (
    <li
      onClick={() => {
        setSortedBy(sort);
        handleSortedByParams(sort);
      }}
    >
      {title}
    </li>
  );
};

export default SortByCard;
