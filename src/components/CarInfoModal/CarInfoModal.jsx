import React, { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import {
  AccessoriesHeder,
  CarPic,
  CloseBtn,
  CondDiv,
  CondSpan,
  DescriptionInfo,
  DescriptionText,
  InfoDiv,
  ModalBackdrop,
  ModalContainer,
  NameDiv,
  RentalBtn,
} from './CarInfoModal.styled';
import { useSelector } from 'react-redux';
import { selectCars } from '../../redux/cars/selectors';
import icons from '../../images/sprite.svg';

const modalRoot = document.getElementById('modal-root');

export const CarInfoModal = ({ modal, closeModal }) => {
  const modalRef = useRef();
  useEffect(() => {
    if (!modal) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    const close = e => {
      const isButton = e.type === 'keydown';

      if (
        e.key === 'Escape' ||
        (!isButton && !modalRef.current.contains(e.target))
      ) {
        closeModal();
      }
    };

    window.addEventListener('keydown', close);
    window.addEventListener('mousedown', close);

    return () => {
      window.removeEventListener('keydown', close);
      window.removeEventListener('mousedown', close);
    };
  }, [modalRef, closeModal, modal]);

  const cars = useSelector(selectCars);

  const car = cars.find(({ id }) => id === modal);

  const getTechInfo = (address = car.address) => {
    const res = address.split(',');
    return [
      [res[1]],
      [res[2]],
      `Id: ${car.id}`,
      `Year: ${car.year}`,
      `Type: ${car.type}`,
      `Fuel Consumption: ${car.fuelConsumption}`,
      `Engine Size: ${car.engineSize}`,
    ];
  };

  const getRentalConditions = (rc = car.rentalConditions) => {
    const res = rc.split('\n');
    res.push(`Mileage: ${car.mileage.toLocaleString('en-US')}`);
    res.push(`Price: ${car.rentalPrice.toString()}`);

    return res.map(text => {
      if (text.includes(':')) {
        return text.split(':');
      }
      return text;
    });
  };

  return createPortal(
    <ModalBackdrop>
      <ModalContainer ref={modalRef}>
        <CloseBtn onClick={closeModal}>
          <svg>
            <use href={icons + '#icon-x'}> </use>
          </svg>
        </CloseBtn>
        <CarPic src={car.img} alt={car.model} />
        <InfoDiv>
          <div>
            <NameDiv>
              <h3>
                {car.make} <span>{car.model}</span> ,{car.year}
              </h3>
            </NameDiv>
            <DescriptionInfo>
              {getTechInfo().map((text, i) => (
                <span key={i}>
                  {text}
                  {i !== 6 && i !== 4 && (
                    <svg>
                      <use href={icons + '#icon-vector'}> </use>
                    </svg>
                  )}
                  {i === 4 && <br />}
                </span>
              ))}
            </DescriptionInfo>
            <DescriptionText>{car.description}</DescriptionText>
          </div>

          <div>
            <AccessoriesHeder>
              Accessories and functionalities:
            </AccessoriesHeder>
            <DescriptionInfo>
              {car.accessories.map((text, i) => (
                <span key={i}>
                  {text}
                  {i !== car.accessories.length - 1 && (
                    <svg>
                      <use href={icons + '#icon-vector'}> </use>
                    </svg>
                  )}
                </span>
              ))}
              <br />
              {car.functionalities.map((text, i) => (
                <span key={i}>
                  {text}
                  {i !== car.accessories.length - 1 && (
                    <svg>
                      <use href={icons + '#icon-vector'}> </use>
                    </svg>
                  )}
                </span>
              ))}
            </DescriptionInfo>
          </div>
          <div>
            <AccessoriesHeder>Rental Conditions: </AccessoriesHeder>
            <div>
              <CondDiv>
                {getRentalConditions().map(
                  (text, i) =>
                    (!Array.isArray(text) && (
                      <CondSpan key={i}>{text}</CondSpan>
                    )) ||
                    (Array.isArray(text) && (
                      <CondSpan key={i}>
                        {text[0]}: <span>{text[1]}</span>
                      </CondSpan>
                    ))
                )}
              </CondDiv>
            </div>
          </div>
          <RentalBtn href="tel:+380730000000">Rental car</RentalBtn>
        </InfoDiv>
      </ModalContainer>
    </ModalBackdrop>,

    modalRoot
  );
};
