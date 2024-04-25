import React , { useState, useEffect }from "react";


function NewRqFromD(props){
  const [newRqFromD,setNewRqFromD] = useState([]);
    console.log('ok');
    useEffect( () => {
        //implement passing session id to fetch waste orders to have increased security later
        async function fetchNewRqFromD() {
          const res = await fetch(`http://localhost:5656/getNewRqFromD?id=${props.state._id}`, {
          method: 'GET'
          });
          const response = res.json();
          response.then( (data) => {
          console.log(data.newRqFromD);
          setNewRqFromD(data.newRqFromD);
        }).catch( err =>   console.log(err))
      }
      fetchNewRqFromD();
    },[])


    const ROWS_PER_PAGE = 10; // Define how many rows per page

    const [currentPage, setCurrentPage] = useState(0);

    // Calculate the index range of rows for the current page
    const startIndex = currentPage * ROWS_PER_PAGE;
    const endIndex = (currentPage + 1) * ROWS_PER_PAGE;

    // Get the data to be displayed on the current page
    const currentPageData = newRqFromD.slice(startIndex, endIndex);

    // Handle pagination
    const nextPage = () => {
        setCurrentPage(currentPage + 1);
    };

    const prevPage = () => {
        setCurrentPage(currentPage - 1);
    };

    return(
      <div>
        <div className="table-container">
          <div className="table-header">
            <table className='custom-table'>
              <thead>
                <tr>
                  <th style={{ width: '50px' }}>#</th> {/* Fixed width for this column */}
                  <th style={{ width: '200px' }}>Area</th>
                  <th style={{ width: '200px' }}>Types</th>
                  <th>Date Added</th>
                  {/* Add more table headers if needed */}
                </tr>
              </thead>
            </table>
          </div>
          <div className="table-body">
            <table className="custom-table">
              <tbody>
                {currentPageData.map((item,index) => {
                  //console.log(item.location);
                  return (
                    <tr key={item.id}>
                      <td style={{ width: '50px' }}>{startIndex + index + 1}</td> {/* Display row number */}
                      <td style={{ width: '200px' }}>{item.area}</td>
                      <td style={{ width: '200px' }}>
                        <span>{item.wasteTypes.join(',')}</span>
                      </td>
                      <td>{item.date}</td>
                      {/* Add more table cells if needed */}
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
          <button onClick={nextPage} disabled={endIndex >= newRqFromD.length}>Next</button>
        </div></div>
    )
}

export default NewRqFromD;