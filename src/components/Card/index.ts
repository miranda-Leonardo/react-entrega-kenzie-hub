import styled from "styled-components";

export const ContainerCard = styled.ul`
  width: 100%;
  padding: 20px;
  margin: 10px 0;
  height: 40vh;
  min-height: 40vh;
  max-height: 80vh;
  background-color: var(--color-grey-3);
  overflow: auto;

  @media (min-width: 720px) {
    min-height: 50vh;
  }
`;

export const Card = styled.li`
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
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

  div {
    display: contents;
  }

  h1 {
    width: 50%;
    text-align: start;
    align-self: center;
    font-size: 14px;
    font-weight: 700;
    color: var(--color-white-0);
  }

  p {
    width: 50%;
    text-align: end;
    align-self: center;
    font-size: 12px;
    font-weight: 400;
    color: var(--color-grey-1);
  }

  button {
    margin-left: 10px;
  }
`;
