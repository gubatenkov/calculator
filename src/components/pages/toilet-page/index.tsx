import React, { useEffect } from 'react';

import { useGlobalContext } from 'context/context';
import { Ceilings, Walls, Floors } from 'components';

import { toiletCeilings } from 'data/ceils';
import { toiletWalls } from 'data/walls';
import { toiletFloors } from 'data/floors';
import { useNavigate, useParams } from 'react-router-dom';
import { IAppState, IObject } from 'interfaces';

const ToiletPage = () => {
  const {
    rooms,
    setActiveToiletCeiling,
    setActiveToiletWall,
    setActiveToiletFloor,
  }: IAppState = useGlobalContext();
  let navigate = useNavigate();
  const { id } = useParams<string>();
  const toiletRooms: IObject | undefined = rooms.find(
    (r: IObject) => r.name === 'Санвузол'
  );
  let currentToilet: any;
  if (toiletRooms) {
    currentToilet = toiletRooms.items.filter((i) => i.id === Number(id))[0];
  }

  useEffect(() => {
    if (!currentToilet) {
      navigate('/', { replace: true });
    }
    //eslint-disable-next-line
  }, []);

  return (
    <div className='toilet'>
      <div className='toilet-content'>
        <Ceilings
          items={toiletCeilings}
          activeItem={currentToilet?.currentCeiling}
          setActive={setActiveToiletCeiling}
        />

        <Walls
          items={toiletWalls}
          activeItem={currentToilet?.currentWall}
          setActive={setActiveToiletWall}
        />
        <Floors
          items={toiletFloors}
          activeItem={currentToilet?.currentFloor}
          setActive={setActiveToiletFloor}
        />
      </div>
    </div>
  );
};

export default ToiletPage;
