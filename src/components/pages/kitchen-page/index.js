import React from 'react';

import { useGlobalContext } from 'context/context';
import { Ceilings, Walls, Floors } from 'components';

import { kitchenCeilings } from 'data/ceils';
import { kitchenWalls } from 'data/walls';
import { kitchenFloors } from 'data/floors';

const KitchenPage = (props) => {
  const {
    setActiveKitchenCeiling,
    setActiveKitchenWall,
    setActiveKitchenFloor,
  } = useGlobalContext();

  return (
    <div className='kitchen'>
      <div className='kitchen-content'>
        <Ceilings
          id={props.id}
          items={kitchenCeilings}
          activeItem={props.currentCeiling}
          setActive={setActiveKitchenCeiling}
        />

        <Walls
          id={props.id}
          items={kitchenWalls}
          activeItem={props.currentWall}
          setActive={setActiveKitchenWall}
        />
        <Floors
          id={props.id}
          items={kitchenFloors}
          activeItem={props.currentFloor}
          setActive={setActiveKitchenFloor}
        />
      </div>
    </div>
  );
};

export default KitchenPage;
