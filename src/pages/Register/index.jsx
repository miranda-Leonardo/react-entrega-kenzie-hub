import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { ButtonNegative, ButtonSmall } from "../../components/Buttons";
import { Container, ContainerForm } from "../../components/Container";
import { Form } from "../../components/FormLogin";
import { Input } from "../../components/Input";
import { Label } from "../../components/Label";
import { Alert, Information } from "../../components/Paragraph";
import { Select } from "../../components/Select";
import { H2, Title } from "../../components/Title";
import { useNavigate } from "react-router-dom";
import { Api } from "../../services/Api";

export const Register = () => {
  const navigate = useNavigate();
  const formSchema = yup.object().shape({
    name: yup.string().required("Insira seu nome"),
    email: yup
      .string()
      .email("Deve ser um email válido")
      .required("Email obrigatório"),
    password: yup
      .string()
      .matches(/[a-z]/, "Deve conter ao menos 1 letra minuscula")
      .matches(/(\d)/, "Deve conter ao menos um número")
      .matches(/(\W)|_/, "Deve conter um caracter especial")
      .matches(/.{8,}/, "Deve conter no mínimo 8 digitos")
      .required("Insira uma senha"),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password")], "Deve ser igual a senha"),
    biograph: yup.string().required("Digite algo sobre você"),
    contact: yup.string().required("Insira uma opção de contato"),
    module: yup.string().required("Selecione um módulo"),
  });
  const {
    register,
    handleSubmit,
    formState: { errors: err },
  } = useForm({
    resolver: yupResolver(formSchema),
  });
  const submit = (data) => {
    Api.post("/users", {
      email: data.email,
      password: data.password,
      name: data.name,
      bio: data.biograph,
      contact: data.contact,
      course_module: data.module,
    })
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });

    navigate("/login");
  };
  return (
    <>
      <Container>
        <ContainerForm>
          <div>
            <Title className="div__title">Kenzie Hub</Title>
            <ButtonSmall
              onClick={(event) => {
                event.preventDefault();
                navigate("/login");
              }}
            >
              Voltar
            </ButtonSmall>
          </div>
          <section>
            <H2>Crie sua conta</H2>
            <Information>Rapido e grátis, vamos nessa</Information>
            <Form onSubmit={handleSubmit(submit)}>
              <Label htmlFor="name">Nome</Label>
              <Input
                id="name"
                type="text"
                placeholder="Digite aqui seu nome"
                {...register("name")}
              />
              <Alert>{err.name?.message}</Alert>
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="Digite aqui seu email"
                {...register("email")}
              />
              <Alert>{err.email?.message}</Alert>
              <Label htmlFor="password">Senha</Label>
              <Input
                id="password"
                type="password"
                placeholder="Digite aqui sua senha"
                {...register("password")}
              />
              <Alert>{err.password?.message}</Alert>
              <Label htmlFor="confirmPassword">Confirmar Senha</Label>
              <Input
                id="confirmPassword"
                type="password"
                placeholder="Digite novamente sua senha"
                {...register("confirmPassword")}
              />
              <Alert>{err.confirmPassword?.message}</Alert>
              <Label htmlFor="biograph">Bio</Label>
              <Input
                id="biograph"
                type="text"
                placeholder="Fale sobre você"
                {...register("biograph")}
              />
              <Alert>{err.biograph?.message}</Alert>
              <Label htmlFor="contact">Contato</Label>
              <Input
                id="contact"
                type="text"
                placeholder="Opção de contato"
                {...register("contact")}
              />
              <Alert>{err.contact?.message}</Alert>
              <Label htmlFor="module">Selecionar Módulo</Label>
              <Select name="modulos" id="module" {...register("module")}>
                <option value="Primeiro módulo (Introdução ao Frontend)">
                  Primeiro Módulo
                </option>
                <option value="Segundo módulo (Frontend Avançado)">
                  Segundo Módulo
                </option>
                <option value="Terceiro módulo (Introdução ao Backend)">
                  Terceiro Módulo
                </option>
                <option value="Quarto módulo (Backend Avançado)">
                  Quarto Módulo
                </option>
              </Select>
              <Alert>{err.module?.message}</Alert>
              <ButtonNegative type="submit">Cadastrar</ButtonNegative>
            </Form>
          </section>
        </ContainerForm>
      </Container>
    </>
  );
};
