import { MenuItemConfig } from "../../types/Menu";

  export const menuConfig: MenuItemConfig[] = [
    {
      key: 'ant',
      label: 'Ant Design',
      url: 'https://ant.design',
      type: 'link',
    },
    {
      key: 'react',
      label: 'React Docs',
      url: 'https://reactjs.org',
      type: 'link',
    },
    {
      key: 'logout',
      label: 'Logout',
      type: 'action',
    },
  ];
  
  export const menuSettings = {
    theme: 'light' as const,
    mode: 'horizontal' as const,
  };
  