import React, { FC, useState } from 'react';
import {
  Button,
  FormControl,
  FormControlLabel,
  FormLabel,
  Popover,
  Radio,
  RadioGroup,
} from '@material-ui/core';
import { useParams } from 'react-router-dom';
import { IObjectDataItem } from 'interfaces';

interface ISelectDropdown {
  items: IObjectDataItem[];
  value: number;
  name: string;
  posXinPerc: number;
  posYinPerc: number;
  onChange: (id: number, value: number) => void;
}

const SelectDropdown: FC<ISelectDropdown> = ({
  items,
  value,
  name,
  posXinPerc,
  posYinPerc,
  onChange,
}) => {
  const [isOpen, setOpen] = useState(false);
  const ref = React.useRef<HTMLDivElement>(document.createElement('div'));
  const { id } = useParams<string>();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void =>
    onChange(Number(id), Number(e.target.value));

  const handleClick = (): void => setOpen(true);

  return (
    <div
      className='select'
      ref={ref}
      style={{
        position: 'absolute',
        top: `calc(100vh - ${posYinPerc}%)`,
        left: `calc(100vw - ${posXinPerc}%)`,
      }}
    >
      <Button className='btn' variant='outlined' onClick={handleClick} />
      <Popover
        open={isOpen}
        anchorEl={ref.current}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        onClick={() => setOpen(false)}
      >
        <FormControl className='list' component='div'>
          <FormLabel className='legend' component='legend'>
            {name}:
          </FormLabel>
          <RadioGroup
            aria-label='ceilings'
            defaultValue='1'
            name='radio-buttons-group'
            value={value}
            onChange={handleChange}
          >
            {items.map((i: IObjectDataItem, idx: number) => (
              <FormControlLabel
                key={idx}
                value={i.variant}
                control={<Radio color='primary' />}
                label={i.label}
              />
            ))}
          </RadioGroup>
        </FormControl>
      </Popover>
    </div>
  );
};

export default SelectDropdown;
