import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../components/Home';
import Gaby from '../components/Gaby';
import Lisa from '../components/Lisa';

export default (
    <Switch>
        <Route exact path='/' component={ Home }/>
        <Route path='/gaby' component={ Gaby }/>
        <Route path='/lisa' component={ Lisa }/>
    </Switch>
);


