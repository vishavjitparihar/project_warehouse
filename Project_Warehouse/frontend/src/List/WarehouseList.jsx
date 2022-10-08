import { useState, useEffect } from 'react';
import axios from 'axios';
import './List.css'
import { WarehouseForm } from '../Form/WarehouseForm';

const Warehouse = ({warehouse: {warehouseName, warehouseNumber, product, quantity, max}}) => {
    return (
        <tr>
            <td>{warehouseName}</td>
            <td>{warehouseNumber}</td>
            <td>
                <table>
                    <thead>
                        <tr>
                            <th>Serial Number</th>
                            <th>Model</th>
                            <th>Current Capacity</th>
                            <th>Maximum Capacity</th>
                        </tr>
                    </thead>
                    
                    <tbody>
                        <tr>
                            <td>{product[0].serialNum}</td>
                            <td>{product[0].model}</td>
                            <td>{quantity[0]}</td>
                            <td>{max[0]}</td>
                        </tr>

                        <tr>
                            <td>{product[1].serialNum}</td>
                            <td>{product[1].model}</td>
                            <td>{quantity[1]}</td>
                            <td>{max[1]}</td>
                        </tr>

                        <tr>
                            <td>{product[2].serialNum}</td>
                            <td>{product[2].model}</td>
                            <td>{quantity[2]}</td>
                            <td>{max[2]}</td>
                        </tr>

                        <tr>
                            <td>{product[3].serialNum}</td>
                            <td>{product[3].model}</td>
                            <td>{quantity[3]}</td>
                            <td>{max[3]}</td>
                        </tr>

                        <tr>
                            <td>{product[4].serialNum}</td>
                            <td>{product[4].model}</td>
                            <td>{quantity[4]}</td>
                            <td>{max[4]}</td>
                        </tr>

                    </tbody>
                    

                </table>
            </td>
            
            
        </tr>
    );
}

export const WarehouseList = () => {

    const [warehouseList, setWarehouseList] = useState([]);
    
    useEffect(() => {
        axios.get('http://localhost:9000/warehouse')
            .then(res => { setWarehouseList(res.data); console.log(res.data) })
            .catch(err => console.error(err));
    },[]);
    


    return (
        <>
            <div className="TablePage">
                <WarehouseForm setWarehouseList={setWarehouseList}/>
                <table className="TableMain">
                    <thead>
                        <tr>
                            <th>Warehouse</th>
                            <th>Number</th>
                            <th>Inventory</th>
                        </tr>
                    </thead>

                    <tbody>
                        {warehouseList.map(warehouse => <Warehouse key={warehouse._id} warehouse={warehouse} />)}
                    </tbody>

                </table>
            </div>
        </>
    );
}