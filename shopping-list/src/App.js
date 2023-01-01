import React, { useEffect, useState } from 'react';
import Todo from './Components/Todo';
import Alert from './Components/Alert';
import './App.css'

const getListStorage = () => {
    const list = localStorage.getItem('list')
    if(list){
        return JSON.parse(localStorage.getItem('list'))
    }
    else {
        return []
    }
}

 export default function App(){
    const [name, setName] = useState("")
    const [list,setList] = useState(getListStorage())
    const [isEditing, setIsEditing] = useState(false)
    const [editId, setEditId] = useState(null)
    
    const [alert, setAlert] = useState (
        {status:false,type:"",msg:""})

    const handleSubmit = (e) => {
e.preventDefault();
if (!name){
showAlert(true, "danger","Please enter an item")
}
else if(name && isEditing) {
setList (
    list.map((item) => {
        if (item.id === editId){
            return {...item,title:name}
        }
        return item
    })

)
setName("")
setEditId(null)
setIsEditing(false)
showAlert(true,"success", "item updated")
}

else {
    showAlert(true, "success","Added to the list")
const newTask = {id:new Date().getTime().toString(), title:name}
setList([...list,newTask])
setName("")
}

    }

    const showAlert = (status= false,type = "",msg="") => {
        setAlert({status,type,msg})

    }
    const clearList = () => {
        showAlert(true,"danger","All items deleted")
        setList([])
    }
    const deleteItem =(id) => {
        setList(list.filter((item) => item.id !== id))
    }

    const editItem = (id) => {
        const edit = list.find((item) => item.id === id)
        setIsEditing(true)
        setEditId(id)
        setName(edit.title)
    }
    
    useEffect(() => {
localStorage.setItem("list",JSON.stringify(list))
    },[list])

    return (
        <div className='container'>
            
            <form onSubmit={handleSubmit}>
                {alert.status && <Alert {...alert} removeAlert ={showAlert} list={list}/>}
                <h1>My List</h1>
                <div className='form--input'>
        <input type="text" placeholder="Add an item.."
        value={name}
        onChange={(e) => setName(e.target.value)}/>
        <button className='btn'>
            {isEditing ? 'Edit' : 'Add'}
        </button>
        </div>
    </form>
    {list && list.length ? "" : <p className='no-list'>No list yet</p>}
    {list.length > 0 && (
        <>
        <Todo items = {list} deleteItem = {deleteItem} editItem = {editItem}/>
        <button className='clear--btn' onClick = {clearList}>
            Clear List
        </button>
        </>
    )
    
    }
    </div>
        
    )
 }