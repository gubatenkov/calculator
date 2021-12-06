import React from 'react';

import { SelectDropdown } from 'components';

const Floors = ({ activeItem, items, setActive }) => {
  return (
    <>
      {items.map((i, idx) => (
        <img
          className={
            activeItem === i.variant
              ? 'room-floor__img'
              : 'room-floor__img hide'
          }
          src={i.img || ''}
          key={idx}
          alt='ceil'
        />
      ))}

      <SelectDropdown
        name='Пiдлога'
        posXinPerc={80}
        posYinPerc={10}
        items={items}
        value={activeItem}
        onChange={setActive}
      />
    </>
  );
};

export default Floors;
