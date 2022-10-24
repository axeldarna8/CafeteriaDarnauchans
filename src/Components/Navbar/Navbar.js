import React from 'react';
import logo from '../../assets/logo.jpg'
import {styles} from './Navbar.style'
import { CartWidget } from '../CartWidget/CartWidget';
import { Link, NavLink } from "react-router-dom";

const Navbar = (props) =>{

    const {children} = props;

    return (
        <header style={styles.container}>
            <img style={styles.imagenes} src={logo} alt="" />
            <h1> Cafeteria y Pasteleria Axemi </h1>
            <nav>
                <Link style={styles.categorias} to="/"> Inicio</Link>
                <Link style={styles.categorias} to="/cafeteria"> Cafeteria</Link>
                <Link style={styles.categorias} to="/pasteleria"> Pasteleria</Link>
                <Link style={styles.categorias} to="/productoscaseros"> Productos Caseros</Link>
            </nav>
            {children}
            <CartWidget/>
        </header>
    )
}

export default Navbar

