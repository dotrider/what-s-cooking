import { getSuggestedQuery } from '@testing-library/react'
import React from 'react'
import SearchBar from "material-ui-search-bar";



const Search = ({query, setQuery, handleSubmit}) => {



    return (
        <section style={{padding: '3rem'}}>
                    <SearchBar
                        value={query}
                        onChange={(newQuery) => setQuery( newQuery )}
                        onRequestSearch={handleSubmit}
                        style={{
                        margin: '0 auto',
                        maxWidth: 500
                    }}
                />
        </section>
    )
}

export default Search
