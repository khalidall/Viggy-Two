import React from "react";
import "./Basket.css"


function Basket({items, activity, removeItem}){
    let showBasketBtn = document.querySelector(".basket-container .basket-button");
    var bodyRect = document.body.getBoundingClientRect();
    let elemRect = showBasketBtn.getBoundingClientRect();
    let offsetY   = elemRect.top - bodyRect.top + elemRect.height * 1.5;
    let offsetX = parseInt(bodyRect.right - elemRect.right - elemRect.width / 2);
    let styles = {
        top: `${offsetY}px`,
        right: `${offsetX}px`
    }
    let element;
    
    if (activity=== "active"){
        element = <ul>
                    {items.map(ele => {
                        return (
                            <li key={ele.id}>
                                <img src={ele.image} alt={ele.name} />
                                <div className="product-info">
                                    <p>{ele.name} - {ele.quantity} {ele.unite}</p>
                                    <p>
                                        <b>{ele.price}$</b>
                                    </p>
                                </div>
                                <div className="card-info">
                                    <p>{ele.number}item{ele.number > 1 ? "s" : ""}.</p>
                                    <p><b>{ele.number * ele.price}$</b></p>
                                </div>
                                <button onClick={() => removeItem(ele)}>×</button>
                            </li>
                        )
                    })}
                </ul>
    }else {
        element = <img className="empty-card-image" src="https://res.cloudinary.com/sivadass/image/upload/v1495427934/icons/empty-cart.png" alt="Empty Card"/>
    }
    return (
        <div className='basket' style={styles}>
            {element}
            <button className={items.length > 0 ? "checkout-button" : "checkout-button no-products"} >proceed to checkout</button>
        </div>
    )
}

export default Basket