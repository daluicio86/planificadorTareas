"use client";
import { ChangeEvent, useEffect, useState } from 'react';
import { getCiudadesProyecto } from '@/src/actions/CiudadAction';
import { Box, Button, TextField } from '@mui/material';
import { searchProyectos } from '@/src/actions/ProyectoAction';
import ComboAutocomplete from '../comboAutocomplete/ComboAutocomplete'; 
//import { useStateValue } from '@/src/contexto/store';

import Autocomplete from '@mui/material/Autocomplete';

const SecondTab = ({ opacity = 0, display = 'none' }) => {
    //const [{ sesionProyecto }, dispatch] = useStateValue();
    const [ciudad, setCiudad] = useState('');
    const [tsearch, setTsearch] = useState('');

    const [requestCiudadItem, setRequestCiudadItem] = useState({
        pageIndex: 1,
        pageSize: 500,
        sort: 'fechaDesc',
        search: '',
        estado: '1',
    });

    const [paginadorCiudadItem, setPaginadorCiudadItem] = useState({
        cont: 0,
        pageIndex: 0,
        pageSize: 0,
        pageCount: 0,
        data: [],
    });

    const handleChange = (event, value) => {
        setRequestCiudadItem((anterior) => ({
            ...anterior,
            pageIndex: value,
        }));
    };

    useEffect(() => {
        const getCiudad = async () => {
            const resp = await getCiudadesProyecto();
            setPaginadorCiudadItem(resp.data);
        };
        getCiudad();
    }, [requestCiudadItem]);

    const handleTxtChange = (event) => {
        setTsearch(event.target.value);
    };

    const searchProyects = async (search, tipoPropiedad, ciudad, empresa) => {
        await searchProyectos(search, tipoPropiedad, ciudad, empresa);//, dispatch);
    };

    function handleInputChange(event, value) {
        setCiudad(value);
    }


    return (
        <div className="row" style={{ display: display, opacity: opacity, transition: '1s', margin: '15px' }}>
            <div className="col-lg-10 col-md-12">
                <Autocomplete
                    id='ciudades'
                    sx={{ width: 300 }}
                    options={paginadorCiudadItem.data}
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
                        <TextField {...params} label="Ciudades" variant="outlined" fullWidth />
                    )}
                />
            </div>
            <div className='col-lg-2 col-md-12 center'>
                <Button
                    className='btnSearch'
                    onClick={() => {
                        searchProyects(tsearch, 0, ciudad, 0);
                    }}
                >
                    Buscar
                </Button>
            </div>
        </div>
    );
};

export { SecondTab };



