import React, { useState } from 'react';
import './SearchBar.css';
import searchIcon from "../assets/img/search-svgrepo-com.svg";
import closeIcon from "../assets/img/close-svgrepo-com.svg";
import userEvent from '@testing-library/user-event';

const SearchBar = ({ placehodler, data }) => {

  const [filteredData, setFilteredData] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [searchInput, setSearchInput] = useState(true);

  const handleFilter = (event) => {
    const searchWord = event.target.value;
    setInputValue(searchWord)
    const newFilter = data.filter((value) => value.title.toLowerCase().includes(searchWord.toLowerCase()))
    if (searchWord === "") setFilteredData([]);
    else setFilteredData(newFilter);
  }

  const handleClearInput = () => {
    setFilteredData([]);
    setInputValue("");
  }

  const handleSearchInput = () => {
    if (inputValue === "") setSearchInput(false);
    else setSearchInput(true);
  }


  return (
    <div className='search'>
      <div className='searchInputs'>
        <input type='text' placeholder={placehodler} onChange={handleFilter} value={inputValue} />
        <div className='searchIcon'>
          {filteredData.length === 0 ? (<img src={searchIcon} alt='search icon' onClick={handleSearchInput} />) : (<img src={closeIcon} alt='close icon' onClick={handleClearInput} />)}
        </div>
      </div>
      {
        searchInput === false ? <div className='searchError'><p>Please add search query</p></div> : null
      }
      {filteredData.length != 0 &&
        <div className='dataResult'>
          {filteredData.slice(0, 10).map((value, index) => {
            return <a className='dataItem' target='_blank' href={value.link} rel="noreferrer" key={index}>{value.title}</a>
          })}
        </div>
      }
    </div>
  )
}

export default SearchBar