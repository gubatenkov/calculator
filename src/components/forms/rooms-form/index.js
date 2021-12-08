import React from 'react';
import { Button } from '@material-ui/core';

import FormItem from './FormItem';
import { useGlobalContext } from 'context/context';
import { Link } from 'react-router-dom';

const RoomsForm = () => {
  const { addRoom, removeRoom, rooms, updateRoomArea, setCurrentStep } =
    useGlobalContext();

  let isAnyRoomSelected = rooms.reduce((acc, el) => {
    return acc + el.items.length;
  }, 0);

  return (
    <form className='rooms-form'>
      <div className='rooms-form__heading'>
        <h1 className='rooms-form__heading-title'>Вибір кімнат</h1>
        <p className='rooms-form__heading-subtitle'>Загальна площа: 0.00м</p>
      </div>

      <div className='rooms-form__body'>
        {rooms.map((r, idx) => (
          <FormItem
            key={idx}
            {...r}
            inc={addRoom}
            dec={removeRoom}
            updateArea={updateRoomArea}
          />
        ))}
      </div>

      {!!isAnyRoomSelected && (
        <Button
          className='rooms-form__btn'
          variant='outlined'
          color='secondary'
          component={Link}
          to='/room/1'
        >
          Перейти до дизайну &gt;
        </Button>
      )}

      <Button
        className='rooms-form__btn'
        variant='contained'
        color='primary'
        onClick={() => setCurrentStep(2)}
      >
        &lt; Стан стін приміщення
      </Button>
    </form>
  );
};

export default RoomsForm;
