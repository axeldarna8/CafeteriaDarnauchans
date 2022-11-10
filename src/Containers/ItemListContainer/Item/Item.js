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
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import ListSubheader from '@mui/material/ListSubheader';



const Item = ({ producto }) => {

  return (
    <ImageList sx={{ width: 500, height: 450 }} style={styles.container}>
      <ImageListItem key="Subheader" cols={2}>
        <ListSubheader component="div" style={styles.title}>{producto.title}</ListSubheader>
      </ImageListItem >
        <ImageListItem key={producto.id} >
          <img
            src={`${producto.image}?w=248&fit=crop&auto=format`}
            srcSet={`${producto.image}?w=248&fit=crop&auto=format&dpr=2 2x`}
            alt={producto.title}
            loading="lazy"
          />
          <ImageListItemBar
            title={producto.title}
            subtitle={'$' + producto.price}
            actionIcon={
              <CardActions style={styles.button} >
                <Link to={"/producto/" + producto.id} style={styles.button} >
                  <Button size="small" color="primary"  style={styles.button}>
                    Ver Detalles
                  </Button>
                </Link>
              </CardActions>
            }
          />
        </ImageListItem>
    </ImageList>
  );
  /*return (
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
          <Typography variant="body2" color="text.secondary" style={styles.price}>
            ${producto.price}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions style={styles.button} >
        <Link to={"/producto/" + producto.id} style={styles.button} >
          <Button size="small" color="primary"  style={styles.button}>
            Ver Detalles
          </Button>
        </Link>
      </CardActions>
      
    </Card>
  );*/
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: '2rem',
    marginTop: 20
  },
  button: {
    color: "white",
    textDecoration: "none",
    textAlign: "center",
    justifyContent: "center"
  },
  title: {
    textOverflow: "ellipsis",  
    textAlign: "center",
    fontWeight: 'bold'
  },
  
  /*container: {
    width: window.innerHeight > 900 ? "25%" : "90%",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    margin: 40,
    backgroundColor: "rgba(249, 220, 92, 0.3)",
  },
  title: {
    textOverflow: "ellipsis",  
    textAlign: "center",
    fontFamily: 'Yellowtail, cursive',
  },
  button: {
    color: "black",
    textDecoration: "none",
    textAlign: "center",
    justifyContent: "center"
  },
  price:{
    fontWeight: "bold",
    textAlign: "center",
    color: "black",
    marginTop:20
  }*/
};

export default Item;
