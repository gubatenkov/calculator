import React, { FC } from 'react';
import { Button, Paper } from '@material-ui/core';
import { useForm } from 'react-hook-form';

import { TotalsCard } from 'components';
import FormItem from './form-item';
import { resultFormValidators } from 'utils/form-validators';

const ResultForm: FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: any) => {
    console.log(data);
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
        <form className='result-form' onSubmit={handleSubmit(onSubmit)}>
          <p className='result-form__title'>Отримайте детальні розрахунки</p>
          <div className='result-form__group'>
            <FormItem
              className='result-form__field'
              name='name'
              label="Iм'я"
              type='text'
              fullWidth
              variant='outlined'
              registerInput={register}
              validator={resultFormValidators.name}
              errors={errors.name}
            />
            <FormItem
              className='result-form__field'
              name='email'
              label='Email'
              type='email'
              fullWidth
              variant='outlined'
              registerInput={register}
              validator={resultFormValidators.email}
              errors={errors.email}
            />
            <FormItem
              className='result-form__field'
              name='phone'
              label='Телефон'
              type='tel'
              fullWidth
              variant='outlined'
              registerInput={register}
              validator={resultFormValidators.phone}
              errors={errors.phone}
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
