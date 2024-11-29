import { uploadTareaImage } from "../firebase";
import HttpCliente from "../service/HttpCliente";
import axios from "axios";

const instancia = axios.create();
instancia.CancelToken = axios.CancelToken;
instancia.isCancel = axios.isCancel;

export const actualizarTarea = async (id, tarea) => {
  return new Promise((resolve, eject) => {
    instancia.put(`/api/tarea/${id}`, tarea)
      .then((response) => {
        resolve(response);
      })
      .catch((error) => {
        resolve(error.response);
      });
  });
};

export const registrarTarea = async (tarea) => {
  console.log('task', tarea)
  return new Promise((resolve, eject) => {
    instancia.post("/api/tarea", tarea)
      .then((response) => {
        resolve(response);
      })
      .catch((error) => {
  console.log('error', error)

        resolve(error.response);
      });
  });
};

export const getTareas = (request) => {
  let url = `/api/tarea?pageIndex=${request.pageIndex}&pageSize=${request.pageSize}&search=${request.search}&estado=${request.estado}&sort=${request.sort}&tipo=${request.tipo}`;
  if (request.tipo == undefined)
    url = `/api/tarea?pageIndex=${request.pageIndex}&pageSize=${request.pageSize}&search=${request.search}&estado=${request.estado}&sort=${request.sort}`;

  return new Promise((resolve, eject) => {
    instancia
      .get(url)
      .then((response) => {
        resolve(response);
      })
      .catch((error) => {
        console.log('err',error.response)
        resolve(error.response);
      });
  });
};

export const getTarea = (id) => {
  return new Promise((resolve, eject) => {
    instancia
      .get(`/api/tarea/${id}`)
      .then((response) => {
        resolve(response);
      })
      .catch((error) => {
        resolve(error.response);
      });
  });
};
