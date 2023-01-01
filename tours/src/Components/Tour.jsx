import React,{useState} from "react";

const Tour = ({id,name,price,image,info,deleteTour}) => {
    const [toggle, setToggle] = useState(false)
    return (
        <section className="tour--cards">
         <img src={image} alt={name}/>
         <div className="tour--flex">
         <h4 className="name">{name}</h4>
         <p className="price">{price}</p>
         </div>
         <p className="info">{toggle ? info : `${info.substring(0,200)}...`}
         <button className="info--btn" onClick ={() => setToggle(!toggle)}>{toggle ? "Show Less" : "Read more"}</button>
         </p>
         <button className="tour--btn" onClick= {() => deleteTour(id)}>
            Not Interested
         </button>
        </section>

    )
}

export default Tour;