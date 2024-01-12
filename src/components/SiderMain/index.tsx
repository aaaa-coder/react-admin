import React, { useState } from 'react';

import {
    DesktopOutlined,
    FileOutlined,
    PieChartOutlined,
    TeamOutlined,
    UserOutlined,
} from '@ant-design/icons';
import type { MenuProps } from 'antd';
  
import {  Menu, } from 'antd';
import { useLocation, useNavigate } from 'react-router-dom';


type MenuItem = Required<MenuProps>['items'][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
  } as MenuItem;
}

const items: MenuItem[] = [
  getItem('首页', '/home', <PieChartOutlined />),
  getItem('测试页', '/test', <DesktopOutlined />),
  getItem('用户管理', 'user', <UserOutlined />, [
    getItem('用户管理1', '/user1'),
    getItem('用户管理2', '/user2'),
    getItem('用户管理3', '/user3'),
  ]),
  getItem('团队管理', 'team', <TeamOutlined />, [getItem('团队1', '/team1'), getItem('团队2', '/team2')]),
];

const rootSubmenuKeys = ['user', 'team'];


const SiderMain: React.FC = () => {
    const location = useLocation();
    const navigate = useNavigate();

    /**
     * 路由跳转
     * @param e 
     */
        const handleMenuClick: MenuProps['onClick'] = (e:{key:string}) => {
            navigate(e.key);
    }

    const [openKeys, setOpenKeys] = useState([location.pathname])
    
    const handleOpenChange: MenuProps['onOpenChange']  = (keys:string[]) => {
        console.log(keys);
        const latestOpenKey = keys.find((key) => openKeys.indexOf(key) === -1);
        if (latestOpenKey && rootSubmenuKeys.indexOf(latestOpenKey!) === -1) {
            setOpenKeys(keys);
          } else {
            setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
          }
        
    }
    
    return (
            <Menu theme="dark"
            defaultSelectedKeys={[location.pathname]}
            mode="inline"
            openKeys={openKeys}
            items={items}
            onClick={handleMenuClick}
            onOpenChange={handleOpenChange} />
      
  )
}

export default SiderMain