import React from 'react';

import { useGlobalContext } from 'context/context';
import { Ceilings, Walls, Floors } from 'components';

import { toiletCeilings } from 'data/ceils';
import { toiletWalls } from 'data/walls';
import { toiletFloors } from 'data/floors';
import { useParams } from 'react-router-dom';

const ToiletPage = (props) => {
  const {
    rooms,
    setActiveToiletCeiling,
    setActiveToiletWall,
    setActiveToiletFloor,
  } = useGlobalContext();

  const { id } = useParams();
  const toiletRooms = rooms.find((r) => r.name === 'Санвузол');
  const currentToilet = toiletRooms.items.filter((i) => i.id === +id)[0];

  return (
    <div className='toilet'>
      <div className='toilet-content'>
        <Ceilings
          items={toiletCeilings}
          activeItem={currentToilet.currentCeiling}
          setActive={setActiveToiletCeiling}
        />

        <Walls
          items={toiletWalls}
          activeItem={currentToilet.currentWall}
          setActive={setActiveToiletWall}
        />
        <Floors
          items={toiletFloors}
          activeItem={currentToilet.currentFloor}
          setActive={setActiveToiletFloor}
        />
      </div>
    </div>
  );
};

export default ToiletPage;
