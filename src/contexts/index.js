import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Api } from "../services/Api";
import { toast } from "react-toastify";

export const UserContext = createContext({});

export const Providers = ({ children }) => {
  const [user, setUser] = useState("");
  const [list, setList] = useState(null);
  const [userToken, setUserToken] = useState(null);
  const [userId, setUserId] = useState(null);
  const navigate = useNavigate();
  async function submitLogin(data) {
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
        setUserToken(res.data.token);
        setUserId(res.data.user.id);
        toast.success("Login realizado com sucesso!");
        navigate("/dashboard");
      })
      .catch((err) => {
        console.log(err);
        toast.error("Ops, algo deu errado!");
      });
  }
  const submitRegister = (data) => {
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
        toast.success("Cadastro realizado com sucesso!");
      })
      .catch((err) => {
        console.log(err);
        toast.error("Ops, algo deu errado!");
      });

    navigate("/login");
  };
  // dashboard
  useEffect(() => {
    setList(user.techs);
  }, [user]);
  const logout = () => {
    window.localStorage.clear();
    toast("Esperamos que volte logo! Tenha um bom dia.");
    navigate("/login");
    setUserToken(null);
    setUserId(null);
  };
  const submitNewTech = (data) => {
    Api.post(
      "/users/techs",
      {
        title: data.name,
        status: data.status,
      },
      { headers: { Authorization: `Bearer ${userToken}` } }
    )
      .then((res) => {
        console.log(res.data);
        toast.success("Tecnologia cadastrada com sucesso!");
      })
      .catch((err) => {
        console.log(err);
        toast.error("Ops, algo deu errado!");
        update(data);
      });
  };
  const update = (data) => {
    Api.post(
      "/users/techs/:tech_id",
      {
        status: data.status,
      },
      { headers: { Authorization: `Bearer ${userToken}` } }
    )
      .then((res) => {
        console.log(res.data);
        toast.success("Tecnologia atualizada com sucesso!");
      })
      .catch((err) => {
        console.log(err);
        toast.error("Ops, algo deu errado!");
      });
  };
  const removeTech = (title) => {
    const newList = list.filter((item) => item.title !== title);
    toast.success("Tecnologia removida com sucesso!");
    setList(newList);
  };
  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        navigate,
        submitLogin,
        submitRegister,
        list,
        setList,
        logout,
        submitNewTech,
        removeTech,
        userId,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
