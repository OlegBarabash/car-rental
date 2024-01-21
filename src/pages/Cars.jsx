import { CarsList } from 'components/CarsList/CarsList';
import { Container } from 'components/Container';
import { Filter } from 'components/Filter/Filter';
import React from 'react';

export const Cars = () => {
  return (
    <Container>
      <Filter />
      <CarsList />
    </Container>
  );
};
