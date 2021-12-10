import React from 'react';

import { useGlobalContext } from 'context/context';
import { Ceilings, Walls, Floors } from 'components';

import { ceilings } from 'data/ceils';
import { walls } from 'data/walls';
import { floors } from 'data/floors';
import { useParams } from 'react-router-dom';

const RoomPage = (props) => {
  const { rooms, setActiveCeiling, setActiveWall, setActiveFloor } =
    useGlobalContext();
  const { id } = useParams();
  const leavingRooms = rooms.find((r) => r.name === 'Кімната');
  const currentRoom = leavingRooms.items.filter((i) => i.id === +id)[0];

  return (
    <div className='room'>
      <div className='room-content'>
        <Ceilings
          activeItem={currentRoom.currentCeiling}
          items={ceilings}
          setActive={setActiveCeiling}
        />
        <Walls
          activeItem={currentRoom.currentWall}
          items={walls}
          setActive={setActiveWall}
        />
        <Floors
          activeItem={currentRoom.currentFloor}
          items={floors}
          setActive={setActiveFloor}
        />
      </div>
    </div>
  );
};

export default RoomPage;
