import React from 'react';

import { useGlobalContext } from 'context/context';
import { Ceilings, Walls, Floors } from 'components';

import { ceilings } from 'data/ceils';
import { walls } from 'data/walls';
import { floors } from 'data/floors';

const RoomPage = (props) => {
  const { setActiveCeiling, setActiveWall, setActiveFloor } =
    useGlobalContext();

  return (
    <div className='room'>
      <div className='room-content'>
        <Ceilings
          id={props.id}
          activeItem={props.currentCeiling}
          items={ceilings}
          setActive={setActiveCeiling}
        />
        <Walls
          id={props.id}
          activeItem={props.currentWall}
          items={walls}
          setActive={setActiveWall}
        />
        <Floors
          id={props.id}
          activeItem={props.currentFloor}
          items={floors}
          setActive={setActiveFloor}
        />
      </div>
    </div>
  );
};

export default RoomPage;
