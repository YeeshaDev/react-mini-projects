import React from "react";

export default function Card(props){
    let badgeText 
    if (props.item.openSpots === 0){
        badgeText = "SOLD OUT"
    }else if (props.item.location === "Online"){
        badgeText = "ONLINE"
    }
    return (
        <div>
         <section className="card">
            {badgeText && <div className="card-badge">
            {badgeText}
            </div>}
            <img src={`./photos/${props.item.coverImg}`} className="swim-img" />
            <div className="card-stats">
                <img src="./photos/star.png" className="star" />
                <span>{props.item.stats.rating}</span>
                <span className="grey">({props.item.stats.reviewCount}).</span>
                <span className="grey">{props.item.location}</span>
                <p className="kira">{props.item.title}</p>
                <p className="bold">From ${props.item.price} <span>/person</span></p>
            </div>
            </section> 
        </div>
    )
}