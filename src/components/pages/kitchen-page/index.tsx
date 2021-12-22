import React, { FC, useEffect } from 'react';

import { useGlobalContext } from 'context/context';
import { Ceilings, Walls, Floors, NavbarPrice } from 'components';

import { kitchenCeilings } from 'data/ceils';
import { kitchenWalls } from 'data/walls';
import { kitchenFloors } from 'data/floors';
import { useNavigate, useParams } from 'react-router-dom';
import { IAppState, IObject, IRoom } from 'interfaces';

const KitchenPage: FC = () => {
  const {
    rooms,
    setActiveKitchenCeiling,
    setActiveKitchenWall,
    setActiveKitchenFloor,
  }: IAppState = useGlobalContext();
  let navigate = useNavigate();
  const { id } = useParams<string>();
  const kitchenRooms: IObject = rooms.filter(
    (r: IObject) => r.name === 'Кухня'
  )[0];
  const currentKitchen = kitchenRooms.items.filter(
    (i: IRoom) => i.id === Number(id)
  )[0];

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
      <NavbarPrice />
    </div>
  );
};

export default KitchenPage;
