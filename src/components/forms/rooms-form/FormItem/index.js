import React from 'react';
import { Button, TextField } from '@material-ui/core';

const FormItem = ({ name, items, inc, dec, updateArea }) => {
  return (
    <div className='rooms-form__item'>
      <div className='rooms-form__item-left'>
        <div className='rooms-form__item-name'>{name}</div>
        <div className='rooms-form__item-calc'>
          <Counter
            qty={items.length}
            inc={() => inc(name)}
            dec={() => dec(name)}
          />
        </div>
      </div>

      <div className='rooms-form__item-wrap'>
        {items.map((i) => (
          <div className='rooms-form__item-right' key={i.id}>
            <div className='rooms-form__item-name'>Площа</div>
            <div className='rooms-form__item-calc'>
              <TextField
                className='rooms-form__item-area'
                id='outlined-number'
                type='tel'
                value={i.area}
                InputProps={{ inputProps: { min: 0, max: 10, maxLength: 2 } }}
                variant='outlined'
                onChange={(e) => updateArea(i.id, name, e.target.value)}
                required
                error={i.isInputError}
                autoComplete='off'
              />
              <span>
                м<sup>2</sup>
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const Counter = ({ qty = 1, inc, dec }) => {
  return (
    <div className='counter'>
      {!!qty && (
        <>
          <Button
            className='counter-btn dec'
            color='primary'
            variant='outlined'
            onClick={dec}
          >
            -
          </Button>
          <span className='counter-val'>{qty}</span>
        </>
      )}
      <Button
        className='counter-btn inc'
        color='primary'
        variant='outlined'
        onClick={() => inc('inc')}
      >
        +
      </Button>
    </div>
  );
};

export default FormItem;
