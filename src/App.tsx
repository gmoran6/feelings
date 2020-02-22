import React from 'react';
import Typography from '@material-ui/core/Typography';
import {
  Router,
  Switch,
  Route,
  Link,
  useHistory
} from "react-router-dom";
import MainPage, { IFeelingMeasurment, Feeling } from './pages/MainPage';
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



const FeelingsApp = (props:{
  history: History<History.PoorMansUnknown>
}) => {
  const {history} = props
  const feelings: IFeelingMeasurment[] = [
    {
      createdAt: new Date(),
      feeling: Feeling.Positive,
      id: '1234',
    }
  ];
  const navigate = (path: string) => {
    history.push(path)
  };
  return (
    <Router history={history}>
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
          <MainPage navigate={navigate} />
        </Route>
        <Route path="*">
          <NotFoundPage />
        </Route>
      </Switch>
    </Router>
  )
}

export default FeelingsApp;
