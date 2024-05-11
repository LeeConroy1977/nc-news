import React from "react";
import OrderByCard from "./OrderByCard";

const OrderByList = ({ handleOrderParams }) => {
  const orderByArr = [
    { title: "Ascending", order: "asc" },
    { title: "Descending", order: "desc" },
  ];

  return (
    <ul>
      {orderByArr.map((item) => {
        return (
          <OrderByCard
            item={item}
            key={item.title}
            handleOrderParams={handleOrderParams}
          />
        );
      })}
    </ul>
  );
};

export default OrderByList;
