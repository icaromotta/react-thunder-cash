import React from "react";
import "../styles/scss/Card.scss";

export default (props) => (
  <div className={props.item.status}>
    <div className="cashback-card">
      <ul>
        <li>
          <span>#{props.item.saleCode}</span>
          <span className="cashback-status">{props.item.status}</span>
        </li>
        <li>
          <p className="sale-value">
            <strong>R$ {props.item.saleValue}</strong>
          </p>
          <p>{props.item.refundPercentage}</p>
        </li>
        <li>
          <p><button type="button" className="btn btn-outline-danger btn-sm" onClick={() => props.deleteCashback(props.item._id)}>Deletar</button></p>
          <p>
            <strong>R${props.item.cashbackValue}</strong>
          </p>
        </li>
      </ul>
    </div>
  </div>
);
