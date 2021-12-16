import React, { Suspense } from 'react';
import 'assets/scss/app.scss';
import { Routes, Route, Navigate } from 'react-router-dom';

import {
  Sidebar,
  ParamsPage,
  RoomPage,
  ToiletPage,
  KitchenPage,
  ResultPage,
  Loading,
} from 'components';

const App = () => {
  return (
    <div className='app'>
      <Sidebar />
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route exact path='/' element={<ParamsPage />} />
          <Route path='/room/:id' element={<RoomPage />} />
          <Route path='/toilet/:id' element={<ToiletPage />} />
          <Route path='/kitchen/:id' element={<KitchenPage />} />
          <Route path='/result' element={<ResultPage />} />
          <Route path='*' element={<Navigate to='/' />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;
