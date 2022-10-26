import styled from "styled-components";

export const ButtonDefault = styled.button`
  min-width: 130px;
  padding: 10px 20px;
  font-size: 16px;
  font-weight: 500;
  color: var(--color-white-0);
  background-color: var(--color-primary);
  border: 2px solid var(--color-primary);
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: var(--color-primary-focus);
    border: 2px solid var(--color-primary-focus);
  }
`;

export const ButtonNegative = styled(ButtonDefault)`
  background-color: var(--color-primary-negative);
  border: 2px solid var(--color-primary-negative);
`;

export const ButtonDisable = styled(ButtonDefault)`
  background-color: var(--color-grey-1);
  border: 2px solid var(--color-grey-1);

  &:hover {
    background-color: var(--color-grey-2);
    border: 2px solid var(--color-grey-2);
  }
`;

export const ButtonSmall = styled(ButtonDefault)`
  min-width: auto;
  padding: 10px;
  font-size: 12px;
  font-weight: 600;
  color: var(--color-white-0);
  background-color: var(--color-grey-3);
  border: 2px solid var(--color-grey-3);

  &:hover {
    background-color: var(--color-grey-2);
    border: 2px solid var(--color-grey-2);
  }
`;
