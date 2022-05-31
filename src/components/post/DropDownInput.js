import { Autocomplete, CircularProgress, TextField } from '@mui/material';
import { useState } from 'react';
import styled from 'styled-components';

const DropDownInput = ({ data, onChange }) => {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <Input
        open={open}
        onOpen={() => {
          setOpen(true);
        }}
        onClose={() => {
          setOpen(false);
        }}
        isOptionEqualToValue={(option, value) => option.id == value.id}
        getOptionLabel={(option) => option.name}
        options={data}
        loading={false}
        sx={{ maxWidth: 200 }}
        renderInput={(params) => (
          <TextField key={params.id} {...params} label="" InputLabelProps={{ style: { fontSize: 14 } }} />
        )}
        onChange={(e, value) => {
          onChange(value);
        }}
      />
    </div>
  );
};

const Input = styled(Autocomplete)`
  min-width: 150px;
  margin-right: 10px;
  background-color: #fff;
  border-color: red;
  & .MuiOutlinedInput-root {
    & fieldset {
      border-color: #d9d9d9;
      border-radius: 0px;
    }
  }
  & .MuiInputBase-input {
    height: 4px;
  }
`;

export default DropDownInput;
