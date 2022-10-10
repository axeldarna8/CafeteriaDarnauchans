import { margin } from "@mui/system";
import React from "react";
import {styles} from './ItemListContainer.style';

const ItemListContainer = (props) => {

    return(
        <p style={styles.container} > {props.greeting} </p>
    )
}

export default ItemListContainer