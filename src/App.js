import React from "react";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer";

const App = () =>{

    const mensaje = "Bienvenidos a la cafeteria Axemi donde podra disfrutar de nuestros productos tanto de Cafeteria como nuestra Pasteleria casera"

    return (
        <>
            <Navbar/>
            <ItemListContainer greeting = {mensaje} />
        </> 
    )
}

export default App;
