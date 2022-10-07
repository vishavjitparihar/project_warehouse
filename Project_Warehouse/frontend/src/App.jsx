import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AppNav } from './Component/Nav/Appnav';
import { ProductList } from "./List/ProductList"
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


            </Routes>
        </BrowserRouter> 
    )
}