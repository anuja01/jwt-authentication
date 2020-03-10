import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom';
import { Home } from '../components/Home';
import { Login } from '../components/Login';
import { Profile } from '../components/Profile';

export const AppRouter = () => {
    return (
        <Router>
            <div>
                <nav>
                    <ul>
                        <li><Link to='/login'>Login</Link></li>
                        <li><Link to='/profile'>Profile</Link></li>
                        <li><Link to='/'>Home</Link></li>
                    </ul>
                </nav>

                <Switch>
                    <Route path='/login'>
                        <Login />
                    </Route>
                    <Route path='/profile'>
                        <Profile />
                    </Route>
                    <Route path='/'>
                        <Home />
                    </Route>
                </Switch>
            </div>
        </Router>
    )
}