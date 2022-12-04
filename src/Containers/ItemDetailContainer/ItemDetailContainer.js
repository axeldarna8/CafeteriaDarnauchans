import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";
import { getDoc, collection, doc } from "firebase/firestore";
import { db } from "../../firebase/firebase";

export const ItemDetailContainer = (props) => {
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);

  const { id } = useParams();

  

  useEffect(() => {

    const productCollection = collection(db, 'Items')
    const refDoc = doc(productCollection, id);

    getDoc(refDoc)
    .then(result =>{
      setProduct({
        id: result.id,
        ...result.data()
      })
    })
    .catch((error) =>{
      console.log(error);
    })
    .finally(setLoading(false));
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