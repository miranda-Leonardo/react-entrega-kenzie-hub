import styled from "styled-components";

export const Card = styled.li`
  width: 100%;
  padding: 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: var(--color-grey-4);
  border: 2px solid var(--color-grey-4);
  border-radius: 4px;

  &:hover {
    background-color: var(--color-grey-2);
    border: 2px solid var(--color-grey-2);
  }

  h1 {
    text-align: start;
    font-size: 14px;
    font-weight: 700;
    color: var(--color-white-0);
  }

  p {
    text-align: end;
    font-size: 12px;
    font-weight: 400;
    color: var(--color-grey-1);
  }
`;
