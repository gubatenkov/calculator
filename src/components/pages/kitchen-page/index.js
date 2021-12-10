import React from 'react';

import { useGlobalContext } from 'context/context';
import { Ceilings, Walls, Floors } from 'components';

import { kitchenCeilings } from 'data/ceils';
import { kitchenWalls } from 'data/walls';
import { kitchenFloors } from 'data/floors';
import { useParams } from 'react-router-dom';

const KitchenPage = (props) => {
  const {
    rooms,
    setActiveKitchenCeiling,
    setActiveKitchenWall,
    setActiveKitchenFloor,
  } = useGlobalContext();
  const { id } = useParams();
  const kitchenRooms = rooms.find((r) => r.name === 'Кухня');
  const currentKitchen = kitchenRooms.items.filter((i) => i.id === +id)[0];

  return (
    <div className='kitchen'>
      <div className='kitchen-content'>
        <Ceilings
          items={kitchenCeilings}
          activeItem={currentKitchen.currentCeiling}
          setActive={setActiveKitchenCeiling}
        />

        <Walls
          items={kitchenWalls}
          activeItem={currentKitchen.currentWall}
          setActive={setActiveKitchenWall}
        />
        <Floors
          items={kitchenFloors}
          activeItem={currentKitchen.currentFloor}
          setActive={setActiveKitchenFloor}
        />
      </div>
    </div>
  );
};

export default KitchenPage;
