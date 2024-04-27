// Popup.js
import React, { useState } from 'react';
import '../../styles/CollectorHome/Popup.css';

const Popup = ({isOpen, sendDataToParent }) => {
    const [dataToSend, setDataToSend] = useState();


    const closePopup = () => {
        // Call the callback function passed from the parent with the data
        sendDataToParent(false);
      };
    
  const onYes = () =>{
    closePopup();
  }
  const onNo = () =>{
    closePopup();
  }

  return (
    <div>
      {isOpen && (
        <div className="popupContainer">
          <div className="popupContent">
            <span className="closeBtn" onClick={closePopup}>&times;</span>
            <p>Are you sure you picked this up?</p>
            <div className='buttons'>
                <button onClick={onYes}>
                    Yep
                </button>
                <button onClick={onNo}>
                    Nope
                </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Popup;
