import React from 'react';
import { Paper } from '@material-ui/core';

import img from 'assets/images/calc.png';
import { useGlobalContext } from 'context/context';

const TotalsCard = (props) => {
  const { totalArea } = useGlobalContext();

  return (
    <Paper
      className='totals-card'
      component='div'
      elevation={1}
      style={{ ...props.style }}
    >
      <div className='totals-card__left'>
        <div className='totals-card__left-text'>
          <img className='totals-card__img' src={img} alt='calculator' />
          <p>Вартість робіт</p>
        </div>
        <div className='totals-card__left-prices'>
          <p>57,228 грн.</p>
        </div>
      </div>
      <div className='totals-card__right'>
        <p>
          Загальна площа: {totalArea}{' '}
          <span>
            м<sup>2</sup>
          </span>
        </p>
      </div>
    </Paper>
  );
};

export default TotalsCard;
