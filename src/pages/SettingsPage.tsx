import React from 'react';
import { AppBarComponent } from './MainPage';
import makeStyles from '@material-ui/core/styles/makeStyles';
import { Theme, createStyles, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) => createStyles({
    
  }));

const SettingsPage = () => {
    const classes = useStyles();
    return (
      <>
        <AppBarComponent />
        <Typography>Test</Typography>
      </>
    );
} 

export default SettingsPage;