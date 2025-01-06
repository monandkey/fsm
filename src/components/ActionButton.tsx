import React from 'react';
import { Button } from '@mui/material';

interface ActionButtonProps {
  name: string;
  onClick: () => void;
}

const ActionButton: React.FC<ActionButtonProps> = ({ name, onClick }) => {
  return (
    <Button variant="contained" color="primary" onClick={onClick} sx={{ width: 70, height: 50 }}>
      {name}
    </Button>
  );
};

export default ActionButton;
