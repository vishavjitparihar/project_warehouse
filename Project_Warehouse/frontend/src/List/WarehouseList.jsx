import { useState, useEffect } from 'react';
import axios from 'axios';

const Warehouse = ({warehouse: {warehouseName, warehouseNumber, product}}) => {
    return (
        <tr>
            <td>{warehouseName}</td>
            <td>{warehouseNumber}</td>
            <td>{product[0].model}</td>
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
        <table>

            <thead>
                <tr>
                    <th>Warehouse</th>
                    <th>Number</th>
                    <th>Model</th>
                    <th>Color</th>
                    <th>Storage</th>
                    <th>Avilable</th>
                    <th>Max Capacity</th>
                </tr>
            </thead>

            <tbody>
                {warehouseList.map(warehouse => <Warehouse key={warehouse._id} warehouse={warehouse} />)}
            </tbody>
            
        </table>
    );
}