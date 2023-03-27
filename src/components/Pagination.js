import React from 'react'

function Pagination({GoToNextPage,GoToPrevPage}) {
  return (
    <div>
      {GoToNextPage && <button onClick={GoToNextPage}> Next Page </button>} 
      {GoToPrevPage && <button onClick={GoToPrevPage}> Previous Page </button>} 
     
     
    </div>
  )
}

export default Pagination
