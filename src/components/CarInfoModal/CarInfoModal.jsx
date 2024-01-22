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

  const getTechInfo = (address = modal.address) => {
    const res = address.split(',');
    return [
      [res[1]],
      [res[2]],
      `Id: ${modal.id}`,
      `Year: ${modal.year}`,
      `Type: ${modal.type}`,
      `Fuel Consumption: ${modal.fuelConsumption}`,
      `Engine Size: ${modal.engineSize}`,
    ];
  };

  const getRentalConditions = (rc = modal.rentalConditions) => {
    const res = rc.split('\n');
    res.push(`Mileage: ${modal.mileage.toLocaleString('en-US')}`);
    res.push(`Price: ${modal.rentalPrice.toString()}`);

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
        <CarPic src={modal.img} alt={modal.model} />
        <InfoDiv>
          <div>
            <NameDiv>
              <h3>
                {modal.make} <span>{modal.model}</span> ,{modal.year}
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
            <DescriptionText>{modal.description}</DescriptionText>
          </div>

          <div>
            <AccessoriesHeder>
              Accessories and functionalities:
            </AccessoriesHeder>
            <DescriptionInfo>
              {modal.accessories.map((text, i) => (
                <span key={i}>
                  {text}
                  {i !== modal.accessories.length - 1 && (
                    <svg>
                      <use href={icons + '#icon-vector'}> </use>
                    </svg>
                  )}
                </span>
              ))}
              <br />
              {modal.functionalities.map((text, i) => (
                <span key={i}>
                  {text}
                  {i !== modal.accessories.length - 1 && (
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
