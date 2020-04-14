import React, { Component } from "react";
import axios from "axios";
import Swal from 'sweetalert2'
import Card from "./Card";

import "../styles/scss/Cashbacks.scss";

const EDNPOINT = "https://powerful-basin-11701.herokuapp.com/cashbacks/"
const DELETE_ENDPOINT = 'http://localhost:3030/cashbacks/'

export default class Cashbacks extends Component {
  constructor(props) {
    super(props);
    this.state = {
        cashbacks: [],
        items: []
    };
    this.loadCashbacks = this.loadCashbacks.bind(this);
    this.filterList = this.filterList.bind(this);
    this.deleteCashback = this.deleteCashback.bind(this);
  }

  componentDidMount() {
      this.loadCashbacks()
  }

  loadCashbacks() {
    axios.get(`${EDNPOINT}?userId=5e94b72631511200178e4dc0`).then((resp) => {  
        this.setState({
          ...this.state,
          cashbacks: resp.data.cashback,
        })  
        
      })
  }

  filterList(event){    
    if(event.target.value === "") {
      return this.loadCashbacks()
    }
    var updatedList = this.state.cashbacks;
    updatedList = updatedList.filter(function(item){
      return JSON.stringify(item).toLowerCase().search(
        event.target.value.toLowerCase()) !== -1; 
    });
    this.setState({cashbacks: updatedList});
  }

  deleteCashback(cashbackId) {
    axios.delete(`${DELETE_ENDPOINT}?userId=5e94b72631511200178e4dc0&cashbackId=${cashbackId}`).then((resp) => {this.loadCashbacks()})
  
    Swal.fire({
      text: 'Reembolso excluído!',
      icon: 'success'
    })
  }

  render() {
    return (

      <div className="cashback">
        <div className="cashback-call">
          <h3>Bem-vindo a sua plataforma de reembolso.</h3>
          <h6>Na Petz você ganha duas vezes, a cada compra feita uma porcetagem do valor volta pra você.</h6>
        </div>
        <div className=" cashback-list">
          <div className="mb-3">
            <input onChange={this.filterList} type="text" className="form-control mb-3" placeholder="status, R$, %" />
            <h5 className="mb-3">Meus reembolsos</h5>
            <div className="row">
              {this.state.cashbacks.map((cashback) => 
                <div className="col-md-6 col-lg-3 mb-2" key={cashback._id}>
                  <Card item={cashback} deleteCashback={this.deleteCashback} />
                </div>
              )}
            </div>      
          </div>
        </div>
      </div>
    );
  }
}
