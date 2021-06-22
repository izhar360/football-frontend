import { ListItem } from '@material-ui/core'
import React from 'react'
import { Link } from 'react-router-dom'
import { firebase } from '../../firebase'


/**
* @author
* @function adminLinks
**/

const adminLinks = (props) => {
    const links = [
        {
            title: 'Matches',
            linkTo: '/admin_matches'
        },
        {
            title: 'Add Matches',
            linkTo: '/admin_matches/edit_match'
        },
        {
            title: 'Players',
            linkTo: '/admin_players'
        },
        {
            title: 'Add Players',
            linkTo: '/admin_players/add_players'
        }
    ]

    const style = {
        color: '#ffffff',
        fontWeight: '300',
        borderBottom: '1px solid #353535'
    }

    const renderLinks = () => (
        links.map((link,i )=> (
            <Link  to={link.linkTo} key={i}>
                <ListItem button style={style}>{link.title}</ListItem>
            </Link>
        ))
    )

    const signoutHandler = () => {
        firebase.auth().signOut().then( ()=> { 
            console.log('logged out successfully') 
        }
        ), (error) => {
            console.log('error logging out') 
        }
    }
  return(
    <div>{renderLinks()}
      <ListItem button style={style} onClick={() => signoutHandler()}>Logout</ListItem>
     </div>
   )

 }

export default adminLinks