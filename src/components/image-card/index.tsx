import React, { FC } from 'react';
import { Switch } from '@material-ui/core';
import { IImageCardProps } from 'interfaces';

const ImageCard: FC<IImageCardProps> = ({
  img,
  text,
  subtext,
  active,
  onChange,
}) => {
  return (
    <div className='card'>
      <div className='card-top'>
        <div className='card-top__preview'>
          <img
            className={active ? 'card-top__img active' : 'card-top__img'}
            src={img}
            alt='card'
            onClick={onChange}
          />
        </div>
      </div>
      <div className='card-body'>
        <div className='card-body__wrap'>
          <h6 className='card-body__text'>{text}</h6>
          <p className='card-body__subtext'>{subtext}</p>
        </div>

        <Switch
          className='card-body__switch'
          checked={active}
          color='primary'
          name='checkbox'
          onChange={onChange}
        />
      </div>
    </div>
  );
};

export default ImageCard;
