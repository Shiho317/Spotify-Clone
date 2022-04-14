import React, { createContext } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import './App.css';
import Playlists from './Components/Playlists/Playlists';
import { GlobalStyle } from './styles/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/Theme.style';
import Login from './Components/Login/Login';

export const AppContext = createContext();

function App() {

  const code = new URLSearchParams(window.location.search).get("code")

  return (
    <React.Fragment>
      <GlobalStyle/>
        <ThemeProvider theme={theme}>
          <AppContext.Provider value={{ code }}>
            <Router>
              <Routes>
                <Route path='/' element={code ? <Playlists/> : <Login/>}/>
              </Routes>
            </Router>
          </AppContext.Provider>
        </ThemeProvider>
    </React.Fragment>
  );
}

export default App;
