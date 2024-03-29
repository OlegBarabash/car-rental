import { fetchCars } from '../../redux/cars/operations';
import { selectCars, selectSelected } from '../../redux/cars/selectors.js';
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
  ListHeader,
  ListItem,
  NamePriceDiv,
  PaginationDiv,
} from './CarsList.styled';
import icons from '../../images/sprite.svg';
import { CarInfoModal } from 'components/CarInfoModal/CarInfoModal';
import { addSelected, deleteSelected } from '../../redux/cars/selectedSlice';

export const CarsList = () => {
  const dispatch = useDispatch();

  const cars = useSelector(selectCars);
  const localItems = useSelector(selectSelected);

  const [page, setPage] = useState(1);

  const handleLike = car => {
    if (localItems.selected.find(({ id }) => id === car.id)) {
      dispatch(deleteSelected(car));
    } else {
      dispatch(addSelected(car));
    }
  };

  const [openModal, setOpenModal] = useState(null);

  useEffect(() => {
    dispatch(fetchCars(page));
  }, [dispatch, page]);

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
      <ListHeader>CarsList</ListHeader>
      <List>
        {cars &&
          cars.map(car => (
            <ListItem key={car.id}>
              <div>
                <CarImg src={car.img} alt={car.model} />
                <HeartBtn onClick={() => handleLike(car)}>
                  {localItems.selected.find(({ id }) => id === car.id) && (
                    <FilledSvg>
                      <use href={icons + '#icon-heart-filled'}> </use>
                    </FilledSvg>
                  )}
                  {!localItems.selected.find(({ id }) => id === car.id) && (
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
