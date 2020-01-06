import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Layout from './Layout';
import Home from '../pages/Home';
import Badges from '../pages/Badges';
import BadgeNew from '../pages/BadgeNew';
import BadgeDetails from "../pages/BadgeDetailsContainer"
import BadgeEdit from '../pages/BadgeEdit';
import NotFound from '../pages/NotFound';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/platzi-badges/" component={Home} />
          <Route exact path="/platzi-badges/badges" component={Badges} />
          <Route exact path="/platzi-badges/badges/new" component={BadgeNew} />
          <Route exact path="/platzi-badges/badges/:badgeId" component={BadgeDetails} />
          <Route exact path="/platzi-badges/badges/:badgeId/edit" component={BadgeEdit} />
          <Route component={NotFound} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;