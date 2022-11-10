import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';

const allCategories = ['all',... new Set(items.map((item) => item.category))];
// new set is much more complicted than this and i have very little knowledge on how to use it

function App() {
  const [menuItems, setmenuItems] = useState(items);

  const filterItems = (category) => {
    if (category === 'all'){
      setmenuItems(items);
      return;
    }
    const newItems = items.filter((item)=> item.category === category);
    setmenuItems(newItems);
  }

  return (
    <main>
      <section className='menu section'>
        <div className='title'>
          <h2>our menu</h2>
          <div className='underline'></div>
        </div>  
        <Categories categories = {allCategories} filterItems={filterItems}/>
        <Menu items={menuItems}/>
      </section>
    </main>
  )
  
  
}

export default App;
