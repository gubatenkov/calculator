import React, { useState } from 'react';
import { Button, Menu, MenuItem, Paper } from '@material-ui/core';
import { Link } from 'react-router-dom';

import { useGlobalContext } from 'context/context';
import { isAllAreaInputsValid } from 'utils/functions';

const Sidebar = () => {
  const { rooms } = useGlobalContext();

  return (
    <Paper className='sidebar' elevation={1}>
      <Button className='sidebar-btn' fullWidth component={Link} to='/'>
        Параметри
      </Button>
      {rooms?.length &&
        rooms.map((r) => {
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

const SidebarItemWithSubMenu = ({ name, items }) => {
  const [anchorEl, setAnchor] = useState(null);

  const handleClose = () => setAnchor(null);
  return (
    <>
      <Button
        className='sidebar-btn'
        fullWidth
        onClick={(e) => setAnchor(e.currentTarget)}
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
          items.map((i, idx) => (
            <MenuItem key={i.id} component={Link} to={i.path}>
              {name + ` ${idx + 1}`}
            </MenuItem>
          ))}
      </Menu>
    </>
  );
};

const SidebarItem = ({ name, path }) => {
  return (
    <Button className='sidebar-btn' fullWidth component={Link} to={path}>
      {name}
    </Button>
  );
};

export default Sidebar;
