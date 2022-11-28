import React from "react";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import {ItemListContainer} from "./Containers/ItemListContainer/ItemListContainer/ItemListContainer";
import {BrowserRouter, Routes, Route } from "react-router-dom";
import { ItemDetailContainer } from "./Containers/ItemDetailContainer/ItemDetailContainer";
import { Cart } from "./Containers/CartView/Cart";
import { CartContext } from "./Context/CartContext";

const App = () =>{

    const mensaje = "Bienvenidos a la tienda Axemi donde podra disfrutar de variedad de productos"

    return (
        <>
        <BrowserRouter>
            <CartContext>
                <Navbar/>
                <Routes>
                    <Route path="/" element={<ItemListContainer greeting={mensaje} />} />
                    <Route path="/categoria/:id" element={<ItemListContainer greeting={mensaje} />} />
                    <Route path="/producto/:id" element={<ItemDetailContainer />} />
                    <Route path="/cart" element={<Cart estilo={false} color={'black'}/>}/>
                    <Route path="*" element={<ItemListContainer />} />
                </Routes>  
            </CartContext> 
        </BrowserRouter>
        </>
    )
}

export default App;
