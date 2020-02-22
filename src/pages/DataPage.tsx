import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles, createStyles, Theme, Table, TableRow, TableCell, TableBody } from '@material-ui/core';
import Link from '@material-ui/core/Link';
import { IFeelingMeasurment } from './MainPage';
import FeelingsApp from '../App';

const useStyles = makeStyles((theme: Theme) => createStyles({
    menuDisplay: {
      display: "flex",
      justifyContent: "flex-end",
    },
    menuItemPadding: {
      padding: "1rem",
    },
  }));

const DataPage = (props: {
  feelings: IFeelingMeasurment[]
}) => {
  const classes = useStyles();
  return (
    <>
      <div className={classes.menuDisplay}>
        <Typography variant='body1' className={classes.menuItemPadding}>
          <Link href="/" color='inherit' >Enter Feelings</Link>
        </Typography>
      </div>
      <div>
      <Table>
        <TableBody>
          {props.feelings.map((feelingMeasurement: IFeelingMeasurment) => {
            return(
              <TableRow key={feelingMeasurement.id}>
                <TableCell>{feelingMeasurement.feeling}</TableCell>
                <TableCell>{feelingMeasurement.createdAt.toISOString()}</TableCell>
              </TableRow>
            )
          })}
        </TableBody>
       </Table>
      </div>
    </>
    
  );
}

export default DataPage;