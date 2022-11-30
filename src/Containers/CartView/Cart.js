import React, {useContext} from 'react';
import { Context } from '../../Context/CartContext';
import { Link } from "react-router-dom";
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import ListSubheader from '@mui/material/ListSubheader';
import { Grid, IconButton, Typography } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';


export const Cart = () => {
  const { cart, quantity, total, clearCarrito, deleteItem } = useContext(Context);


  function FormRow(){
    return(
      <React.Fragment>
        <>
          {cart.map((producto) => (
            <ImageList sx={{ width: 350, height: 500 }} style={styles.container}>
              <ImageListItem key="Subheader" cols={2}>
                <ListSubheader component="div" style={styles.title}></ListSubheader>
              </ImageListItem>
              <ImageListItem key={producto.id}>
                <img
                  src={`${producto.image}?w=248&fit=crop&auto=format`}
                  srcSet={`${producto.image}?w=248&fit=crop&auto=format&dpr=2 2x`}
                  alt={producto.title}
                  loading="lazy"
                />
                  <ImageListItemBar
                    title={producto.title}
                    subtitle={'$' + producto.price}
                    style={styles.title}
                  />
                  <IconButton style={styles.deleteIcon}>
                    <DeleteIcon fontSize='large' color='inherit' onClick={() => deleteItem(producto.id)}/>
                  </IconButton>
              </ImageListItem>  
          </ImageList>
          ))}
        </>
      </React.Fragment>
    )
  }
  return (
    <>
      {cart.length === 0 ? (
        <>
          <div style={styles.container}>
            <h1 >
              No agregaste productos aun, puedes ir <Link to="/" style={styles.link}>AQUI</Link>
            </h1>
            <h2>Gracias por tu visita</h2>
          </div>
        </>
      ) : (
        <>
          <div>
            <Grid container spacing={3} >
              <Grid item xs={12}>
                <Typography align='center' gutterBottom variant='h4' style={styles.container}>
                  Carrito de compras
                </Typography>
              </Grid>
              <Grid item xs={12} sm={8} md={9} container spacing={2}>
                <FormRow/>
              </Grid>
              <Grid item xs={12} sm={4} md={3} >
                <Typography  gutterBottom variant='h5' style={styles.container}>
                <>
                  <h3> Detalle </h3>
                  {cart.map((producto) => (
                    <h6> {producto.title} - Cantidad {producto.cantidad}</h6>
                  ))}
                </>
                </Typography>
                <Typography  gutterBottom variant='h4' style={styles.container}>
                  Total: ${total}
                </Typography>
                <div style={styles.display}>
                  <button >
                    Finalizar compra
                  </button>
                  <button onClick={clearCarrito}>
                    Vaciar carrito
                  </button>
                </div>
              </Grid>
            </Grid>
          </div>
        </>
      )}
    </>
  )
}



const styles = {
  container:{
    display: "flex",
    flexDirection: "column",
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
  link:{
    textAlign: "center",
    textDecoration: "none",
    color: "black"
  },
  button: {
    color: "white",
    textDecoration: "none",
    textAlign: "center",
    justifyContent: "center"
  },
  title: {
    textOverflow: "ellipsis",  
    textAlign: "left",
    fontWeight: 'bold'
  },
  display:{
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    flexWrap: "wrap",
  },
  deleteIcon:{
    display:'flex',
    flexDirection:'row',
    justifyContent:'right',
    color:'white'
  }
}
