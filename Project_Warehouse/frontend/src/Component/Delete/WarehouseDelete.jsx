import axios from "axios";

export const WarehouseDelete = async (id, event) => {
    event.preventDefault();
    console.log(`going to delete product that has a Warehouse Number of ${id}`);
    await axios.delete(`http://localhost:9000/warehouse/${id}`);

    //This will manually refresh the page
    window.location.reload(false);
}