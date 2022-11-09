import React, { useState, useContext } from "react";
import ItemCount from "../../Components/ItemCount/ItemCount";
import Items from "../ItemListContainer/Item/Item"
import  datos  from '../Datos/Datos';
import { Link } from "react-router-dom";

const ItemDetail = ({ product }) => {
    return (
      <>
      <div style={styles.container}>
        <div >
          <img alt={product.title} src={product.image} style={styles.image}/>
        </div> 
        <div style={styles.text}>
          <div > 
            {product.description} 
          </div>
          <span >${product.price}</span>
          <ItemCount stock={product.stock} initial={1}/>
        </div>
      </div>
      </>
      );
};

const styles = {
    container:{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      margin: 60
    },
    image:{
        height: '50%',
        width: '50%'
    },
    text:{
      display:"flex",
      flexDirection: "column",
      textAlign: "center",
      fontWeight: "bold",
      gap: "1rem",
    }
  }
    
export default ItemDetail;