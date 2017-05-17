import React from 'react'
import {
    BrowserRouter,
    HashRouter,
    Route,
    Link,
    Prompt,
    NavLink,
    Redirect
} from 'react-router-dom'

const supportHistory = 'pushState' in window.history;

const getConfirmation = (message, callback) => {
    const allowTransition = window.confirm(message)
    callback(allowTransition)
}

const Home = () => (
    // null
    <div>this is Home~</div>
)

const About = () => (
    <div>
        <div>this is About</div>
        <Prompt when={true} message={location => (`你确定要去${JSON.stringify(location)}`)} />
    </div>
)

const Topics = ({ match }) => (
    <div>
        <ul>
            <li>
                <Link to={`${match.url}/1`} >话题一</Link>
            </li>
            <li>
                <Link to={`${match.url}/2`} >话题二</Link>
            </li>
            <li>
                <NavLink to={`${match.url}/3`} activeStyle={{
                    fontSize: "20px",
                    color: "#9ad"
                }}>话题三</NavLink>
            </li>
        </ul>
        <Route exact path={`${match.url}/`} component={TopTopic}></Route>
        <Route path={`${match.url}/:id`} component={Topic}></Route>
    </div>
)

const TopTopic = ({ match }) => (
    <div>这是个特殊的话题 + {JSON.stringify(match)}</div>
);

const Topic = ({ match }) => (
    <div>这是话题 {match.params.id}</div>
);

const oddEvent = (match, location) => {
    if (!match) return false;
    return true;
}

const App = () => (
    <HashRouter getUserConfirmation={getConfirmation} hashType={"hashbang"}>
        <div>
            <ul>
                <li><Link to="/" replace>Home</Link></li>
                <li><NavLink to="/about" isActive={oddEvent}>About</NavLink></li>
                <li><NavLink to="/topics" activeClassName="selected">Topics</NavLink></li>
            </ul>

            <hr />

            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/topics" component={Topics} />
            {/*<Redirect to="/topics" />*/}
            <Redirect from={"/about"} to={{
                pathname: '/topics',
                search: '?utm=you',
                state: { referrer: 3 }
            }} />
        </div>
    </HashRouter>
)

export default App