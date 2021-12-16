import React, { useEffect } from 'react';
import { Button } from '@material-ui/core';
import { useNavigate } from 'react-router-dom';

import FormItem from './FormItem';
import { useGlobalContext } from 'context/context';
import { isAllAreaInputsValid } from 'utils/functions';

const RoomsForm = () => {
  const {
    addRoom,
    removeRoom,
    rooms,
    totalArea,
    updateRoomArea,
    setCurrentStep,
    setErrorInputs,
    resetErrorInputs,
  } = useGlobalContext();
  const navigate = useNavigate();
  const isAnyRoomSelected = rooms.reduce((acc, el) => {
    return acc + el?.items?.length;
  }, 0);

  const getFirstRoomPath = (rooms) => {
    for (let room of rooms) {
      if (room?.items?.length) {
        return room.items[0].path;
      }
    }
    return '/';
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // if some rooms area inputs invalid
    if (!isAllAreaInputsValid(rooms)) {
      //make area inputs red
      setErrorInputs();
    } else {
      // redirect to customization page
      navigate(getFirstRoomPath(rooms));
    }
  };

  // reset red inputs on unmounting
  useEffect(
    () => () => resetErrorInputs(),
    // eslint-disable-next-line
    []
  );

  return (
    <form className='rooms-form' onSubmit={handleSubmit}>
      <div className='rooms-form__heading'>
        <h1 className='rooms-form__heading-title'>Вибір кімнат</h1>
        <p className='rooms-form__heading-subtitle'>
          Загальна площа: {totalArea}{' '}
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
          type='submit'
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
