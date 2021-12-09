import React from 'react';
import { Button, Paper } from '@material-ui/core';

import { FormItemDropdown, FormItemInput } from 'components';
import { regions, statuses, ceilings } from 'data/paramsFormData';
import { useGlobalContext } from 'context/context';

const ParamsForm = () => {
  const {
    params: { city, region, objectStatus, ceilingHeight },
    setCurrentStep,
    handleChange,
  } = useGlobalContext();

  const handleSubmit = (e) => {
    e.preventDefault();
    setCurrentStep(2);
  };

  return (
    <Paper className='params-paper' elevation={3} onSubmit={handleSubmit}>
      <form className='params-form'>
        <p className='params-form__title'>Параметри об'єкту</p>
        <div className='params-form__group'>
          <FormItemDropdown
            className='params-form__field'
            label='Область'
            name='region'
            value={region}
            fullWidth
            variant='outlined'
            items={regions}
            onChange={handleChange}
          />
          <FormItemInput
            className='params-form__field'
            name='city'
            label='Мiсто'
            value={city}
            fullWidth
            variant='outlined'
            onChange={handleChange}
          />
          <FormItemDropdown
            className='params-form__field'
            name='objectStatus'
            label="Статус об'єкту"
            value={objectStatus}
            fullWidth
            variant='outlined'
            items={statuses}
            onChange={handleChange}
          />
          <FormItemDropdown
            className='params-form__field'
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
