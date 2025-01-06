import React from 'react';
import { Button, Link } from '@mui/material';

interface LinkButtonProps {
  name: string;
  path: string;
  onClick: () => void;
}

const LinkButton: React.FC<LinkButtonProps> = ({ name, path, onClick }) => {
  return (
    <Button variant="contained" color="primary" onClick={onClick} sx={{ width: 70, height: 50 }}>
      <Link href={path} underline="none" color="inherit" >
        {name}
      </Link>
    </Button>
  );
};

export default LinkButton;
