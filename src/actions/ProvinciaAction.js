import HttpCliente from '../service/HttpCliente';
import axios from 'axios';

const instancia = axios.create();
instancia.CancelToken = axios.CancelToken;
instancia.isCancel = axios.isCancel;

export const actualizarProvincia = async (id, provincia) => {
	/*if(provincia.file){
        const urlImage = await uploadImage(provincia.file);
        provincia.imagen = urlImage;
    }*/

	return new Promise((resolve, eject) => {
		HttpCliente.put(`/api/provincia/${id}`, provincia)
			.then((response) => {
				resolve(response);
			})
			.catch((error) => {
				resolve(error.response);
			});
	});
};

export const registrarProvincia = async (provincia) => {
	/*  if(provincia.file){
        const urlImage = await uploadImage(provincia.file);
        provincia.imagen = urlImage;
    }*/

	return new Promise((resolve, eject) => {
		HttpCliente.post('/api/provincia', provincia)
			.then((response) => {
				resolve(response);
			})
			.catch((error) => {
				resolve(error.response);
			});
	});
};

export const getProvincias = (request) => {
	return new Promise((resolve, eject) => {
		instancia
			.get(
				`/api/provincia?pageIndex=${request.pageIndex}&pageSize=${request.pageSize}&search=${request.search}&estado=${request.estado}&sort=${request.sort}`
			)
			.then((response) => {
				resolve(response);
			});
	});
};

export const getProvincia = (id) => {
	return new Promise((resolve, eject) => {
		instancia
			.get(`/api/provincia/${id}`)
			.then((response) => {
				resolve(response);
			})
			.catch((error) => {
				resolve(error.response);
			});
	});
};


