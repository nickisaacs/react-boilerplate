import React from 'react';
import { Router, Route, Switch, Link, NavLink } from 'react-router-dom';

import NotFoundPage from '../components/NotFoundPage';
import DashboardPage from '../components/DashboardPage';
import LoginPage from '../components/LoginPage';
import createHisotry from 'history/createBrowserHistory';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

export const history = createHisotry();

const AppRouter = () => (
    <Router history={history}>
        <div>
            <Switch>
                <PublicRoute path="/" exact={true} component={LoginPage} />
                <PrivateRoute path="/dashboard" exact={true} component={DashboardPage} />
                <Route component={NotFoundPage} />
            </Switch>
        </div>
    </Router>
);

export default AppRouter;