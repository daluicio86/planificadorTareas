
import { Autocomplete, Avatar, Box, Button, CardMedia, Container, FormControl, Grid, InputLabel, MenuItem, Select, Stack, TextField, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useStateValue } from '@/src/contexto/store';
import { actualizarTarea, getTarea, registrarTarea } from '@/src/actions/TareaAction';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
const clearTask = {
    id: 0,
    nombre: '',
    descripcion: '',
    hora: '',
    minuto: '',
    fecha: '',
    prioridad: 0,
    estado: 1,
    usuarioId: ''
};

const labels = {
    1: 'Baja',
    2: 'Media Baja',
    3: 'Media',
    4: 'Media Alta',
    5: 'Alta',
};
function getLabelText(value) {
    return `${value} Star${value !== 1 ? 's' : ''}, ${labels[value]}`;
}
const EditTask = ({ item }) => {//id, nombre, ruc, telefono, email, constructora, web, direccion, aprobado, usuarioId, imagen, file, imagenTemporal }) => {

    const [{ sesionUsuario }, dispatch] = useStateValue();
    const [value, setValue] = React.useState(3);
    const [hover, setHover] = React.useState(-1);

    const [task, setTask] = useState({
        id: item.id,
        nombre: item.nombre,
        descripcion: item.descripcion,

        hora: item.hora,
        minuto: item.minuto,
        fecha: item.fecha,
        prioridad: item.prioridad,
        usuarioId: item.usuarioId,
        estado: item.estado,
    });

    const [requestItem, setRequestItem] = useState({
        pageIndex: 1,
        pageSize: 100,
        sort: "fechaDesc",
        search: "",
        estado: 1,
    });

    const [paginadorItem, setPaginadorItem] = useState({
        cont: 0,
        pageIndex: 0,
        pageSize: 0,
        pageCount: 0,
        data: [],
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        console.log(e.target)
        setTask((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleDateChange = (e) => {

        console.log('item', e.$d.toJSON())

        setTask((prev) => ({
            ...prev,
            ['fecha']: e.$d.toJSON(),
        }));

    }
    const editaTask = async () => {
        actualizarTarea(task.id, task).then((response) => {
            item = response.data;
            setTask(clearTask);
        });
    };



    useEffect(() => {
        setTask(item);
    }, [item]);

    return (
        <div className='mt120'>
            <Container>
                <Grid>
                    <Grid item lg={12} md={6}>
                        <Typography className='txtPrimary'>Gestión de Tareas</Typography>
                        <div className='line' />
                        <form className='form' onSubmit={(e) => e.preventDefault()}>
                            <Grid container spacing={2}>
                                <Grid item md={12} xs={12} className='gridmb'>
                                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                                        <DatePicker name='fecha' onChange={handleDateChange} />
                                    </LocalizationProvider>
                                </Grid>
                                <Grid item md={12} xs={12} className='gridmb'>
                                    <TextField
                                        className='txtmb'
                                        label="Tarea"
                                        variant="outlined"
                                        fullWidth
                                        name="nombre"
                                        value={task.nombre}
                                        onChange={handleChange}
                                    />
                                </Grid>
                                <Grid item md={1} xs={6} className='gridmb'>
                                    <TextField
                                        className='txtmb'
                                        label="Horas"
                                        variant="outlined"
                                        fullWidth
                                        name="hora"
                                        value={task.hora}
                                        onChange={handleChange}
                                    />
                                </Grid>
                                <Grid item md={1} xs={6} className='gridmb'>
                                    <TextField
                                        className='txtmb'
                                        label="Minutos"
                                        variant="outlined"
                                        fullWidth
                                        name="minuto"
                                        value={task.minuto}
                                        onChange={handleChange}
                                    />
                                </Grid>

                                <Grid item md={3} xs={12} className='gridmb'>
                                    <FormControl fullWidth>
                                        <InputLabel id="lb-prioridad">Prioridad (1-Alta 5-Baja)</InputLabel>
                                        <Select id="prioridad" name="prioridad"
                                            label="rioridad (1-Alta 5-Baja)"
                                            value={task.prioridad}
                                            onChange={handleChange}>
                                            <MenuItem key='1' value={1}>
                                                1
                                            </MenuItem>
                                            <MenuItem key='2' value={2}>
                                                2
                                            </MenuItem>
                                            <MenuItem key='3' value={3}>
                                                3
                                            </MenuItem>
                                            <MenuItem key='4' value={4}>
                                                4
                                            </MenuItem>
                                            <MenuItem key='5' value={5}>
                                                5
                                            </MenuItem>
                                        </Select>
                                    </FormControl>
                                </Grid>
                                <Grid item md={3} xs={12} className='gridmb'>
                                </Grid>
                                <br />
                                <Grid item md={2} xs={6} className='gridmb'>
                                    {task.id == 0 ?
                                        <Button className='btnSearch' variant="contained" fullWidth onClick={guardaTask} type="submit">
                                            Guardar
                                        </Button> :
                                        <Button className='btnSearch' variant="contained" fullWidth onClick={editaTask} type="submit">
                                            Guardar
                                        </Button>}
                                </Grid>
                            </Grid>
                        </form>
                    </Grid>
                </Grid>
            </Container >
        </div >
    );
};

export { EditTask };
