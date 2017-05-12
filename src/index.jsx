import React from 'react'
import { render } from 'react-dom'
import { HashRouter, Route } from 'react-router-dom';
// import About from './mod/About/index'
// import Repos from './mod/Repos/index'
import App from './App'

render((
    <HashRouter>
        <Route path="/" component={App} />
    </HashRouter>
), document.getElementById('root'))