import React from "react";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import {ItemListContainer} from "./Containers/ItemListContainer/ItemListContainer/ItemListContainer";
import {BrowserRouter, Routes, Route } from "react-router-dom";
import { ItemDetailContainer } from "./Containers/ItemDetailContainer/ItemDetailContainer";

const App = () =>{

    const mensaje = "Bienvenidos a la cafeteria Axemi donde podra disfrutar de nuestros productos tanto de Cafeteria como nuestra Pasteleria casera"

    return (
        <>
        <BrowserRouter>
            <Navbar/>
            <Routes>
                <Route path="/" element={<ItemListContainer greeting={mensaje} />} />
                <Route path="/categoria/:id" element={<ItemListContainer greeting={mensaje} />} />
                <Route path="/producto/:id" element={<ItemDetailContainer />} />
            </Routes>   
        </BrowserRouter>
        </>
    )
}

export default App;
