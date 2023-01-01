import React from 'react';
import {Link} from 'react-router-dom'

function Cocktails({id,
    name,
    image,
    info,
    glass,
}) {
    return (
        <main className='cocktails-info'>
          <section>
            <img src={image} 
            alt={name}
            className="drinks-img"
            />
            <article className='cocktail-text'>
            <h1 className='name'>{name}</h1>
            <h4 className='glass'>{glass}</h4>
            <p className='info'>{info}</p>
            <Link to={`/cocktail/${id}`}>
             <button className='drinks-btn'>Details</button>
             </Link>
             </article>
            </section>  
        </main>
    )
}

export default Cocktails
