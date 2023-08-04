import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MailIcon from "@mui/icons-material/Mail";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Route, Switch, useRouteMatch } from "react-router";
import MyOrders from "../MyOrders/MyOrders";
import { Link } from "react-router-dom";
import AddAProduct from "../AddAProduct/AddAProduct";
import ManageProducts from "../ManageProducts/ManageProducts";
import ManageAllOrders from "../ManageAllOrders/ManageAllOrders";
import MakeAdmin from "../MakeAdmin/MakeAdmin";
import AdminRoute from "../../Login/AdminRoute/AdminRoute";
import Review from "../Review/Review";
import useAuth from "../../../Hooks/useAuth";
import Pay from "../Pay/Pay";

const drawerWidth = 210;

function ResponsiveDrawer(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  let { path, url } = useRouteMatch();
  const { admin, logout } = useAuth();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div className="bg-slate-900 h-screen border-0">
      <Toolbar />
      <Divider />
      {admin && (
        <List>
          <Link style={{ textDecoration: "none", color: "#742752" }} to="/home">
            <ListItem button>
              <ListItemText>
                <span className="fw-bold">
                  <i class="fas fa-home"></i> Home
                </span>
              </ListItemText>
            </ListItem>
          </Link>

          <Link
            className="fw-bold"
            style={{ textDecoration: "none", color: "#fff" }}
            to={`${url}/manageProducts`}
          >
            <ListItem button>
              <ListItemText>
                <span className="fw-bold">
                  <i class="fas fa-tasks"></i> Manage Products
                </span>
              </ListItemText>
            </ListItem>
          </Link>
          <Link
            className="fw-bold"
            style={{ textDecoration: "none", color: "#fff" }}
            to={`${url}/addAProduct`}
          >
            <ListItem button>
              <ListItemText>
                <span className="fw-bold">
                  <i class="fas fa-cart-plus"></i> Add A Product
                </span>
              </ListItemText>
            </ListItem>
          </Link>
          <Link
            className="fw-bold"
            style={{ textDecoration: "none", color: "#fff" }}
            to={`${url}/makeAdmin`}
          >
            <ListItem button>
              <ListItemText>
                <span className="fw-bold">
                  <i class="fas fa-users-cog"></i> Make Admin
                </span>
              </ListItemText>
            </ListItem>
          </Link>
          <Link
            className="fw-bold"
            style={{ textDecoration: "none", color: "#fff" }}
            to={`${url}/manageAllOrders`}
          >
            <ListItem button>
              <ListItemText>
                <span className="fw-bold">
                  <i class="fas fa-shopping-basket"></i> Manage All Orders
                </span>
              </ListItemText>
            </ListItem>
          </Link>
        </List>
      )}
      {!admin && (
        <List>
          <Link
            className="fw-bold"
            style={{ textDecoration: "none", color: "#fff" }}
            to="/home"
          >
            <ListItem button>
              <ListItemText>
                <span className="fw-bold">
                  <i class="fas fa-home"></i> Home
                </span>
              </ListItemText>
            </ListItem>
          </Link>
          <Link
            className="fw-bold"
            style={{ textDecoration: "none", color: "#fff" }}
            to={`${url}/myOrders`}
          >
            <ListItem button>
              <ListItemText>
                <span className="fw-bold">
                  <i class="fas fa-shopping-cart"></i> My Orders
                </span>
              </ListItemText>
            </ListItem>
          </Link>
          <Link
            className="fw-bold"
            style={{ textDecoration: "none", color: "#fff" }}
            to={`${url}/pay`}
          >
            <ListItem button>
              <ListItemText>
                <span className="fw-bold">
                  <i class="fas fa-money-check-alt"></i> Pay
                </span>
              </ListItemText>
            </ListItem>
          </Link>
          <Link
            className="fw-bold"
            style={{ textDecoration: "none", color: "#fff" }}
            to={`${url}/review`}
          >
            <ListItem button>
              <ListItemText>
                <span className="fw-bold">
                  <i class="far fa-comment-dots"></i> Review
                </span>
              </ListItemText>
            </ListItem>
          </Link>
        </List>
      )}

      <List>
        <ListItem button onClick={logout}>
          <ListItemText className="fw-bold" style={{ color: "#fff" }}>
            <span className="fw-bold">
              <i class="fas fa-sign-out-alt"></i> Logout
            </span>
          </ListItemText>
        </ListItem>
      </List>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }} className="bg-slate-900">
      <CssBaseline />
      <AppBar
        className="bg-[#011c2f] border-white border-b"
        position="fixed"
        sx={{
          bgcolor: "#742752",
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar className="bg-slate-900 text-center">
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{
              mr: 2,
              display: { sm: "none" },
            }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            className="text-center"
          >
            Dashboard
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{
          width: { sm: drawerWidth },
          flexShrink: { sm: 0 },
        }}
        aria-label="mailbox folders"
        className="bg-[#011c2f]"
      >
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
        className="bg-[#011c2f]"
      >
        <Toolbar />
        <Switch>
          {admin && (
            <AdminRoute exact path={path}>
              <ManageProducts></ManageProducts>
            </AdminRoute>
          )}
          {!admin && (
            <Route exact path={path}>
              <MyOrders></MyOrders>
            </Route>
          )}
          <Route path={`${path}/myOrders`}>
            <MyOrders></MyOrders>
          </Route>
          <Route path={`${path}/pay`}>
            <Pay></Pay>
          </Route>
          <Route path={`${path}/review`}>
            <Review></Review>
          </Route>
          <AdminRoute exact path={`${path}/addAProduct`}>
            <AddAProduct></AddAProduct>
          </AdminRoute>
          <AdminRoute exact path={`${path}/makeAdmin`}>
            <MakeAdmin></MakeAdmin>
          </AdminRoute>
          <AdminRoute exact path={`${path}/manageAllOrders`}>
            <ManageAllOrders></ManageAllOrders>
          </AdminRoute>
          <AdminRoute exact path={`${path}/manageProducts`}>
            <ManageProducts></ManageProducts>
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
