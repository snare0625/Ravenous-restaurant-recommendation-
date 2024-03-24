import React, { useState } from 'react';
import './SearchBar.css';

function SearchBar() {
    const [search, setSearch] = useState();
    const [location, setLocation] = useState();
    const [sortingOption, setSortingOption] = useState();


    function handleOptionClick(selectedOption) {
        setSortingOption(selectedOption);
    }

    function userSearchOnChange(event) {
        setSearch(event.target.value);
    }

    function userLocationOnChange(event) {
        setLocation(event.target.value);
    }

    function restaurantSearch(event) {
        event.preventDefault();
        console.log("Searching Yelp with Pizza, Brooklyn, best_match");
    }

    return (
        <div className='search-section'>
            <div className='search-options'>
                <div className={`search-options-text ${sortingOption === 'Best' ? 'selected' : ''}`} onClick={() => handleOptionClick('Best')}>
                    <p>Best</p>
                    <p>Match</p>
                </div>
                <div className={`search-options-text ${sortingOption === 'Highest' ? 'selected' : ''}`} onClick={() => handleOptionClick('Highest')}>
                    <p>Highest</p>
                    <p>Rated</p>
                </div>
                <div className={`search-options-text ${sortingOption === 'Most' ? 'selected' : ''}`} onClick={() => handleOptionClick('Most')}>
                    <p>Most</p>
                    <p>Reviewed</p>
                </div>

            </div>
            <hr className='white-line'/>
            <form>
                <div className='search-bars'>
                    <div className='search-bar-wrap'>
                        <div className='search'>
                            <input 
                              type="search" 
                              name="search_businesses"
                              className="business-search"  
                              placeholder="Search Businesses"
                              onChange={userSearchOnChange}
                            >
                            </input>
                        </div>
                    </div>
                    <div className='search-bar-wrap'>
                        <div className='search'>
                            <input 
                              type="search" 
                              className="location-search"  
                              name="location_search"
                              placeholder="Where?"
                              onChange={userLocationOnChange}
                            >
                            </input>
                        </div>
                    </div>
                </div>
                <button type="submit" onClick={restaurantSearch}>Let's Go</button>
            </form> 
        </div>
    )
}

export default SearchBar;