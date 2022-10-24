import React from "react";
import {styles} from './ItemListContainer.style';
import { Link, NavLink } from "react-router-dom";

const datos ={
    "precio": 150,
    "id": 1,
    "titulo": "Capuccino",
    "thumbnailUrl": "images/capuccino1.png"
  };

export const ItemListContainer = (props) => {
    
    return(
        <>
        <p style={styles.container} > {props.greeting} </p>
        </>
    )
}

