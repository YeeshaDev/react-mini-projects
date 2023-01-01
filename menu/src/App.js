import React,{useState} from 'react';
import Menu from './Menu';
import Category from './Category';
import data from './data';
import './App.css';

const allCategories = ['all', ...new Set(data.map((item) => item.category))]

function App() {
  const [menus,setMenus] = useState(data)
  const [categories,setCategories] = useState(allCategories)

  const filterMenu = (category) => {
if (category === 'all') {
  setMenus(data)
  return;
}

const newMenu = data.filter((item) => item.category === category)
setMenus(newMenu)
  }

  return (
    <div className="App">
      <header>
      <h1>Our Menu</h1>
      <div className='underline'></div>
      </header>
      <Category filterMenu = {filterMenu} category = {categories}/>
     <Menu items = {menus}/>
    </div>
  );
}

export default App;
