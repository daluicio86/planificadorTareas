"use client";
import logo from "@/public/assets/images/logo.png";
import { loginUsuario } from "@/src/actions/UsuarioAction";
import { useStateValue } from "@/src/contexto/store";
import { Container, Grid, TextField, Typography } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useWindowSize } from "react-use";
const clearUsuario = {
  email: "",
  password: "",
};
export default function Home() {
  const [{ sesionUsuario }, dispatch] = useStateValue();
  const router = useRouter();
  const handleSearch = (event) => {
    event.preventDefault();
    event.target.reset();
  };

  const [usuario, setUsuario] = useState({
    email: "",
    password: "",
  });

  const loginEventoUsuario = () => {
    console.log('usuario',usuario)
    loginUsuario(usuario, dispatch).then((response) => {
      if (response.status === 200) {
        window.localStorage.setItem("token", response.data.token);
        setUsuario(clearUsuario);
        router.push("/edit-task");
      } else {
      }
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUsuario((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  return (
    <>
      <div className="row center mt100">
        <form onSubmit={handleSearch}>
          <Container>
            <Grid>
              <Typography className="txtPrimary-sf">
                Optimiza tus tareas y maximiza tu productividad
              </Typography>
              <Typography className="txtPrimary">
                Con un enfoque adecuado, lograrás resultados en menos tiempo y
                con mayor calidad. ¡Empieza hoy!
              </Typography>
              <div className="line" />
              <Grid item lg={12} md={6}>
                <TextField
                  id="email"
                  name="email"
                  inputProps={{ maxLength: 480 }}
                  className="txtmb"
                  label="Correo"
                  fullWidth
                  defaultValue=""
                  variant="outlined"
                  value={usuario.email}
                  onChange={handleChange}
                />
              </Grid>
              <br />
              <Grid item lg={12} md={6}>
                <TextField
                  id="password"
                  name="password"
                  inputProps={{ maxLength: 480 }}
                  className="txtmb"
                  label="Contraseña"
                  type="password"
                  fullWidth
                  defaultValue=""
                  variant="outlined"
                  value={usuario.password}
                  onChange={handleChange}
                />
              </Grid>
            </Grid>
          </Container>
          <div className="form-group">
            <div className="eulding-btn about">
              <Link href={{ javascript: void 0 }} onClick={loginEventoUsuario}>
                Ingresar <i className="bi bi-arrow-up-right-circle-fill"></i>
              </Link>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

//export default Home;
