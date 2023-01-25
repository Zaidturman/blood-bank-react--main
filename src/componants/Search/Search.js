import './search.css';
import React from 'react';

function Search() {
  return (
    <div className='contaner'>
   <form>
        <input type="text" placeholder="Search..." className="search-input"/>
        <button type="submit" className="search-button" onClick={()=>console.log("iam searching!!")}>Search</button>
</form>
    </div>
  );
}

export default Search;
