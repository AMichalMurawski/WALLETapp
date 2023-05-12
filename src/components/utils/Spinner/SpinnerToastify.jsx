import React from 'react';
import { ThreeCircles } from 'react-loader-spinner';
import scss from './SpinnerToastify.module.scss';

export const Spinner = ({ diameter = '100' }) => (
  <div className={scss.spinnerPosition}>
      <ThreeCircles
    type="ThreeCircles"
    color="#24CCA7"
    className={scss.loader}
    height={diameter}
    width={diameter}
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

export const SpinnerToastify = ({ message }) => {
  return (
    <div className={scss.spinnerBox}>
      <Spinner diameter="20" />
      <p className={scss.spinnerMessage}>{message}</p>
    </div>
  );
};
