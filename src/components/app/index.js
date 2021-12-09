import React from 'react';
import 'assets/scss/app.scss';
import { Routes, Route } from 'react-router-dom';

import {
  ParamsPage,
  RoomPage,
  ToiletPage,
  KitchenPage,
  ResultPage,
} from 'components';
import { useGlobalContext } from 'context/context';
import { renderRoutes } from 'utils/functions';

const App = () => {
  const { rooms } = useGlobalContext();

  const leavingRooms = rooms.find((r) => r.name === 'Кімната');
  const toiletRooms = rooms.find((r) => r.name === 'Санвузол');
  const kitchenRooms = rooms.find((r) => r.name === 'Кухня');

  return (
    <div className='app'>
      <Routes>
        <Route exact path='/' element={<ParamsPage />} />
        {renderRoutes(leavingRooms.items, '/room/:id', RoomPage)}
        {renderRoutes(toiletRooms.items, '/toilet/:id', ToiletPage)}
        {renderRoutes(kitchenRooms.items, '/kitchen/:id', KitchenPage)}
        <Route path='/result' element={<ResultPage />} />
      </Routes>
    </div>
  );
};

export default App;
