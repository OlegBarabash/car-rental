import { Form } from 'formik';
import styled from 'styled-components';

export const FilterWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const FormWrap = styled(Form)`
  display: flex;
  justify-content: center;
  gap: 10px;
`;

export const LabelWrap = styled.label`
  width: 140px;
  display: flex;
  flex-direction: column;
`;
