import React from 'react';

import { ImageCard, ParamsForm, RoomsForm } from 'components';
import { Button, Grid } from '@material-ui/core';
import { cards } from 'data/imageCardsData';
import { useGlobalContext } from 'context/context';

const ParamsPage = () => {
  const {
    newWalls,
    toggleNewWalls,
    params: { currentStep },
    setCurrentStep,
  } = useGlobalContext();

  if (currentStep === 1) {
    return (
      <div className='params'>
        <div className='container'>
          <div className='params-inner'>
            <ParamsForm />
          </div>
        </div>
      </div>
    );
  }

  if (currentStep === 2) {
    return (
      <div className='params'>
        <div className='container'>
          <div className='params-inner'>
            <div className='params-heading'>
              <h1 className='params-heading__title'>Стан стін приміщення</h1>
              <p className='params-heading__subtitle'>
                Оберіть стан стін на даний момент
              </p>
            </div>
            <Grid
              container
              className='params-content'
              component='div'
              spacing={5}
            >
              <Grid item md={6}>
                <ImageCard
                  {...cards[0]}
                  active={!newWalls}
                  onChange={toggleNewWalls}
                />
              </Grid>
              <Grid item md={6}>
                <ImageCard
                  {...cards[1]}
                  active={newWalls}
                  onChange={toggleNewWalls}
                />
              </Grid>
            </Grid>
            <div className='params-actions'>
              <Button
                className='params-actions__btn params-actions__btn--rightImg'
                variant='contained'
                color='primary'
                onClick={() => setCurrentStep(3)}
              >
                Перейти до вибору кімнат
              </Button>
              <Button
                className='params-actions__btn params-actions__btn--leftImg'
                variant='contained'
                color='primary'
                onClick={() => setCurrentStep(1)}
              >
                Параметри об'єкту
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (currentStep === 3) {
    return (
      <div className='params'>
        <div className='container'>
          <div className='params-inner'>
            <RoomsForm />
          </div>
        </div>
      </div>
    );
  }
};

export default ParamsPage;
