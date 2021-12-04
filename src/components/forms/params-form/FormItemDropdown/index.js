import React, { useState } from 'react';

import { FormControl, InputLabel, MenuItem, Select } from '@material-ui/core';

const FormItem = ({ className, items, name, label, handler, defaultValue }) => {
  const [currentItem, setCurrentItem] = useState(getInitialValue);

  function getInitialValue() {
    return items[defaultValue - 1];
  }

  const handleChange = (e) => {
    const currentItem = items.find((i) => i.name === e.target.value);
    if (currentItem) {
      setCurrentItem(currentItem);
      handler(e, currentItem.id);
    }
  };

  if (items.length !== 0) {
    return (
      <FormControl className={className}>
        <InputLabel id='select'>{label}</InputLabel>
        <Select
          labelId='select'
          name={name}
          value={currentItem.name}
          onChange={handleChange}
        >
          {items.map((item) => (
            <MenuItem key={item.id} value={item.name}>
              {item.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    );
  }
};

export default FormItem;
