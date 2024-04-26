import React, { useState , useEffect, useContext, useRef} from 'react'
import "../styles/wastecard.css"
//import { FaEdit } from "react-icons/fa";
import { GiCancel } from "react-icons/gi";
import wasteChildren from "../assets/retink-waste-01.jpg"
import Activity from './Activity';
import {wasteData} from '../pages/DisposerHome'

export  const cancelWasteContext = React.createContext();
export let dNewWaste;
function WasteCard() {

 const {wasteDetails} = useContext(wasteData);
 let   tempWDetails = wasteDetails;
 const [showActivity,setShowActivity] = useState(false);
 const [deleteWasteTab,setdeleteWasteTab] = useState(false);
 const myRef = useRef();

 let orderSize = tempWDetails.length;
 
 if( orderSize > 0 )  
    var { date, wasteTypes, desc, status } = tempWDetails[0];

  useEffect(() => {
    const handleClick = (event) => {
        console.log(event.target);
        if(event.target.closest(".waste-card") === myRef.current )
            if(event.target.closest('.icons') || event.target.closest('.delete') || event.target.closest('.defaultViewContainer'))
                return
            else
                setShowActivity(!showActivity)
    }

        myRef.current.addEventListener('click', handleClick);
    return () => {
        if (myRef.current) {
            myRef.current.removeEventListener('click', handleClick);
          }
        setShowActivity(false);
    };
  }, []);

  
  dNewWaste = (data) => {
            tempWDetails.unshift(data);
            console.log(tempWDetails);
}

  const handleShowActivity = () => {
    setShowActivity(false);
  }

  const handlewasteDelete = async ( index ) => {
    console.log("Wastedetails -->",tempWDetails);
    const wDelAuth = [tempWDetails[index].userId , tempWDetails[index]._id];
    console.log(wDelAuth);
    const res = await fetch(`http://localhost:5656/deleteWasteRequest`, {
        method: 'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body: JSON.stringify(wDelAuth)
    });
    const response = res.json();
    response.then( (data) => {
        console.log(data);
    }).catch( err =>   console.log(err))
  }

  const deleteParams = { deleteWasteTab , setdeleteWasteTab};

  return (
    <div className="waste-card " ref={myRef}>
        <div className={`contentWaste ${showActivity ? 'hide' : ''}  ${orderSize === 0 ? 'makeBackground' : ''}`}>
            {
                orderSize > 0 ? 
                <div className="contentWaste">
                    <div className="left-content">
                        <ul style={{listStyleType:'none'}}>
                            <li>{date}</li>
                            <li id='main'>{wasteTypes}</li>
                            <li>Collector: {tempWDetails[0].collectorDetails[0].lastName}</li>
                        </ul>
                    </div>
                    <div className="right-content">
                        <div className={`statusDetails  ${deleteWasteTab  ? 'hide' : ''}`}>
                            <h4>Status : {status}</h4>
                            <div className="icons">
                                <GiCancel className='ico'  onClick={()=>setdeleteWasteTab(true)}></GiCancel>
                            </div>
                        </div>
                        {
                            deleteWasteTab && 
                            <div className="delete">
                                <h4>Are you sure?</h4>
                                <section>
                                    <button onClick={()=>setdeleteWasteTab(false)}  id='cancel-bT'>Cancel</button> <span><button id='delete-bT' onClick={()=>{handlewasteDelete(0);
                                        wasteDetails.splice(0, 1);
                                        setdeleteWasteTab(false);
                                        }}>Delete</button></span>
                                </section>
                            </div>
                        }    
                </div>
            </div>
            :
                <div className="defaultViewContainer">
                    <img src={wasteChildren} alt="" />
                </div>
            }

            
        </div>        
       {     showActivity && 
       <cancelWasteContext.Provider value={deleteParams}>   
            <Activity   handlewasteDelete={handlewasteDelete}  reportRender={handleShowActivity}></Activity>       
        </cancelWasteContext.Provider>

       }

  </div>
);
}

export default WasteCard