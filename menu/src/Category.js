import React from "react";

export default function Category({filterMenu,category}){
    return (
        <section className="categories">
        {category.map((category,index) => {
            return (
                <button key={index} 
                className="menu--btn"
                onClick={() => filterMenu(category)}
                >
                    {category}
                </button>
            )
        })}
        </section>
    )
}