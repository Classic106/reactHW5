import React from 'react';

import { Provider } from 'react-redux';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import store from './hw5/store';

import Competitions from './hw5/Competitions';
import CreateCompetition from './hw5/CreateCompetition';
import CompetitionDescribe from './hw5/CompetitionDescribe';
import NotFound from './hw5/NotFound';

export default function Main() {
    return (
    <BrowserRouter>
        <Provider store={store}>
            <div className='main'>
            <Link to='/'><button className='toMain'>To main page</button></Link>
            <Switch>
                <Route exact path='/' component={Competitions}/>
                <Route path='/create' component={CreateCompetition}/>
                <Route path='/competition/:competitionId' component={CompetitionDescribe}/>
                <Route path='/:notFound' component={NotFound}/>
            </Switch>
            </div>
        </Provider>
    </BrowserRouter>);
  }
