import React,{useState} from 'react'
import { Link } from 'react-router-dom';
import '../index.css';
import { CgProfile }  from "react-icons/cg";
import { RxActivityLog } from "react-icons/rx";
import { BiDonateHeart } from "react-icons/bi";
import { MdLogout } from "react-icons/md";
import logo192  from '../assets/testDp.png';
function Profile( userDetails ) {

const [expand,setExpand] = useState(false);
const [isActive , setisActive] = useState(true);

const toggleValue = () => {
    setExpand((!expand));
    setisActive(!isActive);
}

  return (
    <div className='profileContainer'>
        <div className="sub1">
            <h1>HYGIENO</h1>
        </div>
        <div className="sub2">
        {
            expand &&
            (
                <div className='profileContainerMenu'>
                    <div className="dpDetails">
                        <img className="afterExp" src={logo192} alt="profile picture" />
                        <p>{userDetails.data.peru}</p>
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
        <img className={isActive ? 'beforeExp' : 'beforeExpactive' } src={logo192} alt="profile picture" onClick={toggleValue}/>
        </div>
        
    </div>
  );
}

export default Profile;