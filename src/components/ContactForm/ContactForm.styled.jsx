import styled from 'styled-components';
import { Field } from 'formik';

export const Label = styled.label`
font-size: 16px;
font-weight: 500;
`;

export const Input = styled(Field)`
  font-size: 16px;
  font-weight: 400;
  border-radius: 4px;
  margin-bottom: 10px;

  :focus-within {
    border: 2px solid #40c4ff;
    outline: none;
  }
`;

export const AddBtn = styled.button`
  font-size: 14px;
  font-weight: 500;
  border-radius: 4px;
  margin-top: 10px;
  margin-bottom: 10px;

  :hover,
  :focus {
    background-color: #00e676;
    font-weight: 700;
  }
`;