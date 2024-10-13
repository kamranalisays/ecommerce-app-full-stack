import React from 'react';

import {BrowserRouter  , Routes , Route, Navigate} from 'react-router-dom';
import Products from './components/ProductComponent/Products';



const  App = () =>  {
  return (
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Products />}  /> 
      <Route path='*' element={<Navigate to='/' />} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
