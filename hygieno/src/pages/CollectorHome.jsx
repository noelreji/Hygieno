import React,{useState} from 'react'
import Profile from '../components/Profile';
import WasteCard from '../components/WasteCard';
import ServiceSlider from '../components/ServiceSlider';
import ListWasteC from '../components/ListWasteC';
import FindUser from '../components/FindUser';
import { FaTrashCanArrowUp } from "react-icons/fa6" 
import { FaSearch } from "react-icons/fa";
const userData = {
  peru : "Noyal Reji"
}
const sliderData = ["Collect","Find Disposers"];


function CollectorHome() {
  const [changeSlider,setChangeSlider] = useState(0);
  
  const [isOn,setisOn] = useState(false);
  const icons= [FaTrashCanArrowUp,FaSearch];

  const setShowItemBox = (value) => {
    setisOn(value);
  }
  const changeServicePage = (activeSlider) => {
    setChangeSlider(activeSlider)
  }
  return (
    <div>
      <Profile data={userData}></Profile>
       <ServiceSlider sliderData={sliderData} changeServicePage={changeServicePage} icons={icons}></ServiceSlider>
      {
        changeSlider === 0 ? <ListWasteC setShowItemBox={setShowItemBox} isOn={isOn}></ListWasteC> : changeSlider === 1 ? <FindUser></FindUser> : ''
      }           
      </div>
  )
}

export default CollectorHome;