import React from 'react';
import logo from '../../assets/logo.jpg'
import {styles} from './Navbar.style'
import { CartWidget } from '../CartWidget/CartWidget';

const Navbar = (props) =>{

    const {children} = props;

    return (
        <header style={styles.container}>
            <img style={styles.imagenes} src={logo} alt="" />
            <h1> Cafeteria y Pasteleria Axemi </h1>
            <nav>
                <a style={styles.categorias} href=""> Inicio</a>
                <a style={styles.categorias} href=""> Cafeteria</a>
                <a style={styles.categorias} href=""> Pasteleria</a>
                <a style={styles.categorias} href=""> Productos Caseros</a>
            </nav>
            {children}
            <CartWidget/>
        </header>
    )
}

export default Navbar

