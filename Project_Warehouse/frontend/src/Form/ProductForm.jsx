import { useState } from "react";
import './ProductForm.css'

//This component is for the creation of a Product in our Database


export const ProdductForm = () => {

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
    const handleSubmit = async (event) => {
        // event.preventDefault() will prevent the page refresh
        event.preventDefault();
        console.log(productData);
    }

    return (
        <div className="page-wrapper bg-gra-01 p-t-180 p-b-100 font-poppins">
        <div className="wrapper wrapper--w780">
            <div className="card card-3">
                <div className="card-heading"></div>
                <div className="card-body">
                    <h2 className="title">Add Product</h2>

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