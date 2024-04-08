import React,{useState,useEffect} from 'react'
import { Link } from 'react-router-dom';
import '../index.css';
import { CgProfile }  from "react-icons/cg";
import { RxActivityLog } from "react-icons/rx";
import { BiDonateHeart } from "react-icons/bi";
import { MdLogout } from "react-icons/md";
import logo192  from '../assets/Guts.jpg';

function Profile( userDetails ) {

const [expand,setExpand] = useState(false);
const toggleValue = () => {
    setExpand((!expand));
}

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


 const firstname = userDetails.data.peru.split(" ")[0];
  return (
    <div className='profileContainer'>
        <div className="sub1">
            <h1> Welcome,{firstname}</h1>
        </div>
        <div className="sub2">
        {
            expand &&
           (
                    <div className={`profileContainerMenu ${expand ? 'show' :''}`}>
                        <div className="dpDetails">
                            <img className="afterExp" src={logo192} alt="profile picture" />
                            <h6>{userDetails.data.peru}</h6>
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