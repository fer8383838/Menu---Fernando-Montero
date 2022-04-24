import React from 'react';
import CartWidget from './CartWidget';
import '../App.css';

const NavBar = () => {

  return (
    <>
      <header>
        <div className='contenedor'>
          <div className='barra'>

            <div>
              <span>Menu</span>
            </div>

            <nav className='nav'>
              <a href="/">Inicio</a>
              <a href="/">
                Productos <span></span>
              </a>
              <a href="/">Blog</a>
              <a href="/">Contacto</a>
            </nav>

          </div>
        </div>

      </header>

      <div className='car'>
        <img src="data:image/png;base64,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" alt="car" />
        <CartWidget/>
      </div>

    </>
  );
};

export default NavBar;
