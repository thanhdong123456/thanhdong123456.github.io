import img from "../img/img1.png"
import './descProduct.css'
import { useEffect, useState } from "react";
import { useParams } from "react-router";

function DescProduct(props) {
    const { cartItems, onAdd, onRemove} = props;
    const { slug } = useParams();
    const [product, setProduct] = useState([])
    useEffect(() => {
        fetch(`https://api.storerestapi.com/products/${slug}`)
        .then(response => response.json())
        .then(json => setProduct(json.data))
    },[])



    return (
        <div className="App">
        <h1>Mô tả sản phẩm</h1>
        <div>
            <img src={img} />
        </div> 
        <span>Tên sản phẩm: {product.title}</span> <br></br> <br></br>
        <span>Giá: ${product.price}</span> <br></br> <br></br>
        <button onClick={() => onAdd(product)} className="product-buy">Thêm vào giỏ hàng</button>
        </div>
    )
};
export default DescProduct;