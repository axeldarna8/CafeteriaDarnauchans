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
                <Link style={styles.categorias} to="/categoria/ropa"> Ropa</Link>
                <Link style={styles.categorias} to="/categoria/electronica"> Electronica</Link>
                <Link style={styles.categorias} to="/categoria/joyeria"> Joyeria </Link>
            </nav>
            {children}
            <Link to="/cart">
            <CartWidget/>
            </Link>
        </header>
    )
}

export default Navbar

