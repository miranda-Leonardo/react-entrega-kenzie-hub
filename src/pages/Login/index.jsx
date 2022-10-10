import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Container, ContainerForm } from "../../components/Container";
import { H2, Title } from "../../components/Title";
import { Form } from "../../components/FormLogin";
import { Label } from "../../components/Label";
import { Input } from "../../components/Input";
import { ButtonDefault, ButtonDisable } from "../../components/Buttons";
import { Alert, Information } from "../../components/Paragraph";
import { useNavigate } from "react-router-dom";
import { Api } from "../../services/Api";
import { toast } from "react-toastify";

export const Login = ({ setUser }) => {
  const navigate = useNavigate();
  const formSchema = yup.object().shape({
    email: yup.string().required("Insira um email válido"),
    password: yup.string().required("A senha deve ser igual a cadastrada!"),
  });
  const {
    register,
    handleSubmit,
    formState: { errors: err },
  } = useForm({
    resolver: yupResolver(formSchema),
  });
  async function submit(data) {
    await Api.post("/sessions", {
      email: data.email,
      password: data.password,
    })
      .then((res) => {
        console.log(res.data.user);
        setUser(res.data.user);
        window.localStorage.clear();
        window.localStorage.setItem("@KenzieHub:token", res.data.token);
        window.localStorage.setItem("@KenzieHub:id", res.data.user.id);
        toast.success("Login realizado com sucesso!");
        navigate("/dashboard");
      })
      .catch((err) => {
        console.log(err);
        toast.error("Ops, algo deu errado!");
      });
  }
  return (
    <>
      <Container>
        <ContainerForm>
          <Title>Kenzie Hub</Title>
          <section>
            <H2>Login</H2>
            <Form onSubmit={handleSubmit(submit)}>
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="Digite seu email"
                {...register("email")}
              />
              <Alert>{err.email?.message}</Alert>
              <Label htmlFor="password">Senha</Label>
              <Input
                type="password"
                id="password"
                placeholder="Digite sua senha"
                {...register("password")}
              />
              <Alert>{err.password?.message}</Alert>
              <ButtonDefault type="submit">Entrar</ButtonDefault>
              <Information>Ainda não possui uma conta?</Information>
              <ButtonDisable
                onClick={(event) => {
                  event.preventDefault();
                  navigate("/register");
                }}
              >
                Cadastrar-se
              </ButtonDisable>
            </Form>
          </section>
        </ContainerForm>
      </Container>
    </>
  );
};
