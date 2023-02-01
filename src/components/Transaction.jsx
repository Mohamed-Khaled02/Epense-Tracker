import React, { useContext } from "react";
import { GlobalContext } from "../GlobalState";

function Transaction({ transaction }) {
  const { amount, text } = transaction;

  const sign = amount < 0 ? "-" : "+";

  const {deleteTransaction} = useContext(GlobalContext)

  return (
    <li className={amount > 0 ? "plus" : "minus"}>
      {text}{" "}
      <span>
        {sign}${Math.abs(amount)}
      </span>
      <button className="delete-btn" onClick={() => deleteTransaction(transaction.id)}>x</button>
    </li>
  );
}

export default Transaction;
