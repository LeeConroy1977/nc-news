import styles from "../styles/orderByCard.module.css";

const OrderByCard = ({ item, handleOrderParams, setOrderBy, orderBy }) => {
  const { title, order } = item;

  let classname =
    orderBy === "desc" && order === "desc"
      ? styles.selected
      : orderBy === "asc" && order === "asc"
      ? styles.selected
      : styles.orderByCard;
  return (
    <li
      className={classname}
      onClick={() => {
        setOrderBy(order), handleOrderParams(order);
      }}
    >
      {title}
    </li>
  );
};

export default OrderByCard;
