import React, { useState } from 'react';
import { Button, ButtonGroup, Menu, MenuItem } from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

interface MultiFunctionButtonProps {
  onAction: (action: string) => void;
}

const MultiFunctionButton: React.FC<MultiFunctionButtonProps> = ({ onAction }) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [selectedAction, setSelectedAction] = useState<string>('登録');

  const handleMainButtonClick = () => {
    onAction(selectedAction);
  };

  const handleDropdownClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = (action?: string) => {
    setAnchorEl(null);
    if (action) {
      setSelectedAction(action);
    }
  };

  return (
    <ButtonGroup variant="contained">
      <Button onClick={handleMainButtonClick} sx={{ width: 70, height: 50 }}>{selectedAction}</Button>
      <Button onClick={handleDropdownClick} sx={{ width: 10 }}>
        <ArrowDropDownIcon />
      </Button>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={() => handleMenuClose()}
      >
        <MenuItem onClick={() => handleMenuClose('登録')}>登録</MenuItem>
        <MenuItem onClick={() => handleMenuClose('更新')}>更新</MenuItem>
        <MenuItem onClick={() => handleMenuClose('削除')}>削除</MenuItem>
      </Menu>
    </ButtonGroup>
  );
};

export default MultiFunctionButton;
