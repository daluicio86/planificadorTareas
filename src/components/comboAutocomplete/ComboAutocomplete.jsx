import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

export default function ComboAutocomplete({ id, label, items }) {
    return (
        <Autocomplete
            id={id}
            sx={{ width: 300 }}
            options={items}
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
            renderInput={(params) => (
                <TextField
                    fullWidth
                    {...params}
                    label={label}
                    inputProps={{
                        ...params.inputProps,
                        autoComplete: 'nombre', // disable autocomplete and autofill
                    }}
                />
            )}
        />
    );
}