import React, {Component} from "react"
// sass src/styles/scss:src/styles/css && react-scripts build
export default class Detail extends Component {


    constructor(props) {
        super(props)
        this.state = {
            cashback: ""
        }

        this.loadCashback = this.loadCashback.bind(this)
    }

    loadCashback() {}

    render() {

        return(
            <h2>Detalhe</h2>
        ) 
    }
}