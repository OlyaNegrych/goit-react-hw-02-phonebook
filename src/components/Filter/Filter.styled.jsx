import styled from 'styled-components';

export const FilterLabel = styled.label`
  font-size: 16px;
  font-weight: 500;
`;

export const FilterInput = styled.input`
  font-size: 16px;
  font-weight: 400;
  border-radius: 4px;

  :focus-within {
    border: 2px solid #40c4ff;
    outline: none;
  }
`;
