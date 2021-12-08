import React from 'react';

import { useGlobalContext } from 'context/context';
import { Ceilings, Walls, Floors } from 'components';

import { toiletCeilings } from 'data/ceils';
import { toiletWalls } from 'data/walls';
import { toiletFloors } from 'data/floors';

const ToiletPage = (props) => {
  const { setActiveToiletCeiling, setActiveToiletWall, setActiveToiletFloor } =
    useGlobalContext();

  return (
    <div className='toilet'>
      <div className='toilet-content'>
        <Ceilings
          id={props.id}
          items={toiletCeilings}
          activeItem={props.currentCeiling}
          setActive={setActiveToiletCeiling}
        />

        <Walls
          id={props.id}
          items={toiletWalls}
          activeItem={props.currentWall}
          setActive={setActiveToiletWall}
        />
        <Floors
          id={props.id}
          items={toiletFloors}
          activeItem={props.currentFloor}
          setActive={setActiveToiletFloor}
        />
      </div>
    </div>
  );
};

export default ToiletPage;
