import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles, createStyles, Theme } from '@material-ui/core';
import Table from '@material-ui/core/Table';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import TableBody from '@material-ui/core/TableBody';
import Link from '@material-ui/core/Link';
import { IFeelingMeasurement } from './EnterFeelingsPage';
import SentimentDissatisfiedIcon from '@material-ui/icons/SentimentDissatisfied';
import SentimentVeryDissatisfiedIcon from '@material-ui/icons/SentimentVeryDissatisfied';
import SentimentSatisfiedIcon from '@material-ui/icons/SentimentSatisfied';
import SentimentSatisfiedAltIcon from '@material-ui/icons/SentimentSatisfiedAlt';
import SentimentVerySatisfiedIcon from '@material-ui/icons/SentimentVerySatisfied';

const useStyles = makeStyles((theme: Theme) => createStyles({
    menuDisplay: {
      display: "flex",
      justifyContent: "flex-end",
    },
    menuItemPadding: {
      padding: "1rem",
    },
    green: {
      color: "green",
    },
    grey: {
      color: "grey",
    },
    lightGreen: {
      color: "limeGreen",
    },
    lightRed: {
      color: "red",
    },
    red: {
      color: "darkRed",
    }
  }));

function FeelingTextToIcon(feeling: string) {
  const classes = useStyles();
  switch (feeling) {
    case 'VeryNegative':
      return <SentimentVeryDissatisfiedIcon className={classes.red}/>;
    case 'Negative':
      return <SentimentDissatisfiedIcon className={classes.lightRed}/>;
    case 'Neutral':
      return <SentimentSatisfiedIcon className={classes.grey}/>;
    case 'Positive':
      return <SentimentSatisfiedAltIcon className={classes.lightGreen}/>;
    case 'VeryPositive':
      return <SentimentVerySatisfiedIcon className={classes.green}/>;
    default:
      return null;
  }
}

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
                <TableCell>{FeelingTextToIcon(feelingMeasurement.feeling)}</TableCell>
                <TableCell>{feelingMeasurement.createdAt.toString()}</TableCell>
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