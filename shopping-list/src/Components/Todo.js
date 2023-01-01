import React from "react";
import {FaEdit,FaTrash} from 'react-icons/fa'

export default function Todo({items,deleteItem,editItem}){
  
return (
    <main>
    {items.map((item) => {
        const {id,title} = item
        return (
        <section key = {id}>
          <p>{title}</p>
          <div className="icons">
          <button className="edit" 
          title="Edit"
          onClick={() => editItem(id)}>
          <FaEdit />
        </button>
        <button className="delete"
        title="Delete" 
        onClick={() =>deleteItem(id)}>
          <FaTrash />
        </button>
        </div>
        </section>
       
        )
    })}
    </main>
)
}