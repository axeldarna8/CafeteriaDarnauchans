import React, { useState, useContext } from "react";
import ItemCount from "../../Components/ItemCount/ItemCount";
import Items from "../ItemListContainer/Item/Item"
import  datos  from '../Datos/Datos';
import { Link } from "react-router-dom";

const ItemDetail = ({ product }) => {
    return (
        <div style={styles.container}>
            <img alt={product.title} src={product.image} style={styles.image}/>
        </div>
      );
};

const styles = {
    container:{
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-around",
      alignItems: "center",
      flexWrap: "wrap",
      margin: 60
    },
    image:{
        height: '20%',
        width: '10%'
    }
  }
    
export default ItemDetail;