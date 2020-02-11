import React from 'react';
import logo from './logo.svg';
import Typography from '@material-ui/core/Typography';
import makeStyles from '@material-ui/core/styles/makeStyles';
import { Theme, createStyles } from '@material-ui/core';
import SentimentDissatisfiedIcon from '@material-ui/icons/SentimentDissatisfied';
import SentimentVeryDissatisfiedIcon from '@material-ui/icons/SentimentVeryDissatisfied';
import SentimentSatisfiedIcon from '@material-ui/icons/SentimentSatisfied';
import SentimentSatisfiedAltIcon from '@material-ui/icons/SentimentSatisfiedAlt';
import SentimentVerySatisfiedIcon from '@material-ui/icons/SentimentVerySatisfied';
import classnames from 'classnames';
import IconButton from '@material-ui/core/IconButton';

const useStyles = makeStyles((theme: Theme) => createStyles({
  centeredDisplay:{
    alignItems: "center",
    display: "flex",
    flexDirection: "column",
    height: "100vh",
    justifyContent: "center",
  },
  centeredFeelings:{
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  green: {
    color: "green",
  },
  grey: {
    color: "grey",
  },
  iconSize: {
    fontSize: "3rem",
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

const MainPage = () => {
  const classes = useStyles();
  return (
    <div className={classes.centeredDisplay}>
    {/* making the form with get method for now since I'm not sure where I'll save the input */}
      <form method="get">
        <Typography variant="h3" gutterBottom>How are you feeling now?</Typography>
        <div className={classes.centeredFeelings}>
          <IconButton
            name="VeryNegative"
            type="submit"
            className={classes.red}
          >
            <SentimentVeryDissatisfiedIcon className={classes.iconSize} />
          </IconButton>
          <IconButton
            name="Negative"
            type="submit"
            className={classes.lightRed}
          >
            <SentimentDissatisfiedIcon className={classes.iconSize} />
          </IconButton>
          <IconButton
            name="Neutral"
            type="submit"
            className={classes.grey}
          >
            <SentimentSatisfiedIcon className={classes.iconSize} />
          </IconButton>
          <IconButton
            name="Positive"
            type="submit"
            className={classes.lightGreen}
          >
            <SentimentSatisfiedAltIcon className={classes.iconSize} />
          </IconButton>
          <IconButton
            name="VeryPositive"
            type="submit"
            className={classes.green}
          >
            <SentimentVerySatisfiedIcon className={classes.iconSize} />
          </IconButton>
        </div>
      </form>
    </div>
  );
}

export default MainPage;
