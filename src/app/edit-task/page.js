"use client";
import * as React from "react";
import { useEffect, useState } from "react";

import {
  Pagination,
  Button,
  Icon,
  Container,
  Grid,
  Typography,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { useStateValue } from "@/src/contexto/store";

import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Divider from "@mui/material/Divider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

import {
  actualizarTarea,
  getTarea,
  getTareas,
  registrarTarea,
} from "@/src/actions/TareaAction";
//import { EditTask } from "@/src/components/item/EditTask";
const clearTask = {
  id: 0,
  nombre: "",
  descripcion: "",
  hora: "",
  minuto: "",
  fecha: "",
  prioridad: 0,
  estado: 1,
  usuarioId: "",
};
const labels = {
  1: "Baja",
  2: "Media Baja",
  3: "Media",
  4: "Media Alta",
  5: "Alta",
};
function getLabelText(value) {
  return `${value} Star${value !== 1 ? "s" : ""}, ${labels[value]}`;
}
export default function EditTaskPage() {
  const [{ sesionUsuario }, dispatch] = useStateValue();
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const [requestItem, setRequestItem] = useState({
    pageIndex: 1,
    pageSize: 10,
    sort: "fechaDesc",
    search: "",
    estado: "1",
  });

  const [paginadorItem, setPaginadorItem] = useState({
    cont: 0,
    pageIndex: 0,
    pageSize: 0,
    pageCount: 0,
    data: [],
  });

  const [item, setItem] = useState({
    id: 0,
    nombre: "",
    descripcion: "",
    hora: "0",
    minuto: "0",
    fecha: "",
    prioridad: 3,
    estado: 1,
    usuarioId: sesionUsuario
      ? sesionUsuario.usuario
        ? sesionUsuario.usuario.id
        : null
      : null,
  });

  const handlePagChange = (event, value) => {
    setRequestItem((anterior) => ({
      ...anterior,
      pageIndex: value,
    }));
  };

  const handleSearchChange = (e) => {
    const { name, value } = e.target;
    setRequestItem((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const editaItem = async (id) => {
    const resp = await getTarea(id);
    setItem(resp.data);
  };

  const eliminaItem = async (id) => {
    const resp = await getTarea(id);
    let item = resp.data;
    if (item.estado > 0) {
      item.estado = 0;
    } else {
      item.estado = 1;
    }
    await actualizarTarea(id, item);
    getListadoTareas();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(e.target);
    setTask((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleDateChange = (e) => {
    setTask((prev) => ({
      ...prev,
      ["fecha"]: e.$d.toJSON(),
    }));
  };

  const guardaTask = () => {
    registrarTarea(item).then((response) => {
        //cargar grid con el nuevo sponsor
        setTask(clearTask);
    });
};

  const getListadoTareas = async () => {
    const resp = await getTareas(requestItem);
    setPaginadorItem(resp.data);
  };

  useEffect(() => {
    //console.log('requestItem',requestItem);

    const getListaItems = async () => {
      const resp = await getTareas(requestItem);
      //console.log('aa',resp.data);
      setPaginadorItem(resp.data);
    };
    getListaItems();
  }, [requestItem, item]);

  if (!paginadorItem?.data) {
    return null;
  }

  const DrawerList = (
    <Box sx={{ width: 350 }} role="presentation" onClick={toggleDrawer(false)}>
      <Container>
        <Grid>
          <Grid item lg={12} md={6}>
            <Typography className="txtPrimary">Gestión de Tareas</Typography>
            <div className="line" />
            <form className="form" onSubmit={(e) => e.preventDefault()}>
              <Grid container spacing={2}>
                <Grid item md={12} xs={12} className="gridmb">
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker name="fecha" onChange={handleDateChange} />
                  </LocalizationProvider>
                </Grid>
                <Grid item md={12} xs={12} className="gridmb">
                  <TextField
                    className="txtmb"
                    label="Tarea"
                    variant="outlined"
                    fullWidth
                    name="nombre"
                    value={item.nombre}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item md={6} xs={6} className="gridmb">
                  <TextField
                    className="txtmb"
                    label="Horas"
                    variant="outlined"
                    fullWidth
                    name="hora"
                    value={item.hora}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item md={6} xs={6} className="gridmb">
                  <TextField
                    className="txtmb"
                    label="Minutos"
                    variant="outlined"
                    fullWidth
                    name="minuto"
                    value={item.minuto}
                    onChange={handleChange}
                  />
                </Grid>

                <Grid item md={12} xs={12} className="gridmb">
                  <FormControl fullWidth>
                    <InputLabel id="lb-prioridad">
                      Prioridad (1-Alta 5-Baja)
                    </InputLabel>
                    <Select
                      id="prioridad"
                      name="prioridad"
                      label="rioridad (1-Alta 5-Baja)"
                      value={item.prioridad}
                      onChange={handleChange}
                    >
                      <MenuItem key="1" value={1}>
                        1
                      </MenuItem>
                      <MenuItem key="2" value={2}>
                        2
                      </MenuItem>
                      <MenuItem key="3" value={3}>
                        3
                      </MenuItem>
                      <MenuItem key="4" value={4}>
                        4
                      </MenuItem>
                      <MenuItem key="5" value={5}>
                        5
                      </MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <br />
                <Grid item md={6} xs={6} className="gridmb">
                  {item.id == 0 ? (
                    <Button
                      className="btnSearch"
                      variant="contained"
                      fullWidth
                      onClick={guardaTask}
                      type="submit"
                    >
                      Guardar
                    </Button>
                  ) : (
                    <Button
                      className="btnSearch"
                      variant="contained"
                      fullWidth
                      onClick={editaTask}
                      type="submit"
                    >
                      Guardar
                    </Button>
                  )}
                </Grid>
              </Grid>
            </form>
          </Grid>
        </Grid>
      </Container>
      <Divider />
    </Box>
  );

  return (
    <>
      <div className="container">
        <div className="row">
          {/*<div className="col-lg-2 col-md-12 mt-30 mt-lg-0">
            <VerticalMenu />
          </div>*/}
          <div className="col-lg-10 col-md-12 mt-30 mt-lg-0">
            {/* <EditTask item={item} />*/}
            <div className="tableContainer mt150 mb50">
              <Container>
                <Grid container spacing={2}>
                  <Grid item lg={3} xs={6}>
                    <TextField
                      className="txtmb"
                      label="Buscar"
                      variant="outlined"
                      name="search"
                      value={requestItem.search}
                      onChange={handleSearchChange}
                    />
                  </Grid>
                  <Grid item lg={3} xs={6} className="gridmb">
                    <Button
                      className="btnSearch"
                      variant="contained"
                      fullWidth
                      type="submit"
                      onClick={toggleDrawer(true)}
                    >
                      Agregar Tarea
                    </Button>
                  </Grid>

                  <Grid item lg={12} md={6}>
                    <TableContainer className="tContainer">
                      <Table>
                        <TableHead>
                          <TableRow>
                            <TableCell>NOMBRE</TableCell>
                            <TableCell>PRIORIDAD</TableCell>
                            <TableCell>FECHA</TableCell>
                            <TableCell>TIEMPO</TableCell>
                            <TableCell></TableCell>
                          </TableRow>
                        </TableHead>
                        <TableBody>
                          {paginadorItem.data.map((data) => (
                            <TableRow key={data.id}>
                              <TableCell>{data.nombre}</TableCell>
                              <TableCell>{data.descripcion}</TableCell>
                              <TableCell style={{ width: "120px" }}>
                                {String(data.fecha).split("T")[0]}
                              </TableCell>
                              <TableCell>
                                <Button
                                  variant="contained"
                                  color="primary"
                                  onClick={() => editaItem(data.id)}
                                >
                                  <i className="bi bi-pencil-fill"></i>
                                </Button>
                                <Button
                                  variant="contained"
                                  color="secondary"
                                  onClick={() => eliminaItem(data.id)}
                                >
                                  <i className="bi bi-trash"></i>
                                </Button>
                              </TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </TableContainer>
                  </Grid>
                </Grid>
                <Grid>
                  <Pagination
                    className="tContainer mt10"
                    count={paginadorItem.pageCount}
                    page={paginadorItem.pageIndex}
                    onChange={handlePagChange}
                  />
                </Grid>
              </Container>
            </div>
          </div>
        </div>
      </div>

      <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </>
  );
}
