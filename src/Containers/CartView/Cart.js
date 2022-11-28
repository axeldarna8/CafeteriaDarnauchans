import React, {useContext} from 'react';
import { Context } from '../../Context/CartContext';
import { Link } from "react-router-dom";

export const Cart = ({ estilo, color }) => {
  const { cart } = useContext(Context);
  return (
    <>
      {cart.length === 0 ? (
        <>
          <h1 className={estilo ? "red" : "green"}>
            No agregaste productos aun, puedes ir <Link to="/">ACA</Link>
          </h1>
          <h2 className={`tamanio ${color || ''}`}>Gracias por tu visita</h2>
        </>
      ) : (
        <>
          {cart.map((producto) => (
            <div style={styles.container}>
              <div style={styles.text}>
                <h1 key={producto.id}>
                  <img alt={producto.title} src={producto.image}/>
                  <h1>{producto.title}</h1>
                  <h2>${producto.price}</h2>
                </h1>
              </div>
            </div>
          ))}
        </>
      )}
    </>
  )
}

const styles = {
  container:{
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
    marginTop: 75,
    marginLeft: '10%',
    marginRight: '10%',
    marginBottom: 35,
    border: 'solid 2px black',
    gap: '2rem'
  },
  text:{
    display:"flex",
    flexDirection: "column",
    textAlign: "center",
    gap: "3rem",
  },
}
