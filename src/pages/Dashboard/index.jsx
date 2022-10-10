import { toast } from "react-toastify";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ButtonSmall } from "../../components/Buttons";
import { Container } from "../../components/Container";
import { Information, Paragraph } from "../../components/Paragraph";
import { H2, Title } from "../../components/Title";

export const Dashboard = ({ user }) => {
  const navigate = useNavigate();
  const { list, setList } = useState(null);
  const logout = () => {
    window.localStorage.clear();
    toast("Esperamos que volte logo! Tenha um bom dia.");
    navigate("/login");
  };
  return (
    <>
      <Container>
        <header>
          <Title className="header__title">Kenzie Hub</Title>
          <ButtonSmall
            onClick={(event) => {
              event.preventDefault();
              logout();
            }}
          >
            Sair
          </ButtonSmall>
        </header>
        <hr />
        <main>
          <section className="main__header">
            <H2>{`Olá, ${user.name}`}</H2>
            <Information>{`${user.course_module}`}</Information>
          </section>
          <hr />
          <section className="main__content">
            {list ? (
              <>
                <ul>
                  <li>
                    <h1>Item 1</h1>
                  </li>
                </ul>
              </>
            ) : (
              <>
                <H2>Que pena! Estamos em desenvolvimento :(</H2>
                <Paragraph className="aviso">
                  Nossa aplicação está em desenvolvimento, em breve teremos
                  novidades
                </Paragraph>
              </>
            )}
          </section>
        </main>
      </Container>
    </>
  );
};
