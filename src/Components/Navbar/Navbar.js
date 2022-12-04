import React from 'react';
import logo from '../../assets/logo.jpg'
import {styles} from './Navbar.style'
import { CartWidget } from '../CartWidget/CartWidget';
import { Link, NavLink } from "react-router-dom";

const Navbar = (props) =>{

    const {children} = props;

    return (
        <header style={styles.container}>
            <Link style={styles.imagenes} to="/">
            <img style={styles.imagenes} src={logo} alt="" />
            </Link>
            <h1> Tienda de productos Axemi </h1>
            <nav>
                <Link style={styles.categorias} to="/"> Inicio</Link>
                <Link style={styles.categorias} to="/category/men's clothing"> Ropa de hombre </Link>
                <Link style={styles.categorias} to="/category/women's clothing"> Ropa de mujer </Link>
                <Link style={styles.categorias} to="/category/electronics"> Electronica </Link>
                <Link style={styles.categorias} to="/category/jewelery"> Joyeria </Link>
            </nav>
            {children}
            <Link to="/cart">
            <CartWidget/>
            </Link>
        </header>
    )
}

export default Navbar

