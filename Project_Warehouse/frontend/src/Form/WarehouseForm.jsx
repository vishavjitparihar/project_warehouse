import { useState } from "react";
import axios from "axios";

import './WarehouseForm.css'


export const WarehouseForm = () => {

    const [warehouseData, setWarehouseData] = useState({

    })


    const handleSubmit = async (event) => {
        // event.preventDefault() will prevent the page refresh
        event.preventDefault();
        // try {
        //     const res = await axios.post('http://localhost:9000/warehouse', {
        //         serialNum: productData.productSerialNumber, 
        //         model: productData.productModel,
        //         color: productData.productColor,
        //         storage: productData.productStorage,
        //         isRefurbished: productData.productRefurbished,
        //         tag: productData.productTag,
        //         isCellular: productData.productCellular,
        //         carrierLock: productData.productLock,
        //         image: productData.productImage
        //     });

        //     //use setProductList to manually add the product
        //     setProductList(productList => [...productList, res.data]);
        //     event.target.reset();
        //     handleClear();

        // } catch (err) {
        //     console.error(err);
        // }        
    }


    return (
        <div className="page-wrapper bg-gra-01 p-t-180 p-b-100 font-poppins">
            <div className="wrapper wrapper--w780">
                <div className="card card-3">
                    <div className="card-heading"></div>
                    <div className="card-body">
                        <h2 className="title">Add New Warehouse</h2>
                        
                        <form onSubmit={handleSubmit}>

                            <div className="input-group">
                                    <input 
                                        className="input--style-3" 
                                        value={warehouseData.warehouseName} 
                                        //using event value we are updating the model
                                        onChange={e => setWarehouseData({...warehouseData, warehouseName: e.target.value})}
                                        placeholder="Warehouse Name"
                                    />
                            </div>

                            <div className="input-group">
                                    <input 
                                        className="input--style-3" 
                                        value={warehouseData.warehouseNumber} 
                                        //using event value we are updating the model
                                        onChange={e => setWarehouseData({...warehouseData, warehouseNumber: e.target.value})}
                                        placeholder="Warehouse Number"
                                    />
                            </div>

                            <div className="input-group">
                                    <input 
                                        className="input--style-3" 
                                        value={warehouseData.warehouseProduct1} 
                                        //using event value we are updating the model
                                        onChange={e => setWarehouseData({...warehouseData, warehouseProduct1: e.target.value})}
                                        placeholder="Product 1 Obj ID"
                                    />
                                    <input 
                                        className="input--style-3" 
                                        value={warehouseData.warehouseProduct1} 
                                        //using event value we are updating the model
                                        onChange={e => setWarehouseData({...warehouseData, warehouseProduct1: e.target.value})}
                                        placeholder="Product 1 Obj ID"
                                    />
                                    <input 
                                        className="input--style-3" 
                                        value={warehouseData.warehouseQuantity1} 
                                        //using event value we are updating the model
                                        onChange={e => setWarehouseData({...warehouseData, warehouseQuantity1: e.target.value})}
                                        placeholder="Current Quantity of Product 1"
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
    );
}