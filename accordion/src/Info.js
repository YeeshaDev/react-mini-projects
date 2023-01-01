import React, { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';

const Info = ({title,info}) => {
    const [details, setDetails] = useState(false)
    return (
        <main>
          <div className="heading">
            <h2>{title}</h2>
            <button className="btn" onClick={() => setDetails(!details)}>
               {details ? <AiOutlineMinus/> : <AiOutlinePlus/>}
            </button>
            </div>
      
                {details &&<p>{info}</p>}
        </main>
    
    )
}

export default Info;