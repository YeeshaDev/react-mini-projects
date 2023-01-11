import React from "react";
import { useState } from "react";
import {FaEllipsisH,FaTrash,FaRegEdit} from "react-icons/fa"
import planning from "../planning.svg"

export default function Main(){

    const[isShown,setIsShown] = useState(false)
    //This is the todo task list
    const [todo,setTodo] = useState([])

    const[newTask,setNewTask]= useState("");

    //This is for updating item to the list
    const[updateData,setUpdateData]= useState("")

/*this gives us the current day and date of the week.
I used arrays because the days of the week are numbers by default*/

    const days = ["Sunday","Monday","Tuesday", "Wednesday",
                   "Thursday","Friday","Saturday"]
    const date = new Date();
    const week = days[date.getDay()];
    let day =  date.getDate();

//This is to add new task and prevents the page from refreshing when the add btn is clicked
    const addTask =(e)=>{
        e.preventDefault()

if (newTask){
    let num = todo.length + 1;
    let entry = {id:num, title:newTask, status:false}
    setTodo([...todo,entry])
    setNewTask("")
}
    }

    //This is to delete tasks
    const deleteTask =(id)=>{
        let newTasks = todo.filter( task => task.id !== id)
        setTodo(newTasks)
        
    }
//This is to mark tasks as done
    const checkedItem =(id)=>{

    }

    //This is to cancel updates
    const cancelUpdate =()=>{
        setUpdateData("")

    }
//This is to change tasks
    const changeTask =(e)=>{
let entry = {
    id:updateData.id,
    title:e.target.value,
    status: updateData.status ? true : false
}

setUpdateData(entry)
    }

    //This is to update tasks
    const updateTask =(e)=>{
        e.preventDefault()
        let update = [...todo].filter( task => task.id !== updateData.id)
        let updatedItem = [...update, updateData]
         setTodo(updatedItem)
         setUpdateData("")
    }

    function toggle(){
        setIsShown (prevIcon => !prevIcon)
    }
    return (
        <div className="todo--wrapper">
            <img src={planning} className="sign--img"/>
            <h1>Let's Plan</h1>
            <section className="time">
            <h2>{week},{day}</h2>
            <p>Create a task</p>
            
            </section>
                      {/*  <div className="todo--btn">
                     <button>All</button>
                 <button>Pending</button>
                   <button>Done</button>
                  </div>*/}
                  {updateData && updateData ? (
                    <form className="todo--update">
       <input type="text"
       placeholder=""
       value={updateData && updateData.title}
       onChange= {(e) => changeTask(e)}
       className="todo--input"
       
       />
       <button className="btn update" onClick={updateTask}>Update</button>
       <button className="btn cancel" onClick={cancelUpdate}>Cancel</button>
       </form>
                  ) : ( <form className="todo--form">
                  <input type="text"
                  placeholder="Add an item"
                  className="todo--input"
                  value={newTask}
                  onChange={(e)=>setNewTask(e.target.value)}
                  />
                  
                  <button className=" btn add" onClick={addTask}>Add</button>
                  </form>)}
                
    {/*This is the message that is to be displayed on the page is no task item or 
           all the tasks have been deleted using conditional rendering*/ }
            {todo && todo.length ? "" : "You have not created any list yet"}
            {todo && todo 
            .map((task,index) => {
                return(
                    <React.Fragment key={task.id}>
                        
                        <div className={isShown ? "box-content active" : "box-content"}>                       
                    <div className="box">
                    <span className="task--num">{index + 1}</span>
                <span className={task.status ? 'done' : ''}>{task.title}</span>
            <div className="ellipse-icon" onClick={toggle}>
                <FaEllipsisH/>
                </div>
             </div>
             {/*This is to toggle between the main task items and the trash and edit icons
             using the ellipse icon*/}
             {isShown && <div className="todo">
             <span  title="Delete" className="icon1" onClick={() => deleteTask(task.id)}>
             <FaTrash/>
             </span>
             <span title="Edit" className="icon2" onClick={() => setUpdateData ({
                id:task.id,
                title:task.title,
                status:task.status ? true : false
             })}>
             <FaRegEdit/>
             </span>
             </div>}
             
                    </div>
                    </React.Fragment>
                )
            })
            }
         
    </div>
    )
}