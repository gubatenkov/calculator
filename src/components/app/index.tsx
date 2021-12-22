import React, { FC, Suspense } from 'react';
import 'assets/scss/app.scss';
import { Routes, Route, Navigate } from 'react-router-dom';

import {
  Sidebar,
  Loading,
  ParamsPage,
  RoomPage,
  ToiletPage,
  KitchenPage,
  ResultPage,
} from 'components';

const App: FC = () => {
  return (
    <div className='app'>
      <Sidebar />
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path='/' element={<ParamsPage />} />
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
