import HttpCliente from "../service/HttpCliente";
import axios from "axios";

const instancia = axios.create();
instancia.CancelToken = axios.CancelToken;
instancia.isCancel = axios.isCancel;

export const actualizarCiudad = async (id, ciudad) => {
  return new Promise((resolve, eject) => {
    HttpCliente.put(`/api/ciudad/${id}`, ciudad)
      .then((response) => {
        resolve(response);
      })
      .catch((error) => {
        resolve(error.response);
      });
  });
};

export const registrarCiudad = async (ciudad) => {
  return new Promise((resolve, eject) => {
    HttpCliente.post("/api/ciudad", ciudad)
      .then((response) => {
        resolve(response);
      })
      .catch((error) => {
        resolve(error.response);
      });
  });
};

export const getCiudades = (request) => {
  let url = `/api/ciudad?pageIndex=${request.pageIndex}&pageSize=${request.pageSize}&search=${request.search}&estado=${request.estado}&sort=${request.sort}`;
  if (request.provinciaId !== undefined) {
    url = `/api/ciudad?pageIndex=${request.pageIndex}&pageSize=${request.pageSize}&search=${request.search}&estado=${request.estado}&sort=${request.sort}&provinciaId=${request.provinciaId}`;
  }
  return new Promise((resolve, eject) => {
    instancia.get(url).then((response) => {
      resolve(response);
    });
  });
};

export const getCiudadesProyecto = (request) => {
  return new Promise((resolve, eject) => {
    instancia.get(`/api/ciudad/GetCiudadesWithProyect`).then((response) => {
      resolve(response);
    });
  });
};

export const getCiudad = (id) => {
  return new Promise((resolve, eject) => {
    instancia
      .get(`/api/ciudad/${id}`)
      .then((response) => {
        resolve(response);
      })
      .catch((error) => {
        resolve(error.response);
      });
  });
};
