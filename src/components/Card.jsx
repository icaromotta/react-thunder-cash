import React from "react";
import "../styles/scss/Card.scss";

import { Router, Route, Link, browserHistory } from "react-router-dom";
import Detail from "./CashbackDetail";

export default (props) => (
  <Router>
    <Link to='/cashback' >
      <div className={props.item.status}>
        <div className="cashback-card">
          <ul>
            <li>
              <span>#{props.item.saleCode}</span>
              <span>{props.item.status}</span>
            </li>
            <li>
              <p className="sale-value">
                <strong>R$ {props.item.saleValue}</strong>
              </p>
              <p>{props.item.refundPercentage}</p>
            </li>
            <li>
              <p>12/09/10</p>
              <p>
                <strong>R${props.item.cashbackValue}</strong>
              </p>
            </li>
          </ul>
        </div>
      </div>
    </Link>

    <Route path='/cashback' component={Detail} />
  </Router>
);
