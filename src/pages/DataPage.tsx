import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles, createStyles, Theme, Table, TableRow, TableCell, TableBody } from '@material-ui/core';
import Link from '@material-ui/core/Link';
import { IFeelingMeasurement } from './MainPage';
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
  feelings: IFeelingMeasurement[]
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
          {props.feelings.map((feelingMeasurement: IFeelingMeasurement) => {
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