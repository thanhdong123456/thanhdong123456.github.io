// import React, { useState } from "react"
import img from "../img/img1.png"
import "./cart.css"



function Cart(props) {
    const {cartItems, onAdd, onRemove} = props
    const itemsPrice = cartItems.reduce((a, c) => a + c.price * c.qty, 0)
    return (
        <div>
            <h1>GIỎ HÀNG CỦA BẠN</h1>
            <div>
                {cartItems.length === 0 && <div>giỏ hàng đang trống</div>}
            </div>
            <div className="cart-group">
                <div className="cart-items">
                    {cartItems.map(item => (
                        <div key={item._id} className="cart-item">
                            <img src={img} className="cart-img"/>
                            <div className="cart-title">{item.title}</div>
                            <div className="cart-button"><button onClick={() => onRemove(item)}>-</button></div>
                            <div className="cart-button"><button onClick={() => onAdd(item)}>+</button></div>
                            <div className="cart-qty">Số lượng :{item.qty}</div>
                            <div className="cart-price">Giá : ${item.price}</div>
                        </div>
                    ))}
                </div>
                {cartItems.length !== 0 && (
                    <div className="total-cart">
                        {/* <p>Tổng số lượng: {itemsQty}</p> */}
                        <p>Tổng giá: ${itemsPrice}</p>
                        <button className="product-buy">Đặt hàng</button>
                    </div>
                )}
            </div>
        </div>
    )
}




export default Cart;