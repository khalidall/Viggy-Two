import React, { Component } from "react";
import "./Header.css"


class Header extends Component{
    constructor(props){
        super(props);
        this.state = {
            lookingFor: "",
        }
    }
    handleChange(event){
        this.setState({
            [event.target.name]: event.target.value,
        })
        return this.props.renderSpecific(event.target.value)
    }
    render(){
        return (
            <header>
                <img 
                    src="https://res.cloudinary.com/sivadass/image/upload/v1493547373/dummy-logo/Veggy.png" 
                    alt=" Viggy Logo" 
                />
                <div className="search-form">
                    <input
                        type="text"
                        name="lookingFor"
                        value={this.state.lookingFor}
                        placeholder="Search for Vegetables and Fruits"
                        onChange={this.handleChange.bind(this)}
                    />
                    <i className="fa-solid fa-magnifying-glass"></i>
                </div>
                <div className="basket-container">
                    <div className="total-container">
                        <table>
                            <tbody>
                                <tr>
                                    <td>No. of items</td>
                                    <td>:</td>
                                    <td><b>{this.props.number}</b></td>
                                </tr>
                                <tr>
                                    <td>Sub Total</td>
                                    <td>:</td>
                                    <td><b>{this.props.total}</b></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <button className="basket-button" onClick={(event) => this.props.handleClick(event)}></button>
                </div>
            </header>
        )
    }
}

export default Header;