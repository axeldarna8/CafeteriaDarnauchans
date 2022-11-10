import React, { useEffect, useState } from "react";
import {styles} from './ItemListContainer.style';
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";



export const ItemListContainer = (props) => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    const { id } = useParams();

    const URL_BASE = 'https://fakestoreapi.com/products'
    const URL_CAT = `${URL_BASE}/category/${id}`

    useEffect(() => {
        const getProducts = async () => {
            try {
            const res = await fetch(id ? URL_CAT : URL_BASE);
            const data = await res.json();
            const productos = data.map(item => {
              return {...item, stock:Math.floor(Math.random() * 50)}
            });
            setProducts(productos);
          } catch {
            console.log("error");
          } finally {
            setLoading(false);
          }
        };
        getProducts();
      }, [id, URL_BASE, URL_CAT]);
    
    return(
        <>
        <p style={styles.container} > {props.greeting} </p>
        {<>{loading ? <h1 style={styles.loading}>Cargando...</h1> : <ItemList products={products} />}</>}
        </>
    )
}

