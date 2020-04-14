import React, { Component } from "react";
import axios from "axios";
import "../styles/scss/Cashbacks.scss";
import Card from "./Card";

const EDNPOINT = "https://powerful-basin-11701.herokuapp.com/cashbacks/"

export default class Cashbacks extends Component {
  constructor(props) {
    super(props);
    this.state = {
        cashbacks: [],
        items: []
    };
    this.loadCashbacks = this.loadCashbacks.bind(this);
    this.filterList = this.filterList.bind(this);
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

  render() {
    return (
      <div className="mt-3 cashback-list">
        <div className="mb-3">
          <input onChange={this.filterList} type="email" className="form-control mb-3" id="exampleInputEmail1" aria-describedby="emailHelp" />
          <div className="row">
            {this.state.cashbacks.map((cashback) => 
              <div className="col-md-6 col-lg-3 mb-2" key={cashback._id}>
                <Card item={cashback} />
              </div>
            )}
          </div>      
        </div>
      </div>
    );
  }
}
