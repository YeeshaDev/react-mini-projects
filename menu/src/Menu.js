import React from "react";

export default function Menu({items}){
    return (
        <section className="menu--items">
        {items.map((item) => {
            const{id,title,desc,price,img} = item
            return(
                <article key={id} className="menuItems">
                    <div className="image">
            <img src={img} alt={title} className="menu--img"/>
            </div>
            <div>
            <div className="title--flex">
            <h3 className="title">{title}</h3>
            <h4 className="price">{price}</h4>
            </div>
            <p className="desc">{desc}</p>
            </div>
                </article>
            )
        })}
        </section>
    )
}