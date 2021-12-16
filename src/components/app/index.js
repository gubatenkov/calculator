import React, { Suspense } from 'react';
import 'assets/scss/app.scss';
import { Routes, Route } from 'react-router-dom';

import {
  Sidebar,
  ParamsPage,
  RoomPage,
  ToiletPage,
  KitchenPage,
  ResultPage,
} from 'components';

const App = () => {
  return (
    <div className='app'>
      <Sidebar />
      <Suspense fallback={<div>...Загрузка</div>}>
        <Routes>
          <Route exact path='/' element={<ParamsPage />} />
          <Route path='/room/:id' element={<RoomPage />} />
          <Route path='/toilet/:id' element={<ToiletPage />} />
          <Route path='/kitchen/:id' element={<KitchenPage />} />
          <Route path='/result' element={<ResultPage />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;
