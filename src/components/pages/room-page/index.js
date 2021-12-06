import React from 'react';

import { useGlobalContext } from 'context/context';
import { Ceilings, Walls, Floors } from 'components';

const RoomPage = () => {
  const {
    ceilings,
    walls,
    floors,
    setActiveCeiling,
    setActiveWall,
    setActiveFloor,
  } = useGlobalContext();

  return (
    <div className='room'>
      <div className='room-content'>
        <Ceilings
          activeItem={ceilings.activeItem}
          items={ceilings.items}
          setActive={setActiveCeiling}
        />
        <Walls
          activeItem={walls.activeItem}
          items={walls.items}
          setActive={setActiveWall}
        />
        <Floors
          activeItem={floors.activeItem}
          items={floors.items}
          setActive={setActiveFloor}
        />
      </div>
    </div>
  );
};

export default RoomPage;
