import React ,{useState,useEffect, useRef, useContext}from 'react'
import "../styles/addItems.css"
import {collectionAreaData} from '../pages/CollectorHome'

function AddItemsC({isOn,setShowItem}) { 
  console.log("done");
  const [showItemBox, setShowItemBox] = useState(false);
  const [activeTab, setActiveTab] = useState('wasteType'); 
  const [selectedTypes, setSelectedTypes] = useState([]);
  const controlClickRef = useRef();
  const {state} = useContext(collectionAreaData);

  const handleOutsideClick = (event) => {
    if (controlClickRef.current && !controlClickRef.current.contains(event.target)) {
      setShowItemBox(false); 
      setShowItem(false);
    }
  };

  useEffect(() => {
    if (showItemBox) {
      document.addEventListener('click', handleOutsideClick);
    }

    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, [showItemBox]);

  useEffect(() => {
    console.log(isOn);
    setShowItemBox(isOn);
    if(isOn)
    {
      document.querySelector("body").classList.add("LockScroll");
    }
    else
      document.querySelector("body").classList.remove("LockScroll");

    return () => {
      document.querySelector("body").classList.remove("LockScroll");
    };
  }, [isOn]);

 

  const toggleItemBox = () => {
    setShowItemBox(false);
    setShowItem(false);
    setSelectedTypes([]);
    setTimeout(() => {
      resetCheckbox();
    }, 500);
  };

  const resetCheckbox = () => {
    const box = document.getElementsByClassName('box');
    const boxArray = Array.from(box);
    boxArray.map((value,index)=>{
      box[index].checked=false;
    })   
  }

  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setSelectedTypes([...selectedTypes, value]);
    } 
    else {
      setSelectedTypes(selectedTypes.filter((type) => type !== value));
    }
  };

  const validationCheck = () => {
    
    const boxes = document.getElementsByClassName('box');
    let shouldReturn = false;
    const boxArray = Array.from(boxes); 
    boxArray.map((value,index)=>{
        if( boxArray[index].checked === true)
        {
          shouldReturn = true;
        }
    })
    if(shouldReturn)
        return;
    const errorAnimation = document.getElementById('container')
    errorAnimation.classList.add('error');
    setTimeout(() => {
      errorAnimation.classList.remove('error');
    }, 1000);
    return false;
  } 

  function prettyTime(date) {
    const months = [
      'January', 'February', 'March', 'April',
      'May', 'June', 'July', 'August',
      'September', 'October', 'November', 'December'
    ];
  
    const year = date.getFullYear(); 
    const monthIndex = date.getMonth(); 
    const month = months[monthIndex]; 
    const day = date.getDate(); 
    const hours = date.getHours(); 
    const minutes = date.getMinutes(); 
    const seconds = date.getSeconds(); 
  
    const formattedDateTime = `${month} ${day}, ${year} ${hours}:${minutes}:${seconds}`;
    return formattedDateTime;
  }

  const handleSubmit = async () => {
    console.log("donesubmit");
    let collectionAreaData = new FormData();
    collectionAreaData.append('userId',state._id);
    collectionAreaData.append('email',state.email);
    collectionAreaData.append('desc', 'oi its me')
    collectionAreaData.append('status','Pending Collection');
    const time = prettyTime( new Date() );
    console.log(time);
    console.log('hero');
    collectionAreaData.append('date',time);
    setSelectedTypes(['hero','jam']);
    collectionAreaData.append('wasteTypes',selectedTypes);
    console.log(selectedTypes);
    collectionAreaData.append('location',JSON.stringify({
      type: 'Point',
      coordinates: [-74.005974, 40.712891]
    }));
    console.log(collectionAreaData);
    await fetch('http://localhost:5658/collectionAreaRequests',{
      method:'POST',
      body:collectionAreaData
      
    }).then( (response) => response.json()).then( (data) => console.log(data.message))
    toggleItemBox();
  }

  return (
    <div className={`item-box ${showItemBox ? 'active' : ''}`} id='container'  ref={controlClickRef}>
      <button className="closeButton" onClick={toggleItemBox}>×</button>
      <div className="content">
        <div className={`tab waste-type-tab ${activeTab === 'wasteType' ? 'active' : ''}`}>
        <h2>Waste Type</h2>
          <p>Select the type of waste:</p>
            <label><input className="box"  type="checkbox" value="plastic" onChange={handleCheckboxChange} /> Plastic</label>
            <label><input className="box" type="checkbox" value="metal" onChange={handleCheckboxChange} /> Metal</label>
            <label><input className="box" type="checkbox" value="paper" onChange={handleCheckboxChange} /> Paper</label>
          <br></br>
          <h2>Location</h2>
          <p>Please state your collection area</p>
            <input className="textbox"  type="textbox" placeholder='Address' />
          
          <button className="next-btn" onClick={handleSubmit}>Submit</button>
        </div>

        </div>
      </div>
  );
}

export default AddItemsC