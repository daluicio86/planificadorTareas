"use client";
import { ChangeEvent, useEffect, useState } from 'react';
import { Box, Button, TextField } from '@mui/material';
import { getProyectos, searchProyectos } from '@/src/actions/ProyectoAction';
import { getTipoPropiedades } from '@/src/actions/TipoPropiedadAction';
import ComboAutocomplete from '../comboAutocomplete/ComboAutocomplete';

import Autocomplete from '@mui/material/Autocomplete';
import { useStateValue } from '@/src/contexto/store';

const FirstTab = ({ opacity = 0, display = 'none' }) => {
    const [{ sesionProyecto }, dispatch] = useStateValue();
    const [tipoPropiedad, setTipoPropiedad] = useState(0);
    const [tsearch, setTsearch] = useState('');

    const [requestItem, setRequestItem] = useState({
        pageIndex: 1,
        pageSize: 15,
        sort: "fechaDesc",
        search: "",
        estado: "1",
        tipoPropiedadId: ''
      });
    

    const [requestTpItem, setRequestTpItem] = useState({
        pageIndex: 1,
        pageSize: 50,
        sort: 'fechaDesc',
        search: '',
        estado: '1',
    });

    const [paginadorTpItem, setPaginadorTpItem] = useState({
        cont: 0,
        pageIndex: 0,
        pageSize: 0,
        pageCount: 0,
        data: [],
    });

    const [paginadorItem, setPaginadorItem] = useState({
        cont: 0,
        pageIndex: 0,
        pageSize: 0,
        pageCount: 0,
        data: [],
    });

    const searchProyects = async () => {//
        requestItem.tipoPropiedadId = tipoPropiedad;
        setRequestTpItem(requestItem);
        await getProyectos(requestItem,dispatch);//, dispatch);
    };

    const handleChange = (event, value) => {
        setRequestTpItem((anterior) => ({
            ...anterior,
            pageIndex: value,
        }));
    };

    const handleTxtChange = (event) => {
        setTsearch(event.target.value);
    };

    useEffect(() => {
        const getTiposPropiedad = async () => {
            const resp = await getTipoPropiedades(requestTpItem);
            setPaginadorTpItem(resp.data);
        };
        getTiposPropiedad();
    }, [requestTpItem]);


    function handleInputChange(event, value) {
        setTipoPropiedad(value);
    }

    return (
        <div className="row" style={{ display: display, opacity: opacity, transition: '1s', margin: '15px' }}>
            <div className="col-lg-10 col-md-12">
                <Autocomplete
                    id='t-propiedad'
                    sx={{ width: 300 }}
                    options={paginadorTpItem.data}
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
                        <TextField {...params} label="Tipo de propiedad" variant="outlined" fullWidth />
                    )}
                />
            </div>
            <div className='col-lg-2 col-md-12 center'>
                <Button
                    className='btnSearch'
                    onClick={() => {
                        searchProyects();
                    }}
                >
                    Buscar
                </Button>
            </div>
        </div>
    );
};

export { FirstTab };
