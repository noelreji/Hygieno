import React ,{useEffect, useState}from 'react'
import Profile from '../components/Profile';
import WasteCard from '../components/WasteCard';
import ServiceSlider from '../components/ServiceSlider';
import ListWaste from '../components/ListWaste';
import { FaTrashCanArrowUp } from "react-icons/fa6" 
import { FaSearch } from "react-icons/fa";
import FindUser from '../components/FindUser';
import { GiUnlitBomb } from "react-icons/gi";
import { isLogin } from './Login';
import { useNavigate } from 'react-router-dom';

export const wasteData = React.createContext();
function DisposerHome() {
  let navigate = useNavigate();

  useEffect( ()=>{
    if(isLogin === false)
    {
      navigate('/login');
      console.log("token");
    }
  })

  const userData = {
    peru : "Thorfinn"
  }
  
  const wasteDetails = [{
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
  }];
  
  const sliderData = ["Dispose","Find Collectors"];


  const [isOn,setisOn] = useState(false);
  const [changeSlider,setChangeSlider] = useState(0);
  const icons= [FaTrashCanArrowUp,FaSearch,GiUnlitBomb];
  
  const setShowItemBox = (value) => {
    setisOn(value);
  }

  const changeServicePage = (activeSlider) => {
    setChangeSlider(activeSlider)
  }



  return (
    <div>
      <Profile data={userData}></Profile>
      
      <wasteData.Provider value={wasteDetails}>
          <WasteCard data={wasteDetails}>   </WasteCard>
      </wasteData.Provider>

      <ServiceSlider sliderData={sliderData} changeServicePage={changeServicePage} icons={icons}></ServiceSlider>
      {
        changeSlider === 0 ? <ListWaste setShowItemBox={setShowItemBox} isOn={isOn}></ListWaste> : changeSlider === 1 ? <FindUser></FindUser> : ''
      }       
    </div>
  )
}
export default DisposerHome
