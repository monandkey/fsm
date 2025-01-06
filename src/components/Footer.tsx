import React from 'react';
import { Box, Typography } from '@mui/material';

const Footer: React.FC = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: '#f5f5f5',
        padding: '16px',
        textAlign: 'center',
        marginTop: 'auto',
      }}
    >
      <Typography variant="body2" color="textSecondary">
        © 2025 Food Service Management All Rights Reserved.
      </Typography>
    </Box>
  );
};

export default Footer;
