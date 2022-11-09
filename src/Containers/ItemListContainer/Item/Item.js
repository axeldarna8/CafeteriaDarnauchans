import React from "react";
import Card from "@mui/material/Card";
import {
  CardContent,
  CardMedia,
  Typography,
  Button,
  CardActionArea,
  CardActions,
} from "@mui/material";
import { Link } from "react-router-dom";



const Item = ({ producto }) => {

  const onAdd = (count) =>{
    console.log("Se recibieron objetos en el carrito")
  };
  return (
    <Card sx={{ maxWidth: 345 }} style={styles.container}>
      <CardActionArea>
      <Link to={"/producto/" + producto.id}>
        <CardMedia
          component="img"
          height="140"
          image={producto.image}
          alt={producto.alt}
        />
        </Link>
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            style={styles.title}
          >
            {producto.title}
          </Typography>
          <Typography variant="body2" color="text.secondary" style={styles.title}>
            ${producto.precio}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions >
        <Link to={"/producto/" + producto.id}>
          <Button size="small" color="primary" style={styles.button}>
            Ver Detalles
          </Button>
        </Link>
      </CardActions>
      
    </Card>
  );
};

const styles = {
  container: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    margin: 40,
    backgroundColor: "rgba(249, 220, 92, 0.3)",
  },
  title: {
    textOverflow: "ellipsis",  
    textAlign: "center"
  },
  button: {
    color: "black",
    textDecoration: "none",
    textAlign: "center"
  },
};

export default Item;
