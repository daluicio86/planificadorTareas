export const initialState = {
	items: [],
};

const sesionProyectoReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'LISTA_PROYECTO_SESION':
			return {
				...state,
				items: action.items,
			};
		default:
			return state;
	}
};

export default sesionProyectoReducer;
