import React from 'react';
import Layout from './Hoc/Layout';
import { Switch, Route }  from 'react-router-dom';

import Home from './Components/home';
import TheTeam from './Components/home/theTeam';
import TheMatches from './Components/home/theMatches';
import SignIn from './Components/SignIn';
import Dashboard from './Components/admin/dashboard';
import PrivateRoute from './Components/AuthRoutes/PrivateRoute';
import PublicRoute from './Components/AuthRoutes/PublicRoute';
import AdminMatches from './Components/admin/matches';
import AddEditMatch from './Components/admin/matches/addEditMatch';
import AddPlayers from "./Components/admin/Players/addPlayer"
import AdminPlayers from './Components/admin/Players';



const Routes = (props) => {
  
  return(
    <Layout>
     
        <Switch>
        <PrivateRoute exact {...props} path="/admin_players/add_players" component={AddPlayers} />
            <PrivateRoute exact {...props} path="/admin_players/add_players/:id" component={AddPlayers} />
            <PrivateRoute exact {...props} path="/admin_players" component={AdminPlayers} />

            <PrivateRoute exact {...props} path="/dashboard" component={Dashboard} />
            <PublicRoute restricted={false}  exact {...props} path="/" component={Home} />
            <PublicRoute restricted={true} exact {...props} path="/signin" component={SignIn} />
            <Route  component={TheTeam} path="/the_team"/>
            <Route  component={TheMatches} path="/the_matches"/>
            <PrivateRoute exact {...props} path="/admin_matches" component={AdminMatches} />
            <PrivateRoute exact {...props} path="/admin_matches/edit_match/:id" component={AddEditMatch} />




     
       </Switch>
    </Layout>
  )
}

export default Routes;
