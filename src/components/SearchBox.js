import React from 'react'

const SearchBox = ({ searchfield, searchChange}) => {
    
        return (
            <div className="pa2">
            <input 
                type="search" 
                placeholder="search Houses" 
                className="pa3 ba b--black bg-lightest-yellow"
                onChange={searchChange}
            />
            </div>
        )
    
}

export default SearchBox
