"use client";
import { useEffect, useState } from "react";

import {
  Pagination,
  Button,
  Icon,
  Container,
  Grid,
  Typography,
  TextField,
} from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { useStateValue } from "@/src/contexto/store";
import { actualizarTarea, getTarea, getTareas } from "@/src/actions/TareaAction";
import { EditTask } from "@/src/components/task/EditTask";


export default function EditTaskPage() {
  const [{ sesionUsuario }, dispatch] = useStateValue();

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
    nombre: '',
    descripcion: '',
    hora: '0',
    minuto: '0',
    fecha: '',
    prioridad: 3,
    estado: 1,
    usuarioId: sesionUsuario
      ? sesionUsuario.usuario
        ? sesionUsuario.usuario.id
        : null
      : null
  });

  const handleChange = (event, value) => {
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

  return (
    <>
      <div className="container">
        <div className="row">
        {/*<div className="col-lg-2 col-md-12 mt-30 mt-lg-0">
            <VerticalMenu />
          </div>*/}
          <div className="col-lg-10 col-md-12 mt-30 mt-lg-0">
            <EditTask item={item} />
            <div className="tableContainer mt150 mb50">
              <Container>
                <Grid>
                  <Grid item lg={6} md={6}>
                    <TextField
                      className="txtmb"
                      label="Buscar"
                      variant="outlined"
                      name="search"
                      value={requestItem.search}
                      onChange={handleSearchChange}
                    />
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
                    onChange={handleChange}
                  />
                </Grid>
              </Container>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
