import styled from 'styled-components';

export const ContactItem = styled.li`
  margin-bottom: 10px;
  display: flex;
  justify-content: space-between;
`;


export const DeleteBtn = styled.button`
  font-size: 16px;
  font-weight: 500;
  border-radius: 4px;
  margin-left: 10px;

  :hover,
  :focus {
    background-color: red;
    font-weight: 700;
  }
`;
