import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { ButtonDefault, ButtonSmall } from "../../components/Buttons";
import { Container, ContainerModal, Modal } from "../../components/Container";
import { Alert, Information, Paragraph } from "../../components/Paragraph";
import { H2, Title } from "../../components/Title";
import { Card, ContainerCard } from "../../components/Card";
import { Label } from "../../components/Label";
import { Input } from "../../components/Input";
import { Form } from "../../components/FormLogin";
import { Select } from "../../components/Select";
import { UserContext } from "../../contexts";
import { useContext, useState } from "react";

export const Dashboard = () => {
  const [renderModal, setRenderModal] = useState(false);
  const { user, navigate, list, logout, submitNewTech, removeTech, userId } =
    useContext(UserContext);
  const formSchema = yup.object().shape({
    name: yup.string().required("Insira seu nome"),
    status: yup.string().required("Selecione um módulo"),
  });
  const {
    register,
    handleSubmit,
    formState: { errors: err },
  } = useForm({
    resolver: yupResolver(formSchema),
  });
  const newTech = () => {
    return (
      <ContainerModal>
        <Modal>
          <Form onSubmit={handleSubmit(submitNewTech)}>
            <div className="modal__header">
              <h2>Cadastrar Tecnologia</h2>
              <ButtonSmall
                onClick={(event) => {
                  event.preventDefault();
                  setRenderModal(false);
                }}
              >
                X
              </ButtonSmall>
            </div>
            <Label htmlFor="name">Nome</Label>
            <Input
              id="name"
              type="text"
              placeholder="Digite aqui seu nome"
              {...register("name")}
            />
            <Alert>{err.name?.message}</Alert>
            <Label htmlFor="status">Selecionar Módulo</Label>
            <Select name="status" id="status" {...register("status")}>
              <option value="Iniciante">Iniciante</option>
              <option value="Intermediário">Intermediário</option>
              <option value="Avançado">Avançado</option>
            </Select>
            <Alert>{err.module?.message}</Alert>
            <ButtonDefault type="submit">Cadastrar Tecnologia</ButtonDefault>
          </Form>
        </Modal>
      </ContainerModal>
    );
  };
  if (!userId) {
    navigate("/login");
  }
  return (
    <>
      {renderModal && newTech()}
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
                <div className="main__content__header">
                  <p>Tecnologias</p>
                  <ButtonSmall
                    onClick={(event) => {
                      event.preventDefault();
                      // newTech();
                      setRenderModal(true);
                    }}
                  >
                    +
                  </ButtonSmall>
                </div>
                <ContainerCard>
                  {list.map((item) => {
                    return (
                      <Card key={item.title}>
                        <div>
                          <h1>{item.title}</h1>
                          <p>{item.status}</p>
                        </div>
                        <ButtonSmall
                          onClick={(event) => {
                            event.preventDefault();
                            removeTech(item.title);
                          }}
                        >
                          Delete
                        </ButtonSmall>
                      </Card>
                    );
                  })}
                </ContainerCard>
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
      )
    </>
  );
};
