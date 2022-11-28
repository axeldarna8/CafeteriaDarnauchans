import React, {createContext, useEffect, useState} from "react";

export const Context = createContext();

export const CartContext = ({children}) =>{
    const [cart, setCart] = useState([]);
    const [quantity, setQuantity] = useState(0);
    const [total, setTotal] = useState(0);

    useEffect(() => {
        setQuantity(cart.reduce((total, item) => total + item.cantidad, 0))
        setTotal(cart.reduce((total, item) => total + (item.cantidad * item.price), 0))
    }, [cart])
    

    const agregarItem = (item,cantidad) =>{
        if (estaenCarrito(item.id)) {
            const modificado = cart.map((producto) => {
              if (producto.id === item.id) {
                producto.cantidad += cantidad;
              }
              return producto;
            });
            setCart(modificado);
          } else {
            setCart([...cart, { ...item, cantidad }]);
          }
        setQuantity(quantity + cantidad);
        setTotal(total + (item.price * cantidad));
    }

    const deleteItem = (id) =>{
        const found = cart.find(producto => producto.id === id);
        setCart(cart.filter((item) => item.id !== id));
        setQuantity( quantity - found.cantidad)
        setTotal(total - (found.price * found.cantidad))
    }

    const estaenCarrito = (id) => cart.some((item) => item.id === id); 

    const clearCarrito = () => {
        setCart([]);
        setQuantity(0);
        setTotal(0);
    };

    return(
        <Context.Provider value={{cart, quantity, total, clearCarrito, agregarItem, deleteItem, estaenCarrito}}> 
            {children} 
        </Context.Provider>
    )
}
