import React ,{useState,useEffect, useRef, useContext}from 'react'
import {collectionAreaData} from '../pages/CollectorHome'
import MapComponent from './MapComponent';
import '../styles/addItemsC.css'

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

 

  const resetValues = () => {
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

  const handleTabChange = (tabName) => {
    setActiveTab(tabName);
  };
  const validationCheck = () => {
    const boxes = document.getElementsByClassName('custom-checkbox');
    let shouldReturn = false;
    const boxArray = Array.from(boxes); 
    boxArray.map((value,index)=>{
      if( boxArray[index].checked === true){
        handleTabChange('location');
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
    if (validationCheck()){
      let collectionAreaData = new FormData();
      collectionAreaData.append('userId',state._id);
      collectionAreaData.append('email',state.email);
      const time = prettyTime( new Date() );
      console.log(time);
      console.log('hero');
      collectionAreaData.append('date',time);
      collectionAreaData.append('wasteTypes',selectedTypes);
      console.log(selectedTypes);
      collectionAreaData.append('location',JSON.stringify({
        type: 'Point',
        coordinates: [9.625805821451133, 76.76101006291614]
      }));
      console.log(collectionAreaData);
      await fetch('http://localhost:5656/collectionAreaRequests',{
        method:'POST',
        body:collectionAreaData
      })
      .then( response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        
        return response.json();
      })
      .then( data => console.log(data.message))
      resetValues();
    }
    
  }

  return (
    <div className='body' id='container'>
      <div className="content">
      {
        activeTab=== 'wasteType' ? 
            <div className='tab get-waste-type-tab'>
              <div>
                <h2>Waste Type</h2>
                  <p>Select the type of waste:</p>
                  <div class='checkbox-container'>
                    <label class="checkbox-label" for="checkbox1">
                      <input className="custom-checkbox"  type="checkbox" id="checkbox1"  onChange={handleCheckboxChange} /> 
                      Plastic
                    </label>
                    <label class="checkbox-label" for="checkbox2">
                      <input className="custom-checkbox" type="checkbox" id="checkbox2" onChange={handleCheckboxChange} /> 
                      Metal
                    </label>
                    <label class="checkbox-label" for="checkbox3">
                      <input className="custom-checkbox" type="checkbox" id="checkbox3" onChange={handleCheckboxChange} />
                       Paper
                    </label>
                  </div>
              </div>
                
                <div className='next-btn-component'>
                    <button className="next-btn" onClick={() => validationCheck()}>Next</button>
                </div>
            </div>
          : activeTab=== 'location'?
            <div className='tab get-location-tab'>
                <p>Please either type the address of the area 
                  you want to add as new COLLECTION AREA 
                  or mark the location in the map
                </p>
                <div className='choices'>
                    <input type='radio' id="option1" name="options" value="Option 1"></input>
                    <label for="option1">
                      <input className="textbox"  type="textbox" placeholder='Address' />
                    </label>
                </div>
                <div className='choices'>
                    <input type='radio' id="option2" name="options" value="Option 2"></input>
                    <label for="option2">
                      <MapComponent></MapComponent>
                    </label>
                    
                </div>
                <div>
                    <section className='back-submit-btn-component'>
                        <button className="back-btn" onClick={() => handleTabChange('wasteType')}>Back</button>
                        <button className="submit-btn" onClick={handleSubmit}>Submit</button>          
                    </section>
                </div>
            </div>
          : ''  
      }
      </div>
    </div>
      
  );
}

export default AddItemsC