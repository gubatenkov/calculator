import React, { useEffect } from 'react';

import { useGlobalContext } from 'context/context';
import { Ceilings, Walls, Floors } from 'components';

import { kitchenCeilings } from 'data/ceils';
import { kitchenWalls } from 'data/walls';
import { kitchenFloors } from 'data/floors';
import { useNavigate, useParams } from 'react-router-dom';

const KitchenPage = (props) => {
  const {
    rooms,
    setActiveKitchenCeiling,
    setActiveKitchenWall,
    setActiveKitchenFloor,
  } = useGlobalContext();
  let navigate = useNavigate();
  const { id } = useParams();
  const kitchenRooms = rooms.find((r) => r.name === 'Кухня');
  const currentKitchen = kitchenRooms.items.filter((i) => i.id === +id)[0];

  useEffect(() => {
    if (!currentKitchen) {
      navigate('/', { replace: true });
    }
    //eslint-disable-next-line
  }, []);

  return (
    <div className='kitchen'>
      <div className='kitchen-content'>
        <Ceilings
          items={kitchenCeilings}
          activeItem={currentKitchen?.currentCeiling}
          setActive={setActiveKitchenCeiling}
        />

        <Walls
          items={kitchenWalls}
          activeItem={currentKitchen?.currentWall}
          setActive={setActiveKitchenWall}
        />
        <Floors
          items={kitchenFloors}
          activeItem={currentKitchen?.currentFloor}
          setActive={setActiveKitchenFloor}
        />
      </div>
    </div>
  );
};

export default KitchenPage;
