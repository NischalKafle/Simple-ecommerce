import React from 'react'
import { useState } from 'react';
function SearchBar() {
  const [query, setquery] = useState('')

  const handleChange = (e) => {
    setquery(e.target.value)
  }
  
    return (
      <div style={{ alignItems: 'center', margin: '5px' }}>
        <form >
          <input
            style={{ width: '300px', padding: '2px' }}
            type="text"
            placeholder="Search.."
            name="search"
            value={query} 
            onChange={handleChange}
          />
          <button type="submit" style={{ padding: '2px' }}>
            <i className="fa fa-search"></i>
          </button>
        </form>
      </div>
    );
  }
  
  

export default SearchBar