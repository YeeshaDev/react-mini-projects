import React from "react";

export default function Card({list}){
    return (
   <section>
    {list.map((people) => {
        const {name,age,id,image} = people;
        return <article key={id} className="people">
            <img src={image} alt={name} className="image"/>
            <div>
            <h3>{name}</h3>
            <p>{age}</p>
            </div>
        </article>
    }) }
</section>
    );
}