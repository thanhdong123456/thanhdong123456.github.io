import { useEffect, useState } from "react"
import "./ProductList.css"
import img from "./img/img1.png"
import { Link } from "react-router-dom";
import {useCart} from 'react-use-cart';




function ProductList() {
    const [products, setProducts] = useState([])
    const [category, setCategory] = useState([])
    
    useEffect(() => {
        fetch('https://api.storerestapi.com/products')
        .then(response => response.json())
        .then(json => setProducts(json.data))
    }, []);

    useEffect(() => {
        fetch('https://api.storerestapi.com/categories')
        .then(response => response.json())
        .then(json => setCategory(json.data))
    }, []);



    const filterProducts = async (event) => {
        await fetch("https://api.storerestapi.com/categories" + event.target.value)
          .then((res) => res.json())
          .then((data) => setProducts(data));
      };
    
    const { addItem } = useCart();
    return (
        <div className="product-list">
            <div className="filter-section">
                <h4 className="filter-title">BỘ LỌC TÌM KIẾM</h4>
                <div className="category">
                    <p>Theo danh mục</p>
                    <select onChange={filterProducts}>
                        {category.map(cate => (
                                <option key={cate.name} value={cate.name}>{cate.name}</option>
                            ))}
                    </select>
                </div>
            </div>
            <div className="product-section">
                {products.map(product => (
                    <div key={product._id} className="product-item">
                        <img src={img} className="product-img"/>
                        <p className="product-title">{product.title}</p>
                        <p className="product-price">${product.price}</p>
                        <nav>
                            <Link to={`/product/${product.slug}`}>Xem chi tiết</Link>
                        </nav>
                        <button onClick={() => addItem(product)} className="product-buy">thêm vào giỏ hàng</button>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ProductList