import React ,{useEffect, useState}from 'react'
import Profile from '../components/Profile';
import WasteCard from '../components/WasteCard';
import ServiceSlider from '../components/ServiceSlider';
import ListWaste from '../components/ListWaste';
import { FaTrashCanArrowUp } from "react-icons/fa6" 
import { FaSearch } from "react-icons/fa";
import FindUser from '../components/FindUser';
import { isLogin } from './Login';
import { useNavigate , useLocation } from 'react-router-dom';

export const wasteData = React.createContext();
function DisposerHome() {

  let navigate = useNavigate();
  const { state } = useLocation();
  console.log(state);

  const [wasteDetails,setwasteDetails ] = useState([]);
  /*useEffect( () => {
    if(isLogin === false)
    {
      navigate('/login');
      console.log("token");
    }
  })*/

  useEffect( () => {
    //implement passing session id to fetch waste orders to have increased security later
    async function fetchWastes() {
        const res = await fetch(`http://localhost:5656/wasteRequests?id=${state._id}`, {
        method: 'GET'
      });
    const response = res.json();
    response.then( (data) => {
      setwasteDetails(data.wasteData);
    }).catch( err =>   console.log(err))
  }
  fetchWastes();
  },[])

  /*const wasteDetails = [{
    date:"March 28,2024 22:23:05",
    type:"Metal",
    desc:"Some copper",
    status:404,
  },
  {
    date:"May 28,2024 22:23:05",
    type:"E-Waste",
    desc:"Battery",
    status:"PickedUp",
  },
  {
    date:"January 28,2024 22:23:05",
    type:"Paper",
    desc:"Battery",
    status:"Waiting",
  }];*/
  
  const sliderData = ["Dispose","Find Collectors"];


  const [isOn,setisOn] = useState(false);
  const [changeSlider,setChangeSlider] = useState(0);
  const icons= [FaTrashCanArrowUp,FaSearch];
  
  const setShowItemBox = (value) => {
    setisOn(value);
  }

  const changeServicePage = (activeSlider) => {
    setChangeSlider(activeSlider)
  }



  return (
    <div>
      <Profile state={state}></Profile>
      
      <wasteData.Provider value={{wasteDetails,state}}>
          <WasteCard data={wasteDetails}>   </WasteCard>
      </wasteData.Provider>

      <ServiceSlider sliderData={sliderData} changeServicePage={changeServicePage} icons={icons}></ServiceSlider>
      {
        changeSlider === 0 ?
        <wasteData.Provider value={{wasteDetails,state}}>
            <ListWaste setShowItemBox={setShowItemBox} isOn={isOn}></ListWaste>
        </wasteData.Provider>
         : changeSlider === 1 ? <FindUser></FindUser> : ''
      }       
    </div>
  )
}
export default DisposerHome
