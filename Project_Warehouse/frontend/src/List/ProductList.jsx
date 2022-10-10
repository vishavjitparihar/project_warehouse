import { useState, useEffect } from 'react';
import axios from 'axios';          //using axios so that I can use HTTP request
import { Link } from 'react-router-dom'
import './List.css'
import { ProdductForm } from '../Form/ProductForm';
import { ProductDelete } from '../Component/Delete/ProductDelete';
//import { ProductUpdate } from '../Component/Update/ProductUpdate';



const Product = ({product: { _id, model, color, storage, tag, carrierLock, image, serialNum}}) => {
    
  

    return (
        <tr>
            <td>{model}</td>
            <td>{color}</td>
            <td>{storage}</td>
            <td>{tag}</td>
            <td>{carrierLock}</td>
            <td><img height="130" src={image} alt={model}/></td>
            <td>{serialNum}</td>
            <td>    <Link to={`/products/update/${_id}`}>
                        <button
                            className='button'
                        
                            >Update
                        </button> 
                    </Link>.
                <div></div>
                <br></br>
                <button 
                    className='button' 
                    onClick={(e) => ProductDelete(_id, e)}
                 >Delete
                </button>    
            </td>
        </tr>
    )
}

export const ProductList = () => {

    const[productList, setProductList] = useState([]);

    useEffect(() => {
        // accessing GET HTTP request using axios
        // axios would not let me use async function as a parameter, so i will use .then and .catch 
        axios.get ('http://localhost:9000/product')
            .then(res => { setProductList(res.data)})
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
                            <th>Carrier Lock</th>
                            <th>Image</th>
                            <th>Serial Number</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {productList.map(product => <Product key={product._id} product={product} />)}
                    </tbody>
                </table>

               
            </div>
        </>
    );
}