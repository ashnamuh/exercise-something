import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom'
import { Provider } from 'react-redux'
import store from 'services/store'
import 'styles/global.scss'
import styles from './App.module.scss'

import IndexPage from 'pages/index'
import AshPage from 'pages/ash'
import FlexPage from 'pages/flex'
import HCenterPage from 'pages/horizontal-center'
import AshnamuhBlogPage from 'pages/ashnamuh-blog'
import WithoutReduxPage from 'pages/without-redux'

export default function App() {
  return (
    <>
      <Provider store={store}>
        <Router>
          <nav className={styles.nav}>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/ash">Ash</Link>
              </li>
              <li>
                <Link to="/horizontal-center">HCenter</Link>
              </li>
              <li>
                <Link to="/ashnamuh-blog">Ashnamuh blog</Link>
              </li>
              <li>
                <Link to="/flex">flex</Link>
              </li>
              <li>
                <Link to="/without-redux">without redux</Link>
              </li>
            </ul>
          </nav>

          <Switch>
            <Route exact path="/" component={IndexPage} />
            <Route exact path="/ash" component={AshPage} />
            <Route exact path="/flex" component={FlexPage} />
            <Route exact path="/horizontal-center" component={HCenterPage} />
            <Route exact path="/ashnamuh-blog" component={AshnamuhBlogPage} />
            <Route exact path="/without-redux" component={WithoutReduxPage} />
          </Switch>
        </Router>
      </Provider>
    </>
  )
}
