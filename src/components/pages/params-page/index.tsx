import React, { FC, useEffect, useRef } from 'react';

import { ImageCard, ParamsForm, RoomsForm } from 'components';
import { Button } from '@material-ui/core';
import { cards } from 'data/imageCardsData';
import { useGlobalContext } from 'context/context';
import { IAppState } from 'interfaces';

const ParamsPage: FC = () => {
  const {
    newWalls,
    toggleNewWalls,
    params: { currentStep },
    setCurrentStep,
  }: IAppState = useGlobalContext();
  const ref = useRef<HTMLDivElement>(document.createElement('div'));

  const centerContentToWindow = (node: HTMLDivElement) => {
    if (!node) return;
    const contentSizes: DOMRect = node.getBoundingClientRect();
    const margin: number = Math.floor(
      window.innerHeight / 2 - contentSizes.height / 2
    );
    node.style.marginTop = `${margin}px`;
  };

  useEffect(() => {
    centerContentToWindow(ref.current);
  }, [currentStep]);

  if (currentStep === 1) {
    return (
      <div className='params' ref={ref}>
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
      <div className='params' ref={ref}>
        <div className='container'>
          <div className='params-inner'>
            <div className='params-heading'>
              <h1 className='params-heading__title'>Стан стін приміщення</h1>
              <p className='params-heading__subtitle'>
                Оберіть стан стін на даний момент
              </p>
            </div>
            <div className='params-content'>
              <ImageCard
                {...cards[0]}
                active={!newWalls}
                onChange={toggleNewWalls}
              />
              <ImageCard
                {...cards[1]}
                active={newWalls}
                onChange={toggleNewWalls}
              />
            </div>
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

  return (
    <div className='params' ref={ref}>
      <div className='container'>
        <div className='params-inner'>
          <RoomsForm />
        </div>
      </div>
    </div>
  );
};

export default ParamsPage;
