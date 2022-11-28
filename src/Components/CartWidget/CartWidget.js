import React, {useContext} from "react";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Badge } from "@mui/material";
import { Context } from "../../Context/CartContext";

export const CartWidget = () => {
    const {quantity} = useContext(Context);
    return(
    <>
    <Badge badgeContent={quantity} color="primary">
        <ShoppingCartIcon fontSize="large"/>
    </Badge>
    </>
    )
}
