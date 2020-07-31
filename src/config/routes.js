import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../components/Home';
import Gaby from '../components/Gaby';
import Lisa from '../components/Lisa';
import Gform from '../components/Gform';
import Gindex from '../components/Gindex';
import Lform from '../components/Lform';
import Lindex from '../components/Lindex';

export default (
    <Switch>
        <Route exact path='/' component={ Home }/>
        <Route path='/gaby' component={ Gaby }/>
        <Route path='/lisa' component={ Lisa }/>
        <Route path='/gform' component={ Gform }/>
        <Route path='/gindex' component={ Gindex }/>
        <Route path='/lform' component={ Lform }/>
        <Route path='/lindex' component={ Lindex }/>
    </Switch>
);


