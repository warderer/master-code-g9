import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from '../views/Home/Home';
import News from '../views/News/News';
import Contact from '../views/Contact/Contact';
import Error404 from '../views/Error404/Error404';

const Routes = () => {
    return (
        <div>
            <Router>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/news" component={News} />
                    <Route exact path="/contact" component={Contact} />
                    <Route path="*" component={Error404} />
                </Switch>
            </Router>
        </div>
    )
}

export default Routes;
