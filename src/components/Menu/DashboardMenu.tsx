import React from 'react';
import { Menu, Button } from 'antd';
import { MenuItemConfig } from '../../types/Menu';
import '../../styles/DashboardMenu.scss';
import { menuConfig } from './menuConfig';

const menuSettings = {
  theme: 'light' as const,
  mode: 'horizontal' as const,
};

interface DashboardMenuProps {
  onLogout: () => void;
}

const DashboardMenu: React.FC<DashboardMenuProps> = ({ onLogout }) => {
  return (
    <Menu theme={menuSettings.theme} mode={menuSettings.mode} className="menu-right">
      {menuConfig.map((item: MenuItemConfig) => {
        if (item.type === 'link' && item.url) {
          return (
            <Menu.Item key={item.key}>
              <a href={item.url} target="_blank" rel="noopener noreferrer">
                {item.label}
              </a>
            </Menu.Item>
          );
        } else if (item.type === 'action' && item.key === 'logout') {
          return (
            <Menu.Item key={item.key}>
              <Button type="link" onClick={onLogout} className="logout-button">
                {item.label}
              </Button>
            </Menu.Item>
          );
        }
        return null;
      })}
    </Menu>
  );
};

export default DashboardMenu;
