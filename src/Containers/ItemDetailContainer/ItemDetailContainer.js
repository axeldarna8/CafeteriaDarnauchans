import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";
import datos from "../Datos/Datos";

export const ItemDetailContainer = (props) => {
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);

  const { id } = useParams();

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await fetch("https://fakestoreapi.com/products/" + id)
        const data = await res.json();
        setProduct(data);
      } catch {
        console.log("error");
      } finally {
        setLoading(false);
      }
    };
    getProducts();
  }, [id]);
  return (
    <>
        <p style={styles.container} > {props.greeting} </p>
        {<>{loading ? <h1 style={styles.loading}>Cargando...</h1> : <ItemDetail product={product} />}</>}
    </>
  );
}

const styles = {
    container:{
        textAlign: 'center',
        marginTop: 20,
        fontWeight: 'bold',
    },
    loading:{
      textAlign: 'center',
      marginTop: 20,
    }
};