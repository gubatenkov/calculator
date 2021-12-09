import React from 'react';
import { Button, Paper } from '@material-ui/core';

import FormItem from './form-item';
import { TotalsCard } from 'components';

const ResultForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className='wrapper' style={{ position: 'relative' }}>
      <TotalsCard
        style={{
          position: 'absolute',
          top: '-65px',
          left: '50%',
          transform: 'translateX(-50%)',
          backdropFilter: 'blur(3px)',
          backgroundColor: 'rgba(255, 255, 255, 0)',
        }}
      />

      <Paper className='result-paper' elevation={3}>
        <form className='result-form' onSubmit={handleSubmit}>
          <p className='result-form__title'>Отримайте детальні розрахунки</p>
          <div className='result-form__group'>
            <FormItem
              className='result-form__field'
              label="Iм'я"
              type='text'
              fullWidth
              variant='outlined'
            />
            <FormItem
              className='result-form__field'
              label='Email'
              type='email'
              fullWidth
              variant='outlined'
            />
            <FormItem
              className='result-form__field'
              label='Телефон'
              type='tel'
              fullWidth
              variant='outlined'
            />
          </div>

          <Button
            className='result-form__btn'
            type='submit'
            variant='contained'
            color='primary'
            fullWidth
          >
            Отримати
          </Button>
        </form>
      </Paper>
    </div>
  );
};

export default ResultForm;
