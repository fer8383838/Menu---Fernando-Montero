import React from 'react';


const Hero = ({ title }) => {

  return (
    <section>
      <div>
        <article>
          <h1>{title}</h1>
          <button>Comprar</button>
        </article>
      </div>
    </section>
  );
};

export default Hero;
