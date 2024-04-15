import React,{useState,useEffect} from 'react'
import { Link } from 'react-router-dom';
import '../index.css';
import { CgProfile }  from "react-icons/cg";
import { RxActivityLog } from "react-icons/rx";
import { BiDonateHeart } from "react-icons/bi";
import { MdLogout } from "react-icons/md";
import logo192  from '../assets/Guts.jpg';
import { FaLocationDot } from "react-icons/fa6";
import { reportLocation } from '../pages/DisposerHome';

function Profile( {state} ) {

const [expand,setExpand] = useState(false);
const toggleValue = () => {
    setExpand((!expand));
}

const [latitude, setLatitude] = useState(null);
const [longitude, setLongitude] = useState(null);
const [formattedLoc,setformattedLoc] = useState(null);
const [convLoc,setconLoc] = useState(false);



useEffect(() => {
    const handleOutsideClick = (event) => {
      if (!event.target.closest('.beforeExp') && !event.target.closest('.profileContainerMenu')) {
        setExpand(false); 
      }
    };
      document.addEventListener('click', handleOutsideClick);
    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, []);

 


  const fetchLocation = async () => {
    if (navigator.geolocation) {
      try{
          const position = await new Promise((resolve, reject) => {
          navigator.geolocation.getCurrentPosition(resolve, reject); });
          setLatitude(position.coords.latitude);
          setLongitude(position.coords.longitude);
          return true;
      }
      catch(error){
          console.error('Error getting location:', error);
          return false;
        }
    } 
    else 
      console.error('Geolocation is not supported by this browser.');
}


const convertLocation = async () => {
  try {
    const resp = await fetch(`https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`, {
      method: "GET"
    });
    const response = await resp.json();
    console.log(response); 
    setformattedLoc(response); 
  } 
  catch (error) {
    console.error('Error fetching location data:', error);
  }
}

useEffect(() => {
  console.log(formattedLoc);
  if(latitude)
  setconLoc(true);
}, [formattedLoc]);

useEffect( () => {
  convertLocation();
  reportLocation({'lat':latitude,'lon':longitude});
  console.log(latitude , longitude);
},[latitude]);

const setupLocation = async () => {
        const resp = await fetchLocation();
        if(!resp)
          alert("Make Sure Your Location Services are on");         
}



 const firstname = state.firstName;
  return (
    <div className='profileContainer'>
        <div className="sub1">
            <h1> Welcome,{firstname}</h1>
        </div>

        <div className="locationContainer">
            <FaLocationDot className={`locationicon  ${latitude ? 'locTrue' : ''}`} onClick={
              ()=> {
                setupLocation();
              }
            }/>
            {
                convLoc === true ?  <h4 className='loc'>{`${formattedLoc.address.town},${formattedLoc.address.county}`}</h4> : ''
            }           
        </div>




        <div className="sub2">
        {

            expand &&
           (
                    <div className={`profileContainerMenu ${expand ? 'show' :''}`}>
                        <div className="dpDetails">
                            <img className="afterExp" src={logo192} alt="profile picture" />
                            <h6>{`${state.firstName} ${state.middleName} ${state.lastName}`}</h6>
                        </div>
                        <ul className='profileMenu' style={{listStyleType: 'none'}}>
                            <li><span className='menuIcons'><CgProfile/></span> <Link to="/MyProfile">Your Profile</Link> </li>
                            <li> <span className='menuIcons'><RxActivityLog /></span><Link to="/MyActivities"> Your Activities</Link> </li>
                            <li><span className='menuIcons'> <BiDonateHeart /></span> <Link to="/Donate">Donate Us</Link> </li>
                            <li><span className='menuIcons'><MdLogout /></span> <Link to="/logout">Log out</Link> </li>
                        </ul>
                    </div>
                
            )
        }
        <img className={expand ? 'beforeExp' : 'beforeExp active' } src={logo192} alt="profile picture" onClick={toggleValue}/>
        </div>

    </div>
  );
}

export default Profile;