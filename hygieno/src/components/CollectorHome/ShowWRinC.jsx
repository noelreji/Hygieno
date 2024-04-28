import React , { useState, useEffect }from "react";
import '../../styles/ShowWRinC.css';

import Popup from "./Popup";

const ShowWRinC = (props) => {
    console.log("loker");
    const [pickupButtonValue,setPickupButtonValue]=useState([]);
    const [disabledButtons, setDisabledButtons] = useState([]);



    const [isOpen, setIsOpen] = useState(false);


    const handleDataFromChild = (data) => {
      // Update state in the parent component with data from the child
      setIsOpen(data);
    };




  const ROWS_PER_PAGE = 10; // Define how many rows per page

  const [currentPage, setCurrentPage] = useState(0);

  // Calculate the index range of rows for the current page
  const startIndex = currentPage * ROWS_PER_PAGE;
  const endIndex = (currentPage + 1) * ROWS_PER_PAGE;
  console.log('newRqFromD');
  // Get the data to be displayed on the current page
  const newRequests = props.data;

  // Handle pagination
  const nextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const prevPage = () => {
    setCurrentPage(currentPage - 1);
  };

  const handlePickupBClick = async (index) => {
    setIsOpen(true);

    const updatedDisabledButtons = [...disabledButtons];
    updatedDisabledButtons[index] = true;
    setDisabledButtons(updatedDisabledButtons);
    const updatedPickupButtonValue = [...pickupButtonValue];
    updatedPickupButtonValue[index] = true;
    setPickupButtonValue(updatedPickupButtonValue);

  };

  

    return(
      <div className="WasteRQSection">
        
        <h2>Waste Requests</h2>
        <div className="table-container">
          
            
          <div className="table-body">
                <table className="WRQ-table">
                    <tbody>
                    {newRequests.newRequests_disposernames.map((item,index) => {
                        console.log(item);
                        console.log('index=',index);
                        console.log('isClicked= ',disabledButtons);
                        console.log(pickupButtonValue);
                        
                        console.log('img=',newRequests.newRequests_images[index])
      
                        const imageUrl = `${newRequests.newRequests_images[index]}`;
                        return (
                          <tr key={item.id}>
                              <td style={{ width: '50px' }}>{index + 1}</td> {/* Display row number */}
                              <td style={{ width: '600px' }}>
                                  Name: {item}<br/>
                                  Date of Request: {newRequests.newRequests_dates[index]}<br/>
                                  Address:<br/>
                                  Image: 
                                  
                                  <img 
                                    src={imageUrl} 
                                    width= {200}
                                    height= {200}
                                  />
                                  
                              </td>
                              <td style={{ width: '200px' }}>
                                  <button 
                                    key={index} 
                                    onClick={()=>handlePickupBClick(index)} 
                                    disabled={disabledButtons[index]}
                                    className="pickupButton"
                                  >
                                  {pickupButtonValue[index] ? 'Picked Up' : 'Pick Up'}
                                  </button>
                                  <Popup 
                                    key={index}
                                    isOpen={isOpen} 
                                    sendDataToParent={handleDataFromChild}
                                  />
                              </td>
                              
                          </tr>
                        ); 
                    })}
                    </tbody>
                </table>
            </div>
        </div>
        <div className="pagination">
            <button onClick={prevPage} disabled={currentPage === 0}>Previous</button>
            <span>Page {currentPage + 1}</span>
            <button onClick={nextPage} disabled={endIndex >= newRequests.newRequests_disposernames.length}>Next</button>
        </div>
      </div>
    );
  };

  export default ShowWRinC;