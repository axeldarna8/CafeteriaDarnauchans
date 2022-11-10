import React from "react";
import ItemCount from "../../Components/ItemCount/ItemCount";
import { Link } from "react-router-dom";
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import ListSubheader from '@mui/material/ListSubheader';

const ItemDetail = ({ product }) => {
    const onAdd = (count) =>{
      console.log("Se recibieron objetos en el carrito")
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
          <ItemCount stock={product.stock} initial={1} onAdd={onAdd}/>
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