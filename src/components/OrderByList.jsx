import styles from "../styles/orderByList.module.css";
import OrderByCard from "./OrderByCard";

const OrderByList = ({ handleOrderParams, setOrderBy, orderBy }) => {
  const orderByArr = [
    { title: "Descending", order: "desc" },
    { title: "Ascending", order: "asc" },
  ];

  return (
    <ul className={styles.orderByContainer}>
      <li className={styles.orderByHeader}>ORDER BY</li>
      {orderByArr.map((item) => {
        return (
          <OrderByCard
            item={item}
            key={item.title}
            handleOrderParams={handleOrderParams}
            setOrderBy={setOrderBy}
            orderBy={orderBy}
          />
        );
      })}
    </ul>
  );
};

export default OrderByList;
