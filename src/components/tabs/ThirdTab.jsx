import { ChangeEvent, useEffect, useState } from 'react';
import { getEmpresaProyectos, searchProyectos } from '@/src/actions/ProyectoAction';
import { Box, Button, TextField } from '@mui/material';
import { useStateValue } from '@/src/contexto/store';
import ComboAutocomplete from '../comboAutocomplete/ComboAutocomplete';
import Autocomplete from '@mui/material/Autocomplete';

const ThirdTab = ({ opacity = 0, display = 'none' }) => {
    const [proyecto, setProyecto] = useState('');
    const [empresa, setEmpresa] = useState('');
    const [tsearch, setTsearch] = useState('');

    const [requestProyectoItem, setRequestProyectoItem] = useState({
        pageIndex: 1,
        pageSize: 500,
        sort: 'fechaDesc',
        search: '',
        estado: '1',
    });

    const [paginadorProyectoItem, setPaginadorProyectoItem] = useState({
        cont: 0,
        pageIndex: 0,
        pageSize: 0,
        pageCount: 0,
        data: [],
    });

    const handleChange = (event, value) => {
        setRequestProyectoItem((anterior) => ({
            ...anterior,
            pageIndex: value,
        }));
    };

    useEffect(() => {
        const getListaEmpresas = async () => {
            const resp = await getEmpresaProyectos();
            //console.log('emp', resp);
            setPaginadorProyectoItem(resp.data);
        };
        getListaEmpresas();
    }, [requestProyectoItem]);

    const handleProyectoChange = (event, value) => {
        setProyecto(event.target.value);
    };

    const handleEmpresaChange = (event, value) => {
        setEmpresa(event.target.value);
    };

    const handleTxtChange = (event) => {
        setTsearch(event.target.value);
    };

    const searchProyects = async (search, tipoPropiedad, ciudad, empresa) => {
        await searchProyectos(search, tipoPropiedad, ciudad, empresa);//, dispatch);
    };

    function handleInputChange(event, value) {
        setEmpresa(value);
    }

    return (
        <div className="row" style={{ display: display, opacity: opacity, transition: '1s', margin: '15px' }}>
            <div className="col-lg-10 col-md-12">
                <Autocomplete
                    id='empresa'
                    sx={{ width: 300 }}
                    options={paginadorProyectoItem.data}
                    autoHighlight
                    fullWidth
                    className='fullWidth'
                    getOptionLabel={(option) => option.nombre}
                    renderOption={(props, option) => {
                        const { key, ...optionProps } = props;
                        return (
                            <Box
                                key={key}
                                component="li"
                                sx={{ '& > img': { mr: 2, flexShrink: 0 } }}
                                {...optionProps}
                            >
                                {option.nombre}
                            </Box>
                        );
                    }}
                    onInputChange={handleInputChange}
                    renderInput={params => (
                        <TextField {...params} label="Empresas" variant="outlined" fullWidth />
                    )}
                />                
            </div>
            <div className='col-lg-2 col-md-12 center'>
                <Button
                    className='btnSearch'
                    onClick={() => {
                        searchProyects(tsearch, 0, '', empresa);
                    }}
                >
                    Buscar
                </Button>
            </div>
        </div>
    );
};

export { ThirdTab };