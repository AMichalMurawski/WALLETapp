import React from 'react';
import { ThreeCircles } from 'react-loader-spinner';
import scss from './Spinner.module.scss';

export const Spinner = ({ diameter = '100' }) => (
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
);
