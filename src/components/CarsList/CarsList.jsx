import { fetchCars } from 'components/redux/cars/operations';
import { selectCars } from 'components/redux/cars/selectors';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CarImg, LMButton, List, ListItem } from './CarsList.styled';

export const CarsList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCars());
  }, [dispatch]);

  const cars = useSelector(selectCars);

  return (
    <div>
      <h2>CarsList</h2>
      <List>
        {cars &&
          cars.map(({ id, year, make, model, img, rentalPrice }) => (
            <ListItem key={id}>
              <CarImg src={img} alt={model} />
              <div>
                <span>{make}</span>
                <span>{model}</span>
                <span>{year}</span>
              </div>
              <span>{rentalPrice}</span>
              <LMButton>Learn more</LMButton>
            </ListItem>
          ))}
      </List>
    </div>
  );
};
