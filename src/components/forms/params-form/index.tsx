import React, { FC } from 'react';
import { Button, Paper } from '@material-ui/core';

import { FormItemDropdown, FormItemInput } from 'components';
import { regions, statuses, ceilings } from 'data/paramsFormData';
import { useGlobalContext } from 'context/context';
import { IAppState } from 'interfaces';

const ParamsForm: FC = () => {
  const {
    params: { city, region, objectStatus, ceilingHeight },
    setCurrentStep,
    handleChange,
  }: IAppState = useGlobalContext();

  const handleSubmit = (e: React.FormEvent): void => {
    e.preventDefault();
    setCurrentStep(2);
  };

  return (
    <Paper className='params-paper' elevation={3}>
      <form className='params-form' onSubmit={handleSubmit}>
        <p className='params-form__title'>Параметри об'єкту</p>
        <div className='params-form__group'>
          <FormItemDropdown
            label='Область'
            name='region'
            value={region}
            fullWidth
            variant='outlined'
            items={regions}
            onChange={handleChange}
          />
          <FormItemInput
            name='city'
            label='Мiсто'
            value={city}
            fullWidth
            variant='outlined'
            onChange={handleChange}
          />
          <FormItemDropdown
            name='objectStatus'
            label="Статус об'єкту"
            value={objectStatus}
            fullWidth
            variant='outlined'
            items={statuses}
            onChange={handleChange}
          />
          <FormItemDropdown
            name='ceilingHeight'
            label='Висота стелі'
            value={ceilingHeight}
            fullWidth
            variant='outlined'
            items={ceilings}
            onChange={handleChange}
          />
        </div>

        <Button
          className='params-form__btn params-form__btn--rightImg'
          type='submit'
          variant='contained'
          color='primary'
          fullWidth
        >
          Стан стін приміщення
        </Button>
      </form>
    </Paper>
  );
};

export default ParamsForm;
