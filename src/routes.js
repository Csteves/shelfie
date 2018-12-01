import React, { Component } from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom'
import Dashboard from './components/Dashboard'
import Form from './components/Form'


export default (
    <HashRouter>
        <Switch>/>
        <Route path='/' component={Dashboard} exact />
        <Route path='/form' component={Form}  />
        <Route path='/form:id' component={Form}  />

        </Switch>
    </HashRouter>)