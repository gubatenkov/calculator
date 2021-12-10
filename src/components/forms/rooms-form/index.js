import React from 'react';
import { Button } from '@material-ui/core';

import FormItem from './FormItem';
import { useGlobalContext } from 'context/context';
import { Link } from 'react-router-dom';

const RoomsForm = () => {
  const { addRoom, removeRoom, rooms, updateRoomArea, setCurrentStep } =
    useGlobalContext();

  const isAnyRoomSelected = rooms.reduce((acc, el) => {
    return acc + el?.items?.length;
  }, 0);

  const firstRoomPath = rooms.reduce((acc, el) => {
    if (el?.items?.length > 0) {
      acc = el.items[0].path;
    }
    return acc;
  }, '');

  return (
    <form className='rooms-form'>
      <div className='rooms-form__heading'>
        <h1 className='rooms-form__heading-title'>Вибір кімнат</h1>
        <p className='rooms-form__heading-subtitle'>
          Загальна площа: 0.00{' '}
          <span>
            м<sup>2</sup>
          </span>
        </p>
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
          to={firstRoomPath}
        >
          Перейти до дизайну
        </Button>
      )}

      <Button
        className='rooms-form__btn rooms-form__btn--leftImg'
        variant='contained'
        color='primary'
        onClick={() => setCurrentStep(2)}
      >
        Стан стін приміщення
      </Button>
    </form>
  );
};

export default RoomsForm;
