import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Items from './Items';
import { datos } from '../../Datos/Datos';
import { Link, NavLink } from "react-router-dom";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(4),
  marginLeft: 'auto',
  textAlign: 'center',
  justifyContent: 'space-between',
  color: theme.palette.text.secondary,
}));

export default function Productos() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={3}>
        {
            datos.map(producto => (
                <Grid item xs={6} sm={6} md={4} lg={3}>
                    <Items key={producto.id} producto={producto}/>
                </Grid>
            ))
        }
      </Grid>
    </Box>
  );
}
