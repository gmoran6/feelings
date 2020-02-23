import React, { useState } from 'react';
import Typography from '@material-ui/core/Typography';
import {
  Router,
  Switch,
  Route,
  Link,
  useHistory
} from "react-router-dom";
import MainPage, { IFeelingMeasurement, Feeling } from './pages/MainPage';
import DataPage from './pages/DataPage';
import FeelingSavedPage from './pages/FeelingSavedPage';
import { History } from 'history';

const TestPage = () => {
  return (
    <Typography>Test Page</Typography>
  )
}

const NotFoundPage = () => {
  return (
    <Typography>Page not found</Typography>
  )
}

/**
 * Re-parse Dates correctly.
 */
function DateIsoStringReviver(options: {
  keys: string[],
}) {
  return (key: string, value: string | number | object | undefined | Array<any>) => {
    if ( ! options.keys.includes(key)) { return value; }
    if (typeof value !== "string") { return value; }
    const parsedDate = Date.parse(value);
    if (isNaN(parsedDate)) { return value; }
    return new Date(parsedDate);
  }
}

/**
 * Object that knows how to read/write FeelingsMeasurements from DOM localStorage API.
 * It serializes them as JSON, but also makes sure to re-parse Dates correctly.
 */
const FeelingMeasurementStorage = () => {
  const load = (): IFeelingMeasurement[] | null => {
    const storedFeelings = localStorage.getItem('feelings')
    if (!storedFeelings) return null
    const parsedFeelings: Array<IFeelingMeasurement & { createdAt: string }> = JSON.parse(storedFeelings, DateIsoStringReviver({ keys: ['createdAt'] }))
    const feelings = parsedFeelings.map((parsedFeeling) => {
      const createdAt = new Date(Date.parse(parsedFeeling.createdAt))
      return {...parsedFeeling, createdAt}
    })
    return feelings
  }

  const store = (feelings: IFeelingMeasurement[]) => {
    localStorage.setItem('feelings', JSON.stringify(feelings))
  }

  return { load, store };
}

const FeelingsApp = (props:{
  history: History<History.PoorMansUnknown>
}) => {
  const feelingsMeasurementStorage = FeelingMeasurementStorage();
  const [feelings, setFeelings] = useState(feelingsMeasurementStorage.load() || []);
  const navigate = (path: string) => {
    props.history.push(path)
  };
  const saveMeasurement = async (feelingMeasurement: IFeelingMeasurement) => {
    setFeelings(prevFeelings => {
      const newFeelings = [...prevFeelings, feelingMeasurement]
      feelingsMeasurementStorage.store(newFeelings)
      return newFeelings
    })
  };
  return (
    <Router history={props.history}>
      <Switch>
        <Route path="/test">
          <TestPage />
        </Route>
        <Route exact path="/data">
          <DataPage feelings={feelings}/>
        </Route>
        <Route exact path="/save">
          <FeelingSavedPage />
        </Route>
        <Route exact path="/">
          <MainPage navigate={navigate} saveMeasurement={saveMeasurement} />
        </Route>
        <Route path="*">
          <NotFoundPage />
        </Route>
      </Switch>
    </Router>
  )
}

export default FeelingsApp;
