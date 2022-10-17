import styled from "styled-components";

export const Container = styled.div`
  width: 90%;
  min-height: 100vh;
  padding: 0 0 20px 0;
  margin: auto;
  display: flex;
  flex-direction: column;

  @media (min-width: 720px) {
    width: 80%;
  }

  header {
    margin: 20px 0;
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    .header__title {
      width: auto;
    }
  }

  hr {
    width: 100%;
    margin: 20px 0;
    color: var(--color-grey-4);
  }

  .main__header {
    display: flex;
    flex-direction: column;
    align-items: center;

    h2 {
      width: 100%;
      text-align: left;
    }

    p {
      text-align: left;
    }

    @media (min-width: 720px) {
      flex-direction: row;

      h2 {
        width: 50%;
      }

      p {
        text-align: right;
      }
    }
  }

  .main__content__header {
    width: 100%;
    align-items: center;
    display: flex;
    justify-content: space-between;

    p {
      width: 50%;
      display: inline-block;
      text-align: start;
      color: var(--color-white-0);
    }

    button {
      text-align: end;
    }
  }

  .aviso {
    text-align: left;
  }
`;

export const ContainerForm = styled.div`
  min-width: 300px;
  max-width: 400px;
  margin: auto;

  h2 {
    width: 100%;
    margin: 20px 0;
    display: inline-block;
    text-align: center;
  }

  section {
    padding: 20px 0px;
    border-radius: 4px;
    background-color: var(--color-grey-3);
  }

  div {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 20px 0;
  }

  .div__title {
    width: auto;
  }
`;

export const ContainerModal = styled.div`
  width: 100vw;
  height: 100vh;
  z-index: 1;
  position: fixed;
  display: flex;
  background-color: var(--color-black-1);
`;

export const Modal = styled.div`
  min-width: 300px;
  max-width: 400px;
  padding: 20px;
  margin: auto;

  form > div {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    h2 {
      color: var(--color-white-0);
      min-width: 50%;
    }

    button {
      width: auto;
    }
  }
`;
