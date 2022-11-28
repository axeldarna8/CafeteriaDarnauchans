import React, {useState, useContext} from "react";
import ItemCount from "../../Components/ItemCount/ItemCount";
import { Link } from "react-router-dom";
import ImageListItem from '@mui/material/ImageListItem';
import ListSubheader from '@mui/material/ListSubheader';
import { Context } from "../../Context/CartContext";

const ItemDetail = ({ product }) => {
    
    const { cart, agregarItem, estaenCarrito} = useContext(Context);

    const onAdd = (count) =>{
      console.log("se agregaron " + count + " items");
      agregarItem(product, count);
    };

    
    return (
      <>
      <div style={styles.container}>
        <div >
          <img alt={product.title} src={product.image}/>
        </div> 
        <div style={styles.text}>
          <ImageListItem key="Subheader" cols={2}>
            <ListSubheader component="div" style={styles.title}>{product.title}</ListSubheader>
          </ImageListItem >
          <div > 
            {product.description} 
          </div>
          <span >${product.price}</span>
          <ItemCount stock={15} initial={1} onAdd={onAdd}/>
        </div>
      </div>
      </>
      );
};

const styles = {
    container:{
      display: "flex",
      justifyContent: "space-evenly",
      alignItems: "center",
      marginTop: 75,
      marginLeft: '10%',
      marginRight: '10%',
      marginBottom: 35,
      border: 'solid 2px black',
      gap: '2rem'
    },
    text:{
      display:"flex",
      flexDirection: "column",
      textAlign: "center",
      gap: "3rem",
    },
  }
    
export default ItemDetail;