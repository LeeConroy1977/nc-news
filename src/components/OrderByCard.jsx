import React from "react";

const OrderByCard = ({ item, handleOrderParams }) => {
  const { title, order } = item;
  return <li onClick={() => handleOrderParams(order)}>{title}</li>;
};

export default OrderByCard;
