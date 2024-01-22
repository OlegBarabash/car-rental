import React from 'react';
import { useEffect, useState } from 'react';
import {
  CarImg,
  DescriptionText,
  FilledSvg,
  HeartBtn,
  LMButton,
  List,
  ListItem,
  NamePriceDiv,
} from './CarsList.styled';
import icons from '../../images/sprite.svg';
import { CarInfoModal } from 'components/CarInfoModal/CarInfoModal';

export const ItemsList = () => {
  const [localItems, setLocalItems] = useState(
    localStorage.getItem('cars') ? JSON.parse(localStorage.getItem('cars')) : []
  );

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
      <h2>Selected</h2>
      <List>
        {localItems &&
          localItems.map(car => (
            <ListItem key={car.id}>
              <div>
                <CarImg src={car.img} alt={car.model} />
                <HeartBtn onClick={() => handleLike(car)}>
                  <FilledSvg>
                    <use href={icons + '#icon-heart-filled'}> </use>
                  </FilledSvg>
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
    </div>
  );
};
