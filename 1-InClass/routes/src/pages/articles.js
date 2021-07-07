import React from 'react';
import { useRouteMatch } from 'react-router';
import { Switch, Route, Link } from 'react-router-dom';
import Article from './article';

export default function Articles() {
    let { path, url } = useRouteMatch();

    return (
        <div>
            <h2>Articles</h2>
            <ul>
                <Link to={`${url}/components`}>Components</Link>
                <Link to={`${url}/renderings`}>Renderings</Link>
                <Link to={`${url}/state`}>State</Link>
            </ul>

            <Switch>
                <Route exact path={path}>
                    <h3>Please select an article inside path: {path}</h3>
                </Route>
                <Route path={`${path}/:articleId`}>
                    <Article />
                </Route>
            </Switch>
        </div>
    );
};