import styled from "styled-components";

export const Input = styled.input`
  width: 100%;
  padding: 10px 16px;
  margin: 10px 0 15px 0;
  font-size: 16px;
  font-weight: 400;
  color: var(--color-grey-1);
  background-color: var(--color-grey-2);
  border: 2px solid var(--color-grey-2);
  border-radius: 4px;
  box-sizing: border-box;

  &:focus {
    color: var(--color-grey-0);
    border: 2px solid var(--color-grey-0);
  }
`;
