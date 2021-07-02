import Navigation from './components/navigation';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './components/home';
// import Trees from './components/trees';
import Trees from './components/trees';
import Login from './components/login';
import Signup from './components/signup';
import Cart from './components/cart';
import PageNotFound from './components/page_not_found';
import Footer from './components/footer';
import ItemDescription from './components/item_description';
import { routes } from './routes';

function App() {
  return (
    <div className='font-raleway-font'>
      <Router>
        <Navigation logo='Green Leaf' />
        <div className='flex flex-col'>
          <Switch>
            <Route exact path={routes.home}>
              <Home />
            </Route>
            <Route exact path={routes.trees}>
              <Trees />
            </Route>
            <Route path={routes.trees + '/:id'}>
              <ItemDescription />
            </Route>
            <Route path={routes.login}>
              <Login />
            </Route>
            <Route path={routes.signup}>
              <Signup />
            </Route>
            <Route path={routes.cart}>
              <Cart />
            </Route>
            <Route>
              <PageNotFound />
            </Route>
          </Switch>
          <Footer />
        </div>
      </Router>
    </div>
  );
}

export default App;
