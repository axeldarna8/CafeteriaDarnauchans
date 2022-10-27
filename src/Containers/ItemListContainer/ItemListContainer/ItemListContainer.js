import React from "react";
import {styles} from './ItemListContainer.style';
import ItemList from "../ItemList/ItemList";


export const ItemListContainer = (props) => {
    
    return(
        <>
        <p style={styles.container} > {props.greeting} </p>
        <ItemList/> 
        </>
    )
}

