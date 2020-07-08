import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

import Register from '../screen/Register'
import Login from '../screen/Login'
import Home from '../screen/Home'

const routes = (): any => {
    return(
        <Switch>
            <Route path="/signin" component={Login} />
            <Route path="/signup" component={Register}/>
            <Route path="/home" component={Home}/>
            <Redirect from="/" to="/signin" />
        </Switch>
    )
}

export default routes