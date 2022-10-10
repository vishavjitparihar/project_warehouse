import axios from "axios";

export const ProductDelete = async (id, event) => {
    event.preventDefault();
    console.log(`going to delete product that has a ObjectID of ${id}`);
    await axios.delete(`http://localhost:9000/product/${id}`);

    //this will manually refresh the page
    window.location.reload(false);

}