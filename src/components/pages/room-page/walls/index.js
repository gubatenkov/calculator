import React from 'react';

import { SelectDropdown } from 'components';

const Walls = ({ activeItem, items, setActive }) => {
  return (
    <>
      {items.map((i, idx) => {
        if (i.img) {
          return (
            <img
              className={
                activeItem === i.variant
                  ? 'room-wall__img'
                  : 'room-wall__img hide'
              }
              src={i.img || ''}
              key={idx}
              alt='wall'
            />
          );
        }
        return null;
      })}

      <SelectDropdown
        name='Стiни'
        posXinPerc={75}
        posYinPerc={60}
        items={items}
        value={activeItem}
        onChange={setActive}
      />
    </>
  );
};

export default Walls;
