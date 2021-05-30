import React, { useState } from "react";
import axios from 'axios';
import SearchResult from './SearchResult';
import './css/Search.css';

const Search = () => {

const [searchTerm, setSearchTerm] = useState();
const [searchData, setSearchData] = useState([])

const inputHandler = (event) => {
    setSearchTerm(event.target.value);
}

const searchHandler = (event) => {
    event.preventDefault();
    axios.get(`/search?query=${searchTerm}`)
    .then(function (response) {
        console.log(response.data);
        setSearchData(response.data);
    })
    .catch(function (error) {
        console.log(error);
    })
}

    return (
        <div className="search">
            <form action="/search" method="GET" onSubmit={searchHandler} >
                <input className="search-bar" type="text" placeholder="Search" onChange={inputHandler} />
                <input className="search-submit" type="submit" value="Submit" />
            </form>
            <div className="search-container">
                {searchData !== "No search results" ? searchData.map((data, index) => (
                    <SearchResult
                        key={index}
                        url={data.displayUrl}
                        title={data.name}
                        desc={data.snippet}
                    />
                )) :<h2 className="search-no-result">No search results found</h2> }
            </div>
        </div>
    )
}

export default Search
