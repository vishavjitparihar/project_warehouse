import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AppNav } from './Component/Nav/Appnav';
import { ProductUpdate } from './Component/Update/ProductUpdate';
import { ProductList } from "./List/ProductList"
import { WarehouseList } from './List/WarehouseList';
import WelcomePage from "./Pages/WelcomePage/WelcomePage"

export const App = () => {
    return (
    
         // Our App componnet will use the BrowserRouter for everything
         // Everything in here will be managed by the BrowserRouter
         // Each route will 'routes' us to another 'page'
        <BrowserRouter>
            <AppNav />
            <Routes>
                <Route path="/" element={<WelcomePage />}/>
                <Route path="/products" element={<ProductList />}/>
                <Route path="/warehouse" element={<WarehouseList />}/>
                <Route path="/products/update/:id" element={<ProductUpdate />}/>

            </Routes>
        </BrowserRouter> 
    )
}