import * as React from 'react';
import Items from '../Item/Item';


export default function ItemList({products}) {
  return (
    <div style={styles.container}>
        {products.map(producto => (
            <Items key={producto.id} producto={producto}/>
            ))}
    </div>
  );
}

const styles = {
  container:{
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    flexWrap: "wrap",
  }
}

