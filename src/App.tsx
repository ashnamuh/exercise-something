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

import IndexPage from 'pages/index'
import AshPage from 'pages/ash'
import HCenterPage from 'pages/horizontal-center'
import AshnamuhBlogPage from 'pages/ashnamuh-blog'

export default function App() {
  return (
    <>
      <Provider store={store}>
        <Router>
          <div>
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
            </ul>

            <Switch>
              <Route exact path="/" component={IndexPage} />
              <Route exact path="/ash" component={AshPage} />
              <Route exact path="/horizontal-center" component={HCenterPage} />
              <Route exact path="/ashnamuh-blog" component={AshnamuhBlogPage} />
            </Switch>
          </div>
        </Router>
      </Provider>
    </>
  )
}
