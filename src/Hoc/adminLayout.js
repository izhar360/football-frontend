import React from 'react'
import AdminLinks from '../Components/admin/navlinks'

/**
* @author
* @function AdminLayout
**/

const AdminLayout = (props) => {
  return(
    <div className="admin_container">

        <div className="admin_left_nav"><AdminLinks /></div>

        <div className="admin_right">{props.children}</div>
    </div>
   )

 }

export default AdminLayout