import React, { FC, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { useGlobalContext } from 'context/context';
import { Ceilings, Walls, Floors } from 'components';

import { ceilings } from 'data/ceils';
import { walls } from 'data/walls';
import { floors } from 'data/floors';
import { IAppState, IObject, IRoom } from 'interfaces';

const RoomPage: FC = () => {
  const { rooms, setActiveCeiling, setActiveWall, setActiveFloor }: IAppState =
    useGlobalContext();
  let navigate = useNavigate();
  const { id } = useParams<string>();
  const leavingRooms: IObject = rooms.filter(
    (r: IObject) => r.name === 'Кімната'
  )[0];
  const currentRoom: IRoom = leavingRooms.items.filter(
    (i: IRoom) => i.id === Number(id)
  )[0];

  useEffect(() => {
    if (!currentRoom) {
      navigate('/', { replace: true });
    }
    //eslint-disable-next-line
  }, []);

  return (
    <div className='room'>
      <div className='room-content'>
        <Ceilings
          activeItem={currentRoom?.currentCeiling}
          items={ceilings}
          setActive={setActiveCeiling}
        />
        <Walls
          activeItem={currentRoom?.currentWall}
          items={walls}
          setActive={setActiveWall}
        />
        <Floors
          activeItem={currentRoom?.currentFloor}
          items={floors}
          setActive={setActiveFloor}
        />
      </div>
    </div>
  );
};

export default RoomPage;
