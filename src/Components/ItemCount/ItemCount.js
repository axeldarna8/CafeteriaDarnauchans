import React, { useState } from "react";

const ItemCount = ({ stock, initial, onAdd }) => {
  const [count, setCount] = useState(initial);

  const subtract = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const add = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };

  return (
    <div style={styles.container}>
      <button onClick={subtract} style={styles.button}>-</button>
      <h2>{count}</h2>
      <button onClick={add} style={styles.button} >+</button>
      <button disabled={stock === 0} onClick={()=>onAdd(count)}>
        <span>{stock === 0 ? 'No tenemos stock' : 'Agrega al carrito'}</span>
      </button>
    </div>
  );
};

const styles = {
    container:{
      display: "flex",
      justifyContent: "center",
      gap: '1rem',
      alignItems: "center",
    },
    button:{
      paddingLeft: '1rem',
      paddingRight: '1rem'
    }
  }

export default ItemCount;