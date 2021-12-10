import React from 'react';
import 'assets/scss/app.scss';
import { Routes, Route } from 'react-router-dom';

import {
  ParamsPage,
  RoomPage,
  ToiletPage,
  KitchenPage,
  ResultPage,
  Sidebar,
} from 'components';

const App = () => {
  return (
    <div className='app'>
      <Sidebar />
      <Routes>
        <Route exact path='/' element={<ParamsPage />} />
        <Route path='/room/:id' element={<RoomPage />} />
        <Route path='/toilet/:id' element={<ToiletPage />} />
        <Route path='/kitchen/:id' element={<KitchenPage />} />
        <Route path='/result' element={<ResultPage />} />
      </Routes>
    </div>
  );
};

export default App;
