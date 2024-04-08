import React from 'react'
import '../styles/listWaste.css'
import trashcan from '../assets/plus.png';
import AddItems from '../components/AddItems';

function ListWaste({setShowItemBox,isOn}) {
  return (
    <div className="services" >
        <div className='contentList'>
          <img src={trashcan} onClick={() => setShowItemBox(true)} draggable='false' alt="dispose logo" style={{width:'50px'}} />
          <h2></h2>
        </div>  
        { isOn && <AddItems isOn={isOn} setShowItem={setShowItemBox}></AddItems>}      
        
    </div>     
  )
}

export default ListWaste;