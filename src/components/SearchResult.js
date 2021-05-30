import React from 'react'
import './css/SearchResult.css';


const SearchResult = (props) => {
    return (
        <div className="search-result-container">
            <a href={props.url}>
                <p className="search-url">{props.url}</p>
                <h2 className="search-title">{props.title}</h2>
            </a>
            <p className="search-desc">{props.desc}</p>
        </div>
    )
}

export default SearchResult
