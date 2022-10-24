import React from "react";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import {ItemListContainer} from "./Containers/ItemListContainer/ItemListContainer";
import Productos from "./Containers/ItemListContainer/Items/Productos";
import {BrowserRouter, Routes, Route } from "react-router-dom";

const App = () =>{

    const mensaje = "Bienvenidos a la cafeteria Axemi donde podra disfrutar de nuestros productos tanto de Cafeteria como nuestra Pasteleria casera"

    return (
        <>
        <BrowserRouter>
            <Navbar/>
            <ItemListContainer greeting = {mensaje} />
            <Productos/> 
        </BrowserRouter>
        </>
    )
}

export default App;
