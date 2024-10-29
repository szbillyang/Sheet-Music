import React from "react";

const SearchBox = ({ searchfield, searchChange }) => {
    return(
        <div className='pa1'>
            <input 
                className='pa3 ba b--green bg-lightest-blue'
                type='search' 
                placeholder='search music or instrument' 
                onChange={searchChange}
                style={{ width: '260px' }}
            />
        </div>
    );
}

export default SearchBox;