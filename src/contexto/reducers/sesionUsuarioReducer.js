export const initialState = {
	usuario: {
		id: '',
		nombre: '',
		apellido: '',
		email: '',
		username: '',
		ruc: '',
		tipo: 0,
	},
	autenticado: false,
};

const sesionUsuarioReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'INICIAR_SESION':
			return {
				...state,//objeto anterior
				usuario: action.sesion, //data a actualizar
				autenticado: action.autenticado,
			};
		case 'SALIR_SESION':
			return {
				...state,
				usuario: action.nuevoUsuario,
				autenticado: action.autenticado,
			};
		case 'ACTUALIZAR_USUARIO':
			return {
				...state,
				usuario: action.nuevoUsuario,
				autenticado: action.autenticado,
			};
		default:
			return state;
	}
};

export default sesionUsuarioReducer;
