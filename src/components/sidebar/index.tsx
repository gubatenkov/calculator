import React, { FC, useState } from 'react';
import { Button, Menu, MenuItem, Paper } from '@material-ui/core';
import { Link } from 'react-router-dom';

import { useGlobalContext } from 'context/context';
import { isAllAreaInputsValid } from 'utils/functions';
import { IAppState, IObject, IRoom } from 'interfaces';

const Sidebar: FC = () => {
  const { rooms }: IAppState = useGlobalContext();

  return (
    <Paper className='sidebar' elevation={1}>
      <Button className='sidebar-btn' fullWidth component={Link} to='/'>
        Параметри
      </Button>
      {rooms?.length &&
        rooms.map((r: IObject) => {
          if (r?.items?.length > 0) {
            return (
              <SidebarItemWithSubMenu key={r.name} {...r} items={r.items} />
            );
          } else if (r?.items?.length === 0) {
            return null;
          } else {
            return <SidebarItem key={r.name} {...r} />;
          }
        })}
      {isAllAreaInputsValid(rooms) && (
        <Button className='sidebar-btn' fullWidth component={Link} to='/result'>
          Результат
        </Button>
      )}
    </Paper>
  );
};

interface ISidebarItemWithSubMenuProps {
  name: string;
  items: IRoom[];
}

const SidebarItemWithSubMenu: FC<ISidebarItemWithSubMenuProps> = ({
  name,
  items,
}) => {
  const [anchorEl, setAnchor] = useState<HTMLElement | null>(null);

  const handleClose = () => setAnchor(null);

  return (
    <>
      <Button
        className='sidebar-btn'
        fullWidth
        onClick={(e: React.MouseEvent<HTMLButtonElement>) =>
          setAnchor(e.currentTarget)
        }
      >
        {name}
      </Button>
      <Menu
        className='sidebar-submenu'
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        MenuListProps={{ onMouseLeave: handleClose }}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        {!!items?.length &&
          items.map((i: IRoom, idx: number) => (
            <MenuItem
              key={i.id}
              component={Link}
              to={i.path}
              disabled={!!!i.area}
            >
              {name + ` ${idx + 1}`}
            </MenuItem>
          ))}
      </Menu>
    </>
  );
};

interface ISidebarItem {
  name: string;
  path?: string;
}

const SidebarItem: FC<ISidebarItem> = ({ name, path = '/' }) => {
  return (
    <Button className='sidebar-btn' component={Link} to={path} fullWidth>
      {name}
    </Button>
  );
};

export default Sidebar;
