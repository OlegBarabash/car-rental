import { Formik, Field } from 'formik';
import React from 'react';
import { FilterWrapper, FormWrap, LabelWrap } from './Filter.styled';

const carMakes = [
  'Buick',
  'Volvo',
  'HUMMER',
  'Subaru',
  'Mitsubishi',
  'Nissan',
  'Lincoln',
  'GMC',
  'Hyundai',
  'MINI',
  'Bentley',
  'Mercedes-Benz',
  'Aston Martin',
  'Pontiac',
  'Lamborghini',
  'Audi',
  'BMW',
  'Chevrolet',
  'Mercedes-Benz',
  'Chrysler',
  'Kia',
  'Land',
];

const prices = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

const handleSubmit = value => {
  console.log('sorry, not done yet  ', value);
};

export const Filter = () => {
  return (
    <FilterWrapper>
      <Formik initialValues={{}} onSubmit={handleSubmit}>
        <FormWrap>
          <LabelWrap>
            Car brand
            <Field name="carMare" as="select" placeholder="Enter the text">
              <option key={'a'} defaultValue>
                Enter the text
              </option>
              {carMakes.map((make, i) => (
                <option key={i} value={make}>
                  {make}
                </option>
              ))}
            </Field>
          </LabelWrap>
          <LabelWrap>
            Price/ 1 hour
            <Field name="price" as="select" placeholder="To $">
              <option key={'a'} defaultValue>
                To $
              </option>
              {prices.map((p, i) => (
                <option key={i} value={p}>
                  {p}
                </option>
              ))}
            </Field>
          </LabelWrap>
          <button type="submit">Submit</button>
        </FormWrap>
      </Formik>
    </FilterWrapper>
  );
};
