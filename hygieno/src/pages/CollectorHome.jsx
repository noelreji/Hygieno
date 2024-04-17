import React ,{useEffect, useState}from 'react'
import Profile from '../components/Profile';
import WasteCard from '../components/WasteCard';
import ServiceSlider from '../components/ServiceSlider';
import ListWasteC from '../components/ListWasteC';
import FindUser from '../components/FindUser';
import { FaTrashCanArrowUp } from "react-icons/fa6" 
import { FaSearch } from "react-icons/fa";
import { useNavigate , useLocation } from 'react-router-dom';

export const collectionAreaData = React.createContext();
const sliderData = ["Collect","Find Disposers"];

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
  const icons= [FaTrashCanArrowUp,FaSearch];

  const setShowItemBox = (value) => {
    setisOn(value);
  }
  const changeServicePage = (activeSlider) => {
    setChangeSlider(activeSlider)
  }
  useEffect( () => {
    //implement passing session id to fetch waste orders to have increased security later
    async function fetchCollectionAreas() {
      const res = await fetch(`http://localhost:5656/collectionAreaRequests?id=${state._id}`, {
      method: 'GET'
      });
      const response = res.json();
      response.then( (data) => {
      setCollectionAreaDetails(data.collectionAreaData);
    }).catch( err =>   console.log(err))
  }
  fetchCollectionAreas();
  },[])
  return (
    <div>
      <Profile state={state} userType={'collector'}></Profile>
       <ServiceSlider sliderData={sliderData} changeServicePage={changeServicePage} icons={icons}></ServiceSlider>
      {
        changeSlider === 0 ? 
        <collectionAreaData.Provider value={{collectionAreaDetails,state}}>
            <ListWasteC setShowItemBox={setShowItemBox} isOn={isOn}></ListWasteC>
        </collectionAreaData.Provider>
        : changeSlider === 1 ? <FindUser></FindUser> : ''
      }           
      </div>
  )
}

export default CollectorHome;