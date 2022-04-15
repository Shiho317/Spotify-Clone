import React, { createContext } from 'react';
import './App.css';
import { GlobalStyle } from './styles/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/Theme.style';
import Login from './Components/Login/Login';
import Dashboard from './Components/Dashboard/Dashboard';

export const AppContext = createContext();

function App() {

  const code = new URLSearchParams(window.location.search).get("code");

  return (
    <React.Fragment>
      <GlobalStyle/>
        <ThemeProvider theme={theme}>
          <AppContext.Provider value={{ code }}>
            {code ? <Dashboard/> : <Login/>}
          </AppContext.Provider>
        </ThemeProvider>
    </React.Fragment>
  );
}

export default App;
