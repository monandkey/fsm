import React from 'react';
import { Drawer, Link, List, ListItem, ListItemButton } from '@mui/material';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

interface sidebarType {
  name: string;
  path: string;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  const sidebarList: sidebarType[] = [
    { name: "ホーム", path: "/" },
    { name: "レシピ管理", path: "/recipe" },
    { name: "材料管理", path: "/material" },
    { name: "設定", path: "/setting" }
  ]

  return (
    <Drawer anchor="left" open={isOpen} onClose={onClose}>
      <List>
        {sidebarList.map((s) => (
          <React.Fragment key={s.name} >
            <ListItem disablePadding >
              <ListItemButton>
                <Link href={s.path} underline="none" color="inherit" >
                  {s.name}
                </Link>
              </ListItemButton>
            </ListItem>
          </React.Fragment>
        ))}
      </List>
    </Drawer>
  );
};

export default Sidebar;
