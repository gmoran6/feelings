import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles, createStyles, Theme } from '@material-ui/core';
import Link from '@material-ui/core/Link';
import { Link as RouterLink, LinkProps as RouterLinkProps } from 'react-router-dom';

const useStyles = makeStyles((theme: Theme) => createStyles({
  centeredDisplay:{
    alignItems: "center",
    display: "flex",
    flexDirection: "column",
    height: "100vh",
    textAlign: "center",
    justifyContent: "center",
  },
  centeredtext:{
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  menuDisplay: {
    display: "flex",
    justifyContent: "flex-end",
  },
  menuItemPadding: {
    padding: "1rem",
  },
}));

const LinkBehavior = React.forwardRef<any, Omit<RouterLinkProps, 'to'>>(
  (props, ref) => (
    <RouterLink ref={ref} to={props.href || ''} {...props} />
  ),
);

const FeelingSavedPage = () => {
  const classes = useStyles();
  return (
    <div className={classes.centeredDisplay}>
      <div>
        <Typography variant="h3" gutterBottom>
          Feeling Saved!
        </Typography>
        <Typography variant="body1">
          <Link component={LinkBehavior} href="/" color="inherit">Enter another feeling</Link>
          <br/>
          <Link component={LinkBehavior} href="/data" color="inherit">View feelings data</Link>
        </Typography>
      </div>
    </div>
  )
}

export default FeelingSavedPage;