import React, { Component } from "react";
import Header from "./Header";
import Product from "./Product";
import data from "./viggyData";
import Noproducts from "./Noproducts";
import Basket from "./Basket";


class Template extends Component{
    constructor(props){
        super(props);
        this.state = {
            vegitables: data,
            vegitablesInCard: [],
            total:0,
            showBasket: false,
        }
    }
    renderSpecific(input){
        let lookingForData;
        if (input !== ""){
            lookingForData = data.filter(ele => ele.name.toLocaleLowerCase().includes(input.toLocaleLowerCase()));
        }else {
            lookingForData = data;
        }
        this.setState(oldstate => {
            return {
                ...oldstate,
                vegitables: lookingForData,
            }
        })
    }
    addToCard(product, number){
        console.log(number);
        let oldState = this.state.vegitablesInCard;
        let exist = oldState.includes(product) ? true : false;
        if (exist){
            let index = oldState.indexOf(product);
            oldState[index].number = oldState[index].number + number;
            this.setState(old => {
                return {
                    ...old,
                    vegitablesInCard: oldState,
                    total: this.state.total + parseInt(product.price) * number
                }
            })
        }else {
            product.number = number;
            this.setState(oldstate => {
                return {
                    ...oldstate,
                    vegitablesInCard: [...this.state.vegitablesInCard, product],
                    total: this.state.total + parseInt(product.price) * number
                }
            })
        }

    }
    removeItem(item){
        let old = this.state.vegitablesInCard;
        let filterdState = old.filter(element => element.id !== item.id);
        let total = this.state.total - (parseInt(item.price) * item.number);
        this.setState(oldState => {
            return {
                ...oldState,
                vegitablesInCard: filterdState,
                total: total,
            }
        })
    }
    showBasket(){
        this.setState(oldstate => {
            return {
                ...oldstate,
                showBasket: !this.state.showBasket,
            }
        })
    }
    hideBasket(){
        if (this.state.showBasket){
            this.setState(oldstate => {
                return {
                    ...oldstate,
                    showBasket: false,
                }
            })
        }
    }
    render(){
        let activity;
        if (this.state.vegitablesInCard.length > 0){
            activity = "active";
        }else {
            activity = "not-active";
        }
        return(
            <main>
                <Header handleClick={this.showBasket.bind(this)} renderSpecific={this.renderSpecific.bind(this)} total={this.state.total} number={this.state.vegitablesInCard.length}/>
                <section onClick={this.hideBasket.bind(this)} className={this.state.vegitables.length > 0 ? "products-wrapper" : "no-products"}>
                    <div className="products">
                        {
                            this.state.vegitables.length > 0
                            ? 
                            this.state.vegitables.map(ele=> <Product {...ele} key={ele.id} handleClick={(number)=>this.addToCard(ele, number)}/>)
                            :
                            <Noproducts />
                        }
                    </div>
                </section>
                {this.state.showBasket && <Basket removeItem={this.removeItem.bind(this)} items={this.state.vegitablesInCard} activity={activity} />}
            </main>
        )
    }
}

export default Template;