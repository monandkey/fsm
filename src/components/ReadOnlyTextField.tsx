import { TextField } from '@mui/material';
import React from 'react';

interface ReadOnlyTextFieldProps {
  value: string;
  label: string;
}

const ReadOnlyTextField: React.FC<ReadOnlyTextFieldProps> = ({ value, label }) => {
  return (
    <TextField
      value={value}
      label={label}
      slotProps={{
        input: {
          readOnly: true,
        },
      }}
    />
  );
}

export default ReadOnlyTextField;
