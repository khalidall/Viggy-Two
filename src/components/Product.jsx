import React, { Component } from "react";
import "./product.css"

class Product extends Component{
    constructor(props){
        super(props);
        this.state = {
            productsNumber: 1,
            showElement: false,
        }
    }
    changeState(event){
        let text = event.target.innerHTML;
        let value = text === "+" ? 1 : -1;
        if (text === "+"){
            this.setState({
                productsNumber: this.state.productsNumber + value,
            })
        }else {
            if(this.state.productsNumber > 1){
                this.setState({
                    productsNumber: this.state.productsNumber + value,
                })
            }
        }
    }
    zoomIn(event){
        console.log(event.target)
    }
    render(){

        return (
            <div className="product">
                <div className="product-image" onClick={(event) => this.zoomIn(event)}>
                    <img src={this.props.image} alt={`${this.props.quantity} ${this.props.unite}`}/>
                </div>
                <div className="info">
                    <h5>{this.props.name} - </h5>
                    <h5> {this.props.quantity} {this.props.unite}</h5>
                </div>
                <h2>{this.props.price}$</h2>
                <div className="number-of-product">
                    <button onClick={this.changeState.bind(this)}>-</button>
                    <input type="number" readOnly name="productsNumber" value={this.state.productsNumber} />
                    <button onClick={this.changeState.bind(this)}>+</button>
                </div>
                <button onClick={()=> {
                    this.setState({productsNumber: 1});
                    return this.props.handleClick(this.state.productsNumber)
                }}>Add To Card</button>
            </div>
        )
    }
}
export default Product;