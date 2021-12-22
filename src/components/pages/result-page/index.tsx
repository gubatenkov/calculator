import React, { FC } from 'react';
import { ResultForm } from 'components';

const ResultPage: FC = () => {
  return (
    <div className='result'>
      <div className='container'>
        <div className='result-inner'>
          <ResultForm />
        </div>
      </div>
    </div>
  );
};

export default ResultPage;
