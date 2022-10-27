import * as React from 'react';
import Items from '../Item/Item';
import  datos  from '../../Datos/Datos';


export default function ItemList() {
  return (
    <div style={styles.container}>
        {datos.map(producto => (
            <Items key={producto.id} producto={producto}/>
            ))}
    </div>
  );
}

const styles = {
  container:{
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    flexWrap: "wrap",
  }
}

