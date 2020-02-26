import React from 'react';
import { AppBarComponent } from './MainPage';
import makeStyles from '@material-ui/core/styles/makeStyles';
import { Theme, createStyles, Typography } from '@material-ui/core';
import Switch from '@material-ui/core/Switch';
import Table from '@material-ui/core/Table';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import TableBody from '@material-ui/core/TableBody';

const useStyles = makeStyles((theme: Theme) => createStyles({
    
  }));

const SettingsPage = () => {
    const classes = useStyles();

    const [state, setState] = React.useState({
      checkedA: true,
    });
  
    const handleChange = (name: string) => (event: React.ChangeEvent<HTMLInputElement>) => {
      setState({ ...state, [name]: event.target.checked });
    };
    return (
      <>
        <AppBarComponent />
        <Table>
          <TableBody>
            <TableRow>
              <TableCell>
                <Typography >Enable notifications.</Typography>
                <Typography variant="caption">Get reminders to enter your feelings</Typography>
              </TableCell> 
              <TableCell>
                <Switch
                  checked={state.checkedA}
                  onChange={handleChange('checkedA')}
                  value="checkedA"
                  inputProps={{ 'aria-label': 'secondary checkbox' }}
                />
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </>
    );
} 

export default SettingsPage;