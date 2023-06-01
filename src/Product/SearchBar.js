import React from 'react'

function SearchBar() {
  return (
    <div style={{alignItems:'center',margin:'5px'}}>
    <input style={{width:'300px',padding:'2px'}} type="text" placeholder="Search.." name="search"/>
        <button type="submit" style={{padding:'2px'}}><i class="fa fa-search"></i></button>
    </div>
  )
}

export default SearchBar