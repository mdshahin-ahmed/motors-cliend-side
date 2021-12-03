import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

import {
  Switch,
  Route,
  Link,
  useRouteMatch
} from "react-router-dom";
import AddProduct from '../AddProduct/AddProduct';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import useAuth from '../../../hooks/useAuth';
import AdminRoute from '../../Login/AdminRoute/AdminRoute';
import Welcome from '../Welcome/Welcome';
import ManageAllProducts from '../ManageAllProducts/ManageAllProducts';
import ManageOrders from '../ManageOrders/ManageOrders';

const drawerWidth = 200;

function ResponsiveDrawer(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  let { path, url } = useRouteMatch();
  const { admin, logOut } = useAuth();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Toolbar />
      <Divider />
      <Link className='d-block text-decoration-none' to='/home'>
        <Button style={{ color: 'black' }} variant="text">Home</Button>
      </Link>

      {
        admin && <Box>
          <Link className='d-block text-decoration-none' to={`${url}/manageAllProducts`}>
            <Button style={{ color: 'black' }} variant="text">Manage Add Products</Button>
          </Link>
          <Link className='d-block text-decoration-none' to={`${url}/addProduct`}>
            <Button style={{ color: 'black' }} variant="text">Add Product</Button>
          </Link>
          <Link className='d-block text-decoration-none' to={`${url}/makeAdmin`}>
            <Button style={{ color: 'black' }} variant="text">Make Admin</Button>
          </Link>
          <Link className='d-block text-decoration-none' to={`${url}/manageOrders`}>
            <Button style={{ color: 'black' }} variant="text">Manage Orders</Button>
          </Link>
          <Box className='d-block text-decoration-none'>
            <Button onClick={logOut} style={{ color: 'black' }} variant="text">Log Out</Button>
          </Box>
        </Box>
      }

      {

      }     


    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Dashboard
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        <Toolbar />

        <Switch>
          
          <Route exact path={path}>
            <Welcome></Welcome>
          </Route>

          <AdminRoute path={`${path}/manageAllProducts`}>
            <ManageAllProducts></ManageAllProducts>
          </AdminRoute>
          <AdminRoute path={`${path}/addProduct`}>
            <AddProduct></AddProduct>
          </AdminRoute>
          <AdminRoute path={`${path}/makeAdmin`}>
            <MakeAdmin></MakeAdmin>
          </AdminRoute>
          <AdminRoute path={`${path}/manageOrders`}>
            <ManageOrders></ManageOrders>
          </AdminRoute>
        </Switch>

      </Box>
    </Box>
  );
}

ResponsiveDrawer.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default ResponsiveDrawer;
