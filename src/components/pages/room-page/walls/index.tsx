import React, { FC } from 'react';
import { SelectDropdown } from 'components';
import { IObjectDataItem, IObjectWallsProps } from 'interfaces';

const Walls: FC<IObjectWallsProps> = ({ activeItem, items, setActive }) => {
  return (
    <>
      {items.map((i: IObjectDataItem, idx: number) => {
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
