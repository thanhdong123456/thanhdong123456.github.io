import img from "./img/img1.png"
import './descProduct.css'
import { useEffect, useState } from "react";
import { useParams } from "react-router";

function DescProduct() {
    const { slug } = useParams();
    const [product, setProduct] = useState([])
    const [count, setCount] = useState(0)
    useEffect(() => {
        fetch(`https://api.storerestapi.com/products/${slug}`)
        .then(response => response.json())
        .then(json => setProduct(json.data))
    },[])


    const handleMinus = () => {
        if(count > 0) {
            setCount(prevCount => prevCount - 1)
        }
    }
    const handlePlus = () => {
        setCount(prevCount => prevCount + 1)
    }
    return (
        <div className="App">
        <h1>Mô tả sản phẩm</h1>
        <div>
            <img src={img} />
        </div> 
        <span>{product.title}</span> <br></br> <br></br>
        <span>Price: ${product.price}</span> <br></br> <br></br>
        <div className="button-group">
            <button onClick={handleMinus} type="button">-</button>
            <div>{count}</div>
            <button onClick={handlePlus} type="button">+</button>
        </div>
        <button>Đặt hàng</button>
        </div>
    )
};
export default DescProduct;