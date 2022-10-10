import { useState } from "react";
import axios from "axios";

import './ProductUpdate.css'
import { useParams } from "react-router-dom";

//This component is for the creation of a Product in our Database


export const ProductUpdate = ({setProductList}) => {

    const {id} = useParams();

    const [productData, setProductData] = useState({
        productModel: '',
        productColor: '',
        productStorage: null,
        productTag: '',
        productRefurbished: false,
        productCellular: false,
        productLock: '',
        productImage: '',
        productSerialNumber: ''
    });

    // I don't want the page to refresh after form is submitted
    const handleClear = async () => {
        setProductData({
            productModel: '',
            productColor: '',
            productStorage: null,
            productTag: '',
            productRefurbished: false,
            productCellular: false,
            productLock: '',
            productImage: '',
            productSerialNumber: ''
        });
    }

    const handleSubmit = async (event) => {
        // event.preventDefault() will prevent the page refresh
        event.preventDefault();
        try {
            const res = await axios.put(`http://localhost:9000/product/${id}`, {
                serialNum: productData.productSerialNumber, 
                model: productData.productModel,
                color: productData.productColor,
                storage: productData.productStorage,
                isRefurbished: productData.productRefurbished,
                tag: productData.productTag,
                isCellular: productData.productCellular,
                carrierLock: productData.productLock,
                image: productData.productImage
            });

            //use setProductList to manually add the product
            setProductList(productList => [...productList, res.data]);
            event.target.reset();
            handleClear();

        } catch (err) {
            console.error(err);
        }
    }


    return (
        <div className="page-wrapper bg-gra-01 p-t-180 p-b-100 font-poppins">
        <div className="wrapper wrapper--w780">
            <div className="card card-3">
                <div className="card-heading"></div>
                <div className="card-body">
                    <h2 className="title">Update the Existing Product</h2>

                    <form onSubmit={handleSubmit}>
                        
                        <div className="input-group">
                                <input 
                                    className="input--style-3" 
                                    value={productData.productModel} 
                                    //using event value we are updating the model
                                    onChange={e => setProductData({...productData, productModel: e.target.value})}
                                    placeholder="Product's Model Name"
                                />
                        </div>
                        
                        <div className="input-group">
                            <input 
                                className="input--style-3" 
                                value={productData.productTag}
                                onChange={e => setProductData({...productData, productTag: e.target.value})}
                                placeholder="Tag: ex. Mobile Phone"
                            />
                        </div>


                        <div className="input-group">
                            <input 
                                className="input--style-3" 
                                value={productData.productColor}
                                onChange={e => setProductData({...productData, productColor: e.target.value})}
                                placeholder="Color of the Product"
                            />
                        </div>


                        <div className="input-group">
                            <div className="rs-select2 js-select-simple select--no-search">
                                <select onChange={e => setProductData({...productData, productStorage: e.target.value})}>
                                    <option>Storage in GB</option>
                                    <option>128</option>
                                    <option>256</option>
                                    <option>512</option>
                                    <option>1024</option>
                                </select>
                                <div className="select-dropdown"></div>
                            </div>
                        </div>

                        
                        <div className="input-group">
                            <input
                                className="input--style-3" 
                                value={productData.productSerialNumber}
                                onChange={e => setProductData({...productData, productSerialNumber: e.target.value})}
                                placeholder="Serial Number"
                            />
                        </div>

                        <div className="input-group">
                            <input
                                className="input--style-3" 
                                value={productData.productLock}
                                onChange={e => setProductData({...productData, productLock: e.target.value})}
                                placeholder="Carrier Lock"
                            />
                        </div>

                        <div className="input-group">
                            <input
                                className="input--style-3" 
                                value={productData.productImage}
                                onChange={e => setProductData({...productData, productImage: e.target.value})}
                                placeholder="Image URL"
                            />
                        </div>

                        <div className="booleanVals">
                            <label htmlFor="cell">Cellular:</label>
                            <input id ="cell"
                                type="checkbox"
                                onChange={() => setProductData({...productData, productCellular: !productData.productCellular})}
                            /> 

                            <label htmlFor="new">Refurbished:</label>
                            <input id ="new"
                                type="checkbox"
                                onChange={() => setProductData({...productData, productRefurbished: !productData.productRefurbished})}
                            /> 

                        </div>
                        
                        <div>
                            <br></br>
                            <br></br>
                            <br></br>
                        </div>
                        <div className="p-t-10">
                            <button className="btn btn--pill btn--green" type="submit">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
    )
}