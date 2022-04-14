import React from 'react'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import { SearchButton, SearchForm, SearchWrapper } from './Search.style'
import { FiSearch } from 'react-icons/fi'

const Search = () => {
  return (
    <React.Fragment>
      <Header/>
      <SearchWrapper>
        <SearchForm>
          <input type='text' placeholder='artist' />
          <SearchButton>
            <FiSearch/>
          </SearchButton>
        </SearchForm>
      </SearchWrapper>
      <Footer/>
    </React.Fragment>
  )
}

export default Search