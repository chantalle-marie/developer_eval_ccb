import React from 'react';

import Header from './elements/Header';
import Home from './Home';

import {GlobalStyle} from './styles/GlobalStyle';

// <> </> is called a fragment
const App = () => (
    <> 
        <Header />
        <Home /> 
        <GlobalStyle />
    </>
)
 

export default App;
