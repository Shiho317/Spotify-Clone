import React, { useState, useRef } from 'react'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import { ResultsWrapper, SearchButton, SearchForm, SearchWrapper } from './Search.style'
import { FiSearch } from 'react-icons/fi'
import Result from './Result'
import axios from 'axios'

const Search = ({ accessToken }) => {

  const isInput = useRef(null);

  const [ isName, setIsName ] = useState(false);

  const submitArtistName = (e) => {
    e.preventDefault();

    axios.get(`https://api.spotify.com/v1/search?q=${isInput.current.value}&type=artist&market=CA&limit=5&offset=0`, {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${accessToken}`
      }
    })
    .then(res => {
      console.log(res.data.artists.items)
      setResults(res.data.artists.items)
      setIsName(true)
    })
    .catch(err => {
      console.log(err)
    })
  };

  const [ results, setResults ] = useState([
    {
      external_urls: {
        spotify: ''
      },
      followers: {
        href: null,
        total: 0,
      },
      genres: [],
      href: '',
      id: '',
      images: [
        {
          height: 640,
          url: '',
          width: 640
        }
      ],
      name: '',
      popularity: 0,
      type: '',
      uri: ''
    }
  ])

  return (
    <React.Fragment>
      <Header/>
      <SearchWrapper>
        <SearchForm onSubmit={submitArtistName}>
          <input type='text' placeholder='artist' ref={isInput}/>
          <SearchButton type='submit'>
            <FiSearch/>
          </SearchButton>
        </SearchForm>
        {isName && (
          <ResultsWrapper>
            {results.map((result, index) => (
              <Result key={index} result={result}/>
            ))}
          </ResultsWrapper>
        )}
      </SearchWrapper>
      <Footer/>
    </React.Fragment>
  )
}

export default Search