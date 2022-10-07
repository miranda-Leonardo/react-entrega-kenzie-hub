import styled from "styled-components";

export const Information = styled.p`
  width: 100%;
  padding: 20px 0;
  display: inline-block;
  text-align: center;
  font-size: 12px;
  font-weight: 400;
  color: var(--color-grey-1);
`;

export const Alert = styled(Information)`
  text-align: left;
  font-size: 14px;
  padding: 0 0 20px 0;
  color: var(--color-negative);
`;

export const Paragraph = styled(Information)`
  font-size: 16px;
`;
