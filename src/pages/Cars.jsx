import { CarsList } from 'components/CarsList/CarsList';
import { Filter } from 'components/Filter/Filter';
import React from 'react';

export const Cars = () => {
  return (
    <>
      <Filter />
      <CarsList />
    </>
  );
};
