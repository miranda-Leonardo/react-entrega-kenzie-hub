import { useState } from "react";
import { ButtonSmall } from "../../components/Buttons";
import { Container } from "../../components/Container";
import { Information, Paragraph } from "../../components/Paragraph";
import { H2, Title } from "../../components/Title";

export const Dashboard = () => {
  const { user, setUser } = useState("");
  const { module, setModule } = useState("");
  const { list, setList } = useState([null]);
  return (
    <>
      <Container>
        <header>
          <Title className="header__title">Kenzie Hub</Title>
          <ButtonSmall>Voltar</ButtonSmall>
        </header>
        <hr />
        <main>
          <section className="main__header">
            <H2>{`Olá, ${user}`}</H2>
            <Information>{module} Nome do módulo</Information>
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
