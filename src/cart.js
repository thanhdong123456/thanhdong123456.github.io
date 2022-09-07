import img from "./img/img1.png"
import {  useCart } from "react-use-cart"


function Cart() {

    const {
        isEmpty,
        totalUniqueItems,
        totalItems,
        items,
        cartTotal,
        updateItemQuantity,
        removeItem,
        emptyCart
    } = useCart();

    const done = () => {
        emptyCart()
        alert("Đặt hàng thành công")
    }
    if(isEmpty) {
        return (
                <h2>giỏ hàng đang trống</h2>
        )
    }
    return (
        <>
        <div>
            <h1>Giỏ hàng</h1>
            <h3>Sản phẩm : {totalUniqueItems}</h3>
            <h3>Tổng số lượng : {totalItems} </h3>
            <table>
                <tbody>
                    {items.map((item, index) =>{
                        return(
                        <tr key={index}>
                            <td>
                                <img src={img} style={{height: '20px' }}/>
                            </td>
                            <td>{item.title}</td>
                            <td>${item.price}</td>
                            <td>Số lượng : {item.quantity}</td>
                            <td>
                                <button onClick={() => updateItemQuantity(item.id, item.quantity - 1)}>-</button>
                                <button onClick={() => updateItemQuantity(item.id, item.quantity + 1)}>+</button>
                                <button onClick={() => removeItem(item.id)}>Xóa</button> 
                            
                            </td>
                        </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
        <div>
        <h5>Tổng giá tiền ${cartTotal}</h5>
        <button onClick={() => emptyCart()}>Xóa tất cả</button>
        <button onClick={() => done()}>Thanh toán</button>
        </div>
        </>
    )
}

export default Cart