import React from 'react';
import 'assets/scss/app.scss';
import { Routes, Route } from 'react-router-dom';

import { ParamsPage, RoomPage, ToiletPage } from 'components';
import { useGlobalContext } from 'context/context';

const App = () => {
  const { rooms } = useGlobalContext();

  const leavingRooms = rooms.find((r) => r.name === 'Кімната');
  const toiletRooms = rooms.find((r) => r.name === 'Санвузол');

  const renderRoutes = (items, path, Component) => {
    if (items.length) {
      return items.map((i) => (
        <Route key={i.id} path={path} element={<Component {...i} />} />
      ));
    }

    return null;
  };

  return (
    <div className='app'>
      <Routes>
        <Route exact path='/' element={<ParamsPage />} />
        {renderRoutes(leavingRooms.items, '/room/:id', RoomPage)}
        {renderRoutes(toiletRooms.items, '/toilet/:id', ToiletPage)}
      </Routes>
    </div>
  );
};

export default App;
