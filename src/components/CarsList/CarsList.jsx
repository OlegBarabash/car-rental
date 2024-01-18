import { fetchCars } from 'components/redux/cars/operations';
import { selectCars } from 'components/redux/cars/selectors';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

export const CarsList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCars());
  }, [dispatch]);

  const cars = useSelector(selectCars);

  return (
    <div>
      <h2>CarsList</h2>
      <ul>
        {cars &&
          cars.map(({ id, year, make, model, img, rentalPrice }) => (
            <li key={id}>
              <img src={img} alt={model} />
              <span>{make}</span>
              <span>{model}</span>
              <span>{year}</span>
              <span>{rentalPrice}</span>
              <button>Learn more</button>
            </li>
          ))}
      </ul>
    </div>
  );
};
