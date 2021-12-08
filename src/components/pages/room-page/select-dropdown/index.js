import React, { useState } from 'react';
import {
  Button,
  FormControl,
  FormControlLabel,
  FormLabel,
  Popover,
  Radio,
  RadioGroup,
} from '@material-ui/core';

const SelectDropdown = ({
  items,
  value,
  name,
  posXinPerc,
  posYinPerc,
  onChange,
  id,
}) => {
  const [isOpen, setOpen] = useState(false);
  const ref = React.useRef(null);

  const handleChange = (e) => onChange(+id, +e.target.value);

  const handleClick = () => setOpen(true);

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
            {items.map((i, idx) => (
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
