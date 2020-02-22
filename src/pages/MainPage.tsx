import React from 'react';
import Typography from '@material-ui/core/Typography';
import makeStyles from '@material-ui/core/styles/makeStyles';
import { Theme, createStyles } from '@material-ui/core';
import SentimentDissatisfiedIcon from '@material-ui/icons/SentimentDissatisfied';
import SentimentVeryDissatisfiedIcon from '@material-ui/icons/SentimentVeryDissatisfied';
import SentimentSatisfiedIcon from '@material-ui/icons/SentimentSatisfied';
import SentimentSatisfiedAltIcon from '@material-ui/icons/SentimentSatisfiedAlt';
import SentimentVerySatisfiedIcon from '@material-ui/icons/SentimentVerySatisfied';
import IconButton from '@material-ui/core/IconButton';
import Link from '@material-ui/core/Link';
import uuid from 'uuid';

const useStyles = makeStyles((theme: Theme) => createStyles({
  centeredDisplay:{
    alignItems: "center",
    display: "flex",
    flexDirection: "column",
    height: "calc(100vh - 3rem)",
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
  menuDisplay: {
    display: "flex",
    justifyContent: "flex-end",
  },
  menuItemPadding: {
    padding: "1rem",
  },
  red: {
    color: "darkRed",
  }
}));

export enum Feeling {
  VeryNegative = "VeryNegative",
  Negative = "Negative",
  Neutral = "Neutral",
  Positive = "Positive",
  VeryPositive = "VeryPostive",
}

export interface IFeelingMeasurement {
  createdAt: Date,
  feeling: Feeling,
  id: string,
}

/**
 * Home page for Feelings App. Allows the user to record a current FeelingMeasurement
 * @param props.navigate Function that navigates to another page in the app. The argument is the url path to navigate to. e.g: "/save"
 */
const MainPage = (props: {
  navigate: (path: string) => void,
  saveMeasurement: (feelingMeasurement: IFeelingMeasurement) => Promise<void>,
}) => {
  const classes = useStyles();
  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const feelingInput = form.elements.namedItem('feeling');
    if (!feelingInput) {
      throw new Error("Can't find feeling input");
    }
    const feeling = (feelingInput as HTMLInputElement).value;
    if (!(feeling in Feeling)) {
      throw new Error("Not an allowed feeling")
    }
    const feelingMeasurement: IFeelingMeasurement = {
      createdAt: new Date(),
      feeling: feeling as Feeling,
      id: uuid(),
    }
    console.log("form submitted", { feelingMeasurement });

    try {
      await props.saveMeasurement(feelingMeasurement);
    } catch(error) {
      throw error;
    }
    props.navigate("/save");
  };
  return (
    <>
      <div className={classes.menuDisplay}>
        <Typography variant='body1' className={classes.menuItemPadding}>
          <Link href="/data" color='inherit'>View Feelings</Link>
        </Typography>
      </div>
      <div className={classes.centeredDisplay}>
      {/* making the form with get method for now since I'm not sure where I'll save the input */}
        <Typography variant="h3" gutterBottom>How are you feeling now?</Typography>
        <div className={classes.centeredFeelings}>
          <form method="get" onSubmit={onSubmit}>
            <input type="hidden" name="feeling" value="VeryNegative" />
            <IconButton
              type="submit"
              className={classes.red}
            >
              <SentimentVeryDissatisfiedIcon className={classes.iconSize} />
            </IconButton>
          </form>
          <form method="get" onSubmit={onSubmit}>
            <input type="hidden" name="feeling" value="Negative" />
            <IconButton
              type="submit"
              className={classes.lightRed}
            >
              <SentimentDissatisfiedIcon className={classes.iconSize} />
            </IconButton>
          </form>
          <form method="get" onSubmit={onSubmit}>
            <input type="hidden" name="feeling" value="Neutral" />
            <IconButton
              type="submit"
              className={classes.grey}
            >
              <SentimentSatisfiedIcon className={classes.iconSize} />
            </IconButton>
          </form>
          <form method="get" onSubmit={onSubmit}>
            <input type="hidden" name="feeling" value="Positive" />
            <IconButton
              type="submit"
              className={classes.lightGreen}
            >
              <SentimentSatisfiedAltIcon className={classes.iconSize} />
            </IconButton>
          </form>
          <form method="get" onSubmit={onSubmit}>
            <input type="hidden" name="feeling" value="VeryPositive" />
            <IconButton
              type="submit"
              className={classes.green}
            >
              <SentimentVerySatisfiedIcon className={classes.iconSize} />
            </IconButton>
          </form>
        </div>
      </div>
    </>
  );
}

export default MainPage;