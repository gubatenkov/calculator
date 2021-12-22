import React, { FC, useState } from 'react';
import { Button, TextField } from '@material-ui/core';
import { IRoom } from 'interfaces';

interface IFormItemProps {
  name: string;
  items: IRoom[];
  inc: (name: string) => void;
  dec: (name: string) => void;
  updateArea: () => void;
}

const FormItem: FC<IFormItemProps> = ({
  name,
  items,
  inc,
  dec,
  updateArea,
}) => {
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
              <AreaInput
                className='rooms-form__item-area'
                item={i}
                name={name}
                updateArea={updateArea}
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

interface ICounterProps {
  qty: number;
  inc: (e: React.MouseEvent<HTMLButtonElement>, name: string) => void;
  dec: (e: React.MouseEvent<HTMLButtonElement>, name: string) => void;
}

const Counter: FC<ICounterProps> = ({ qty = 1, inc, dec }) => {
  return (
    <div className='counter'>
      {!!qty && (
        <>
          <Button
            className='counter-btn dec'
            color='primary'
            variant='outlined'
            onClick={(e) => dec(e, 'dec')}
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
        onClick={(e) => inc(e, 'inc')}
      >
        +
      </Button>
    </div>
  );
};

interface IAreaInputProps {
  item: any;
  name: string;
  updateArea: (id: number, name: string, value: number) => void;
  [x: string]: any;
}

const AreaInput: FC<IAreaInputProps> = ({
  item,
  name,
  updateArea,
  ...restProps
}) => {
  const [inputValue, setInputValue] = useState<number | string>(item.area);

  const handleChange = (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>,
    id: number,
    name: string
  ) => {
    const value = +e.target.value;
    if (typeof value === 'number' && !isNaN(value)) {
      setInputValue(value);
      updateArea(id, name, value);
    }
  };

  const handleFocus = () => setInputValue('');

  const handleBlur = () => setInputValue(item.area);

  return (
    <TextField
      className='rooms-form__item-area'
      id='outlined-number'
      {...restProps}
      type='tel'
      value={inputValue}
      InputProps={{ inputProps: { min: 0, max: 10, maxLength: 2 } }}
      variant='outlined'
      autoComplete='off'
      error={item.isInputError}
      onFocus={handleFocus}
      onBlur={handleBlur}
      onChange={(e) => handleChange(e, item.id, name)}
      required
      autoFocus
    />
  );
};

export default FormItem;
