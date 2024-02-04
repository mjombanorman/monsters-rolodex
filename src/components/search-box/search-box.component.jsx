import React from 'react';

import './search-box.css';
const SearchBox = ({placeholder,handleChange}) => {
    return (
        <input
            className='search'
        type="search"
        placeholder={placeholder}
        onChange={handleChange}
      />
    );
}
 
export default SearchBox;

//(e) => this.setState({ searchField: e.target.value })