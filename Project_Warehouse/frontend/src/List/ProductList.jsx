import { useState, useEffect } from 'react';
import axios from 'axios';          //using axios so that I can use HTTP request

import './List.css'
import { ProdductForm } from '../Form/ProductForm';

const Product = ({product: {model, color, storage, tag, carrierLock, image, serialNum, isRefurbished, isCellular}}) => {
    return (
        <tr>
            <td>{model}</td>
            <td>{color}</td>
            <td>{storage}</td>
            <td>{tag}</td>
            <td>{isRefurbished}</td>
            <td>{isCellular}</td>
            <td>{carrierLock}</td>
            <td><img height="130" src={image} alt={model}/></td>
            <td>{serialNum}</td>
        </tr>
    )
}

export const ProductList = () => {

    const[productList, setProductList] = useState([]);

    useEffect(() => {
        // accessing GET HTTP request using axios
        // axios would not let me use async function as a parameter, so i will use .then and .catch 
        axios.get ('http://localhost:9000/product')
            .then(res => { setProductList(res.data); console.log(res.data) })
            .catch(err => console.error(err));
    }, []);
    

    return (
        <>
            <div className= "TablePage">
                <ProdductForm  setProductList={setProductList}/>
                <table className="TableMain">
                    <thead>
                        <tr>
                            <th>Model</th>
                            <th>Color</th>
                            <th>Storage in GB</th>
                            <th>Tag</th>
                            <th>Refurbished</th>
                            <th>Cellular</th>
                            <th>Carrier Lock</th>
                            <th>Image</th>
                            <th>Serial Number</th>
                        </tr>
                    </thead>
                    <tbody>
                        {productList.map(product => <Product key={product._id} product={product}/>)}
                    </tbody>
                    
                </table>
            </div>
        </>
    );
}