import HttpCliente from '../service/HttpCliente';
import axios from 'axios';

const instancia = axios.create();
instancia.CancelToken = axios.CancelToken;
instancia.isCancel = axios.isCancel;

export const actualizarCatalogo = async (id, catalogo) => {
	return new Promise((resolve, eject) => {
		HttpCliente.put(`/api/catalogo/${id}`, catalogo)
			.then((response) => {
				resolve(response);
			})
			.catch((error) => {
				resolve(error.response);
			});
	});
};

export const registrarCatalogo = async (catalogo) => {
	return new Promise((resolve, eject) => {
		HttpCliente.post('/api/catalogo', catalogo)
			.then((response) => {
				resolve(response);
			})
			.catch((error) => {
				resolve(error.response);
			});
	});
};

export const getCatalogos = (request) => {
	return new Promise((resolve, eject) => {
		instancia
			.get(`/api/catalogo?pageIndex=${request.pageIndex}&pageSize=${request.pageSize}&search=${request.search}&estado=${request.estado}&sort=${request.sort}&tipo=${request.tipo}`)
			.then((response) => {
				resolve(response);
			});
	});
};

export const getCatalogo = (id) => {
	return new Promise((resolve, eject) => {
		instancia
			.get(`/api/catalogo/${id}`)
			.then((response) => {
				resolve(response);
			})
			.catch((error) => {
				resolve(error.response);
			});
	});
};
