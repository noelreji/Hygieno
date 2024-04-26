import React , { useState, useEffect }from "react";
import '../../styles/ShowWRinC.css';


const ShowWRinC = (props) => {
    console.log("loker");
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
    return(
      <div>
        jokwer
        <div className="table-container">
        <h2>Waste Requests</h2>
        
        <div className="table-body">
          <table className="custom-table">
            <tbody>
              {newRequests.newRequests_disposernames.map((item,index) => {
                //console.log(item);
                return (
                  <tr key={item.id}>
                    <td style={{ width: '1px' }}>{startIndex + index + 1}</td> {/* Display row number */}
                    <td style={{ width: '200px' }}>
                        Name: {item}<br/>
                        Date of Request: {newRequests.newRequests_date[index]}<br/>
                        Address:
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
        <button onClick={nextPage} disabled={endIndex >= props.data.length}>Next</button>
      </div>
      </div>
    );
  };

  export default ShowWRinC;