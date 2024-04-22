import React from 'react'
import '../styles/listWaste.css'
import trashcan from '../assets/plus.png';
import AddItemsC from '../components/AddItemsC';

function ListWaste({setShowItemBox,isOn}) {
  return (
    <div className="services" >
        <div className='contentList'>
        <AddItemsC isOn={isOn} setShowItem={setShowItemBox}></AddItemsC>
          <img src={trashcan} onClick={() => setShowItemBox(true)} draggable='false' alt="dispose logo" style={{width:'50px'}} />
          <h2></h2>
        </div>  
        { isOn && <AddItemsC isOn={isOn} setShowItem={setShowItemBox}></AddItemsC>}      
        
    </div>     
  )
}

export default ListWaste;