
import React from 'react';
import { AppBar } from './components/AppBar/AppBar'

import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import PageLoader from './components/PageLoader/PageLoader';


const App = () => {
  return (

    <>
     
      <AppBar/>
    </>

    <Suspense fallback={<PageLoader />}>
      <Outlet />
    </Suspense>

  );
}

export default App;
