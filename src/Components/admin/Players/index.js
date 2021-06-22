import { CircularProgress, Tab } from '@material-ui/core';
import React, { useEffect , useState} from 'react'
import { firebasePlayers } from '../../../firebase'
import AdminLayout from '../../../Hoc/adminLayout'
import { firebaseLooper } from '../../ui/misc';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Link } from 'react-router-dom';

/**
* @author
* @function AddPlayer
**/

const AdminPlayers = (props) => {

    const [players,setPlayers] = useState([]);
    const [isloading,setLoading] = useState(true);

    useEffect(()=>{
        firebasePlayers.once('value').then(snap=>{
                let players = firebaseLooper(snap)
                  
                setPlayers(players)
                setLoading(false)
        })
     })


  return(
      <AdminLayout>

    <div>
             <Paper>
                 <Table>
                     <TableHead>
                         <TableRow>
                             <TableCell>FIRST NAME</TableCell>
                             <TableCell>LAST NAME</TableCell>
                             <TableCell>SHIRT NO</TableCell>
                             <TableCell>POSITION</TableCell>
                         </TableRow>
                     </TableHead>

                     <TableBody>
                     {
                         players ? players.map((player,i)=>(
                             <TableRow>
                                 <TableCell>
                                     <Link to={`/admin_players/add_players/${player.id}`}>
                                     {player.name}
                                     </Link>
                                 </TableCell>
                                 <TableCell>
                                     <Link to={`/admin_players/add_players/${player.id}`}>
                                     {player.lastname}
                                     </Link>
                                 </TableCell>
                                 <TableCell>{player.number}</TableCell>
                                 <TableCell>{player.position}</TableCell>
                                
                             </TableRow>
                         ))
                         
                         : null
                     }
                 </TableBody>
                 </Table>
             </Paper>
    
    </div>


   <div className="admin_progress">
        {
            isloading ? <CircularProgress thickness={7} style={{color: "#98c5e9"}} /> : ''
        }
   </div>



      </AdminLayout>
   
   )

 }

export default AdminPlayers