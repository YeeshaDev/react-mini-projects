import React from "react";
import Tour from "../Components/Tour"

const Tours = ({tours,deleteTour}) => {
    return(
        <section>
            <div className="title">
                <h2>Our Tours</h2>
                <div className="underline">
                    </div>           
                    </div>
            <div className="card">
            {tours.map((tour) => {
                return <Tour key={tour.id} {...tour} deleteTour = {deleteTour}/>
            })}
            </div>
        </section>
    )
}

export default Tours;