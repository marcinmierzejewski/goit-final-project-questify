
import React, { Suspense } from 'react';
import { AppBar } from './components/AppBar/AppBar'

import { Outlet } from 'react-router-dom';
import PageLoader from './components/PageLoader/PageLoader';


const App = () => {
  return (

    <>     
      <AppBar/>
       <Suspense fallback={<PageLoader />}>
          <Outlet />
        </Suspense>
    </>

   

  );
}

export default App;
