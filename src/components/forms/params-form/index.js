import React, { useState } from 'react';
import { Button } from '@material-ui/core';

import { FormItemDropdown, FormItemInput } from 'components';
import { regions, statuses, ceilings } from 'data/paramsFormData';
import { useGlobalContext } from 'context/context';

const ParamsForm = () => {
  const { setCurrentStep } = useGlobalContext();
  const [data, setData] = useState({
    region: 1,
    city: 'Київ',
    objectStatus: 1,
    ceilsHeight: 1,
  });

  const handleFormItem = (e, id) => {
    const { name, value } = e.target;
    if (name === 'city') {
      setData((prev) => ({ ...prev, [name]: value }));
    } else {
      setData((prev) => ({ ...prev, [name]: id }));
    }
  };

  return (
    <form className='params-form'>
      <div className='params-form__heading'>
        <h1 className='params-form__heading-title'>Параметри об'єкту</h1>
        <p className='params-form__heading-subtitle'>
          КАЛЬКУЛЯТОР ВРАХОВУЄ ВИКЛЮЧНО ВАРТІСТЬ РОБІТ
        </p>
      </div>

      <div className='params-form__body'>
        <FormItemDropdown
          className='params-form__body-item'
          label='Область'
          name='region'
          defaultValue={data.region}
          items={regions}
          handler={handleFormItem}
        />
        <FormItemInput
          className='params-form__body-item'
          label='Мiсто'
          name='city'
          defaultValue={data.city}
          handler={handleFormItem}
        />
        <FormItemDropdown
          className='params-form__body-item'
          label="Статус об'єкту"
          name='objectStatus'
          defaultValue={data.objectStatus}
          items={statuses}
          handler={handleFormItem}
        />
        <FormItemDropdown
          className='params-form__body-item'
          label='Висота стелі'
          name='ceilsHeight'
          defaultValue={data.ceilsHeight}
          items={ceilings}
          handler={handleFormItem}
        />
      </div>

      <Button
        className='params-form__btn'
        variant='contained'
        color='primary'
        onClick={() => setCurrentStep(2)}
      >
        Стан стін приміщення &gt;
      </Button>
    </form>
  );
};

export default ParamsForm;
