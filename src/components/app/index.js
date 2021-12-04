import React from 'react';
import 'assets/scss/app.scss';
import { Routes, Route } from 'react-router-dom';

import { ParamsPage, RoomPage } from 'components';

const App = () => {
  return (
    <div className='app'>
      <Routes>
        <Route exact path='/' element={<ParamsPage />} />
        <Route path='/room' element={<RoomPage />} />
      </Routes>
    </div>
  );
};

export default App;
