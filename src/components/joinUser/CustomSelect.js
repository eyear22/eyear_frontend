import { Autocomplete, TextField } from '@mui/material';
import { useState } from 'react';
import styled from 'styled-components';
import { mobile } from '../../utils/responsive';

const CustomSelect = ({ data, onChange }) => {
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
        isOptionEqualToValue={(option, value) => option.id === value.id}
        getOptionLabel={(option) => option.name}
        options={data}
        ListboxProps={{
          sx: { fontSize: 14 },
        }}
        renderInput={(params) => <TextField {...params} label="" InputLabelProps={{ style: { fontSize: 14 } }} />}
        onChange={(e, value) => {
          onChange(value);
        }}
      />
    </div>
  );
};

const Input = styled(Autocomplete)`
  min-width: 332px;
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
    font-size: 14px;
  }
  ${mobile({ minWidth: 240 })}
`;

export default CustomSelect;
