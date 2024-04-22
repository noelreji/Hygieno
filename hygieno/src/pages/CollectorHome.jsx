import React ,{useEffect, useState}from 'react'
import Profile from '../components/Profile';
import Sidebar from '../components/Sidebar';
import AddItemsC from '../components/AddItemsC';
import WasteCard from '../components/WasteCard';
import ServiceSlider from '../components/ServiceSlider';
import ViewCollectionAreas from '../components/ViewCollectionAreas';
import ListWasteC from '../components/ListWasteC';
import FindUser from '../components/FindUser';
import { FaTrashCanArrowUp } from "react-icons/fa6" 
import { FaPlus } from 'react-icons/fa';
import { FaSearch } from "react-icons/fa";
import { useNavigate , useLocation } from 'react-router-dom';
import '../styles/dashboard.css'

export const collectionAreaData = React.createContext();
const sliderData = ["Add New Collection Area","View Collection Areas","Find Disposers"];

export let reportLocationCollector;

function CollectorHome() {

  const { state } = useLocation();
  console.log(state);

  reportLocationCollector = (data) => {
    state.location = data;
  }

  const [collectionAreaDetails,setCollectionAreaDetails ] = useState([]);

  const [changeSlider,setChangeSlider] = useState(0);
  
  const [isOn,setisOn] = useState(false);
  const icons= [FaPlus,FaSearch,FaSearch];

  const setShowItemBox = (value) => {
    setisOn(value);
  }
  const changeServicePage = (activeSlider) => {
    setChangeSlider(activeSlider)
  }
  
  return (
    <div className="collectorhome">
      <Sidebar state={state} userType={'collector'}></Sidebar>
      <div className='main-content'>
        <Profile state={state} userType={'collector'}></Profile>
        <ServiceSlider sliderData={sliderData} changeServicePage={changeServicePage} icons={icons}></ServiceSlider>
        {
          changeSlider === 0 ? 
          <collectionAreaData.Provider value={{collectionAreaDetails,state}}>
              <AddItemsC isOn={true} setShowItem={true}></AddItemsC>
          </collectionAreaData.Provider>
          : changeSlider === 1 ? <ViewCollectionAreas state={state}></ViewCollectionAreas> 
          : changeSlider === 2 ? <FindUser userType={'collector'}></FindUser> : ''
        }     
      </div>
            
    </div>
  )
}

export default CollectorHome;