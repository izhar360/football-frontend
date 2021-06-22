import React from 'react'
import { Redirect, Route } from 'react-router'

/**
* @author
* @function PrivateRoute
**/

const PrivateRoute = ({
    user,
    component: Comp,
    ...rest
}) => {


  return <Route {...rest} component={(props)=>(
      user ? <Comp {...props} user={user} /> : <Redirect to="/signin" />
  )} />
   

 }

export default PrivateRoute