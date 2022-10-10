import React from 'react';
import  './Navbar.css';
import logo from '../../assets/logo.jpg'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const Header = () =>{
    return (
        <header>
            <img src={logo} alt="" />
            <h1> Titulo de mi pagina</h1>
            <nav>
                <a href=""> Categoria 1</a>
                <a href=""> Categoria 2</a>
                <a href=""> Categoria 3</a>
                <a href=""> Categoria 4</a>
            </nav>
            <ShoppingCartIcon color="primary" fontSize="large"/>
        </header>
    )
}

export default Header