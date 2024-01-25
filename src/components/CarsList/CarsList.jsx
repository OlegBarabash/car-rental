import { fetchCars } from '../../redux/cars/operations';
import { selectCars } from '../../redux/cars/selectors.js';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  CarImg,
  DescriptionText,
  EmptySvg,
  FilledSvg,
  HeartBtn,
  LMButton,
  List,
  ListItem,
  NamePriceDiv,
  PaginationDiv,
} from './CarsList.styled';
import icons from '../../images/sprite.svg';
import { CarInfoModal } from 'components/CarInfoModal/CarInfoModal';

export const CarsList = () => {
  const dispatch = useDispatch();
  const [localItems, setLocalItems] = useState(
    localStorage.getItem('cars') ? JSON.parse(localStorage.getItem('cars')) : []
  );
  const [page, setPage] = useState(1);

  const handleLike = car => {
    if (localItems.includes(car)) {
      setLocalItems(localItems.filter(c => c.id !== car.id));
    } else if (!localItems.length) {
      setLocalItems([car]);
    } else {
      setLocalItems([...localItems, car]);
    }
  };

  useEffect(() => {
    localStorage.setItem('cars', JSON.stringify(localItems));
  }, [localItems]);

  const [openModal, setOpenModal] = useState(null);

  useEffect(() => {
    dispatch(fetchCars(page));
  }, [dispatch, page]);

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

  const handlePrevPage = () => {
    setPage(page - 1);
  };

  const handleNextPage = () => {
    setPage(page + 1);
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
                <HeartBtn onClick={() => handleLike(car)}>
                  {localItems.find(({ id }) => id === car.id) && (
                    <FilledSvg>
                      <use href={icons + '#icon-heart-filled'}> </use>
                    </FilledSvg>
                  )}
                  {!localItems.find(({ id }) => id === car.id) && (
                    <EmptySvg>
                      <use href={icons + '#icon-heart-empty'}> </use>
                    </EmptySvg>
                  )}
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
                      {i !== 6 && i !== 3 && (
                        <svg>
                          <use href={icons + '#icon-vector'}> </use>
                        </svg>
                      )}
                      {i === 3 && <br />}
                    </span>
                  ))}
                </DescriptionText>
              </div>

              <LMButton onClick={() => setOpenModal(car)}>Learn more</LMButton>
            </ListItem>
          ))}
      </List>
      {openModal !== null && (
        <CarInfoModal modal={openModal} closeModal={() => setOpenModal(null)} />
      )}

      <PaginationDiv>
        <LMButton onClick={handlePrevPage} disabled={page === 1}>
          ←PREVIOUS
        </LMButton>
        <LMButton onClick={handleNextPage} disabled={cars.length < 12}>
          NEXT→
        </LMButton>
      </PaginationDiv>
    </div>
  );
};
