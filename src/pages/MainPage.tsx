import React from 'react';
import Typography from '@material-ui/core/Typography';
import makeStyles from '@material-ui/core/styles/makeStyles';
import { Theme, createStyles } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import {ReactComponent as Logo} from './../logo.svg';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import AppBar from '@material-ui/core/AppBar';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const useStyles = makeStyles((theme: Theme) => createStyles({
  appBarIndex: {
    zIndex: 4,
  },
  appNameIndex: {
    zIndex: 3,
  },
  centeredDisplay: {
    alignItems: "center",
    display: "flex",
    flexDirection: "column",
    height: "calc(100vh - 5rem)",
    justifyContent: "center",
    paddingLeft: "1rem",
    paddingRight: "1rem",
  },
  list: {
    width: "100%",
  },
  logoSize: {
    display: "flex",
    height: "calc(100vh - 5rem)",
    position: "absolute",
    width: "100vw",
    zIndex: 2,
  },
  logoMargin: {
    margin: "auto",
  },
  menu: {
    display: "contents",
    justifyContent: "flex-start",
    minWidth: "3rem",
  },
  menuListItem: {
    minWidth: "10rem",
  },
}));

/** Components that create the drawer for the menu componenet */

export type DrawerSide = "left";

export const AppBarComponent = () => {
  const classes = useStyles();

  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer = (side: DrawerSide, open: boolean) => (
    event: React.KeyboardEvent | React.MouseEvent,
  ) => {
    if (
      event.type === "keydown" &&
      ((event as React.KeyboardEvent).key === "Tab" ||
        (event as React.KeyboardEvent).key === "Shift")
    ) {
      return;
    }
    setState({ ...state, [side]: open });
  };

  const SideList = (side: DrawerSide) => {
    const classes = useStyles();
    return (
      <div
        className={classes.list}
        role="presentation"
        onClick={toggleDrawer(side, false)}
        onKeyDown={toggleDrawer(side, false)}
      >
        <List>
          <ListItem
            button
            key={"Enter Feelings"}
            component="a"
            href="/feelings"
            className={classes.menuListItem}
          >
            <ListItemText primary={"Enter Feelings"} />
          </ListItem>
          <ListItem
            button
            key={"View Feelings"}
            component="a"
            href="/data"
            className={classes.menuListItem}
          >
            <ListItemText primary={"View Feelings"} />
          </ListItem>
          <ListItem
            button
            key={"Settings"}
            component="a"
            href="/settings"
            className={classes.menuListItem}
          >
            <ListItemText primary={"Settings"} />
          </ListItem>
          <ListItem
            button
            key={"Home"}
            component="a"
            href="/"
            className={classes.menuListItem}
          >
            <ListItemText primary={"Home"} />
          </ListItem>
        </List>
      </div>
      );
    };
  return (
    <AppBar
      position="static"
      elevation={0}
      style={{
        backgroundColor: "white",
      }}
      className={classes.appBarIndex}
    >
      <Toolbar>
        <IconButton
          edge="start"
          aria-label="menu"
          onClick={toggleDrawer("left", true)}
          disableRipple
        >
          <MenuIcon />
        </IconButton>
        <Drawer
          anchor="left"
          open={state.left}
          ModalProps={{
            BackdropProps: {
              invisible: true,
            },
          }}
          onClose={toggleDrawer("left", false)}
        >
          {SideList("left")}
        </Drawer>
      </Toolbar>
    </AppBar>
  );
}

const MainPage = () => {
  const classes = useStyles();
  return(
    <>
      <AppBarComponent/>
      <div className={classes.centeredDisplay}>
        <Typography variant="h1" gutterBottom className={classes.appNameIndex}>Feelings</Typography>
        <Typography variant="caption" className={classes.appNameIndex}>Track your feelings and match them to your personal data.</Typography>
        <div className={classes.logoSize}>
          <Logo className={classes.logoMargin}/>
        </div>
      </div>
    </>
  );
}

export default MainPage;