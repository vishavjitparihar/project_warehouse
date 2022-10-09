import { useState } from "react";
import axios from "axios";

import './WarehouseForm.css'


export const WarehouseForm = ({setWarehouseList}) => {

    const [warehouseData, setWarehouseData] = useState({
        warehouseName: '',
        warehouseNumber: '',
        product1: '6339e5b115304f21c8dafbe3',
        product2: '633a703777c541d3d8b26e83',
        prodcut3: '633a736877c541d3d8b26e89',
        product4: '633a76afbc5f1643a6c63b01',
        product5: '6340637497f9f8c16e759af9',
        quantity1: 0,
        max1: 100,
        quantity2: 0,
        max2: 100,
        quantity3: 0,
        max3: 100,
        quantity4: 0,
        max4: 100,
        quantity5: 0,
        max5: 100

    })

    // I don't want the page to refresh after form is submitted
    const handleClear = async () => {
        setWarehouseData({
            warehouseName: '',
            warehouseNumber: '',
            product1: '6339e5b115304f21c8dafbe3',
            product2: '633a703777c541d3d8b26e83',
            prodcut3: '633a736877c541d3d8b26e89',
            product4: '633a76afbc5f1643a6c63b01',
            product5: '6340637497f9f8c16e759af9',
            quantity1: 0,
            max1: 100,
            quantity2: 0,
            max2: 100,
            quantity3: 0,
            max3: 100,
            quantity4: 0,
            max4: 100,
            quantity5: 0,
            max5: 100
        });
    }

    const handleSubmit = async (event) => {
        // event.preventDefault() will prevent the page refresh
        event.preventDefault();
        try {
            const res = await axios.post('http://localhost:9000/warehouse', {
                warehouseName: warehouseData.warehouseName,
                warehouseNumber: warehouseData.warehouseNumber,
                product: [warehouseData.product1, warehouseData.product2, warehouseData.prodcut3, warehouseData.product4, warehouseData.product5],
                quantity: [warehouseData.quantity1, warehouseData.quantity2, warehouseData.quantity3, warehouseData.quantity4, warehouseData.quantity5],
                max: [warehouseData.max1, warehouseData.max2, warehouseData.max3, warehouseData.max4, warehouseData.max5]
            });

            //use setWarehouseList to manually add the product
            setWarehouseList(warehouseList => [...warehouseList, res.data]);
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
                                    <label className="label">Product #1</label>
                                    <input 
                                        className="input--style-3" 
                                        value={warehouseData.product1} 
                                        //using event value we are updating the model
                                        onChange={e => setWarehouseData({...warehouseData, product1: e.target.value})}
                                        placeholder="Object ID for Product 1"
                                    />
                            </div>

                            <div className="input-group">
                                    <label className="label">Product #2 </label>
                                    <input 
                                        className="input--style-3" 
                                        value={warehouseData.product2} 
                                        //using event value we are updating the model
                                        onChange={e => setWarehouseData({...warehouseData, product2: e.target.value})}
                                        placeholder="Object ID for Product 2"
                                    />
                            </div>

                            <div className="input-group">
                                    <label className="label">Product #3 </label>
                                    <input 
                                        className="input--style-3" 
                                        value={warehouseData.prodcut3} 
                                        //using event value we are updating the model
                                        onChange={e => setWarehouseData({...warehouseData, prodcut3: e.target.value})}
                                        placeholder="Object ID for Product 3"
                                    />
                            </div>

                            <div className="input-group">
                                    <label className="label">Product #4 </label>
                                    <input 
                                        className="input--style-3" 
                                        value={warehouseData.product4} 
                                        //using event value we are updating the model
                                        onChange={e => setWarehouseData({...warehouseData, product4: e.target.value})}
                                        placeholder="Object ID for Product 2"
                                    />
                            </div>

                            <div className="input-group">
                                    <label className="label">Product #5 </label>
                                    <input 
                                        className="input--style-3" 
                                        value={warehouseData.product5} 
                                        //using event value we are updating the model
                                        onChange={e => setWarehouseData({...warehouseData, product5: e.target.value})}
                                        placeholder="Object ID for Product 2"
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