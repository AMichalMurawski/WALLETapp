import React from 'react';
import { ThreeCircles } from 'react-loader-spinner';
import scss from './Spinner.module.scss';

export const Spinner = () => (
  <div className={scss.refresh}>
    <ThreeCircles
      type="ThreeCircles"
      color="#24CCA7"
      className={scss.loader}
      height="100"
      width="100"
      wrapperStyle={{}}
      wrapperClass=""
      visible={true}
      ariaLabel="three-circles-rotating"
      outerCircleColor="#4A56E2"
      innerCircleColor="#24CCA7"
      middleCircleColor="#4A56E2"
    />
  </div>
);
