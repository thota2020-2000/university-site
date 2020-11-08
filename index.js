import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import ComponentIndex from './MyComponents/ComponentIndex';
import LoginPage from './MyComponents/LoginPage';
import CompA from './MyComponents/CompA';
import CompC from './MyComponents/CompC';
import CompD from './MyComponents/CompD';
import CompE from './MyComponents/CompE';

ReactDOM.render(
    <>
        <BrowserRouter>
            <Switch>
                <Route exact path="/university-website"> <LoginPage /> </Route>
                <Route exact path="/landing-page"> <ComponentIndex /> </Route>
                <Route exact path="/comp1" component={CompA} > <ComponentIndex />  </Route>
                <Route exact path="/comp3" component={CompC} > <ComponentIndex /></Route>
                <Route exact path="/comp4" component={CompD} > <ComponentIndex /></Route>
                <Route exact path="/comp5" component={CompE} > <ComponentIndex /></Route>
            </Switch>
        </BrowserRouter>
    </>, document.getElementById("root")
);