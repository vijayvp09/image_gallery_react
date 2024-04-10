import { SearchContext } from '../../context/SearchContext'
import { useContext, useState } from 'react'

const SearchComponent = () => {
    const searchState = useContext(SearchContext);

    function handleSubmit(e) {
        e.preventDefault();
        const term = e.target.elements.searchTerm.value;
        searchState.setSearchTerm(term);
    }
    return(
        
            <form onSubmit={handleSubmit} className="w-full flex justify-center items-center">
                <input type="text" placeholder="search " name="searchTerm" className="rounded-lg lg:w-1/4 w-44 h-8 appearance-none focus:outline-none px-3 text-xl pb-1 mt-2" />
                <button type="submit" className="ml-3 bg-gray-400 rounded-lg w-16 lg:w-20 h-8 mt-2" >Search</button>
            </form>
        
    )
}

export default SearchComponent;