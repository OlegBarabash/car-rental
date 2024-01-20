import { fetchCars } from '../../redux/cars/operations';
import { selectCars } from '../../redux/cars/selectors.js';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  CarImg,
  DescriptionText,
  HeartBtn,
  LMButton,
  List,
  ListItem,
  NamePriceDiv,
} from './CarsList.styled';
import icons from '../../images/sprite.svg';

export const CarsList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCars());
  }, [dispatch]);

  const cars = useSelector(selectCars);

  const addressFilter = address => {
    const res = address.split(',');
    return [[res[1]], [res[2]]];
  };

  const descriptionList = ({
    address,
    rentalCompany,
    type,
    make,
    mileage,
    functionalities,
  }) => {
    const resArr = addressFilter(address);
    resArr.push(rentalCompany, type, make, mileage, functionalities[0]);

    return resArr;
  };

  return (
    <div>
      <h2>CarsList</h2>
      <List>
        {cars &&
          cars.map(car => (
            <ListItem key={car.id}>
              <div>
                <CarImg src={car.img} alt={car.model} />
                <HeartBtn>
                  <svg>
                    <use href={icons + '#icon-heart-empty'}> </use>
                  </svg>
                </HeartBtn>
                <NamePriceDiv>
                  <p>
                    {car.make} <span>{car.model}</span> ,{car.year}
                  </p>
                  <span>{car.rentalPrice}</span>
                </NamePriceDiv>
                <DescriptionText>
                  {descriptionList(car).map((text, i) => (
                    <span key={i}>
                      {text}
                      <svg>
                        <use href={icons + '#icon-vector'}> </use>
                      </svg>
                    </span>
                  ))}
                </DescriptionText>
              </div>

              <LMButton>Learn more</LMButton>
            </ListItem>
          ))}
      </List>
    </div>
  );
};
