"use client";
import openSnackbarReducer from "./openSnackbarReducer";
import sesionUsuarioReducer from "./sesionUsuarioReducer";
import sesionProyectoReducer from "./sesionProyectoReducer";

export const mainReducer = (
  { sesionUsuario, sesionProyecto, openSnackbar },
  action
) => {
  return {
    sesionUsuario: sesionUsuarioReducer(sesionUsuario, action),
    sesionProyecto: sesionProyectoReducer(sesionProyecto, action),
    openSnackbar: openSnackbarReducer(openSnackbar, action),
  };
};
