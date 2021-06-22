import React, { useEffect, useState } from 'react';
import { firebaseMatches } from '../../../firebase';
import AdminLayout from "../../../Hoc/adminLayout";
import { firebaseLooper, reverseArray } from '../../ui/misc';
import CircularProgress from '@material-ui/core/CircularProgress';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Link } from 'react-router-dom';

/**
* @author
* @function AdminMatches
**/

const AdminMatches = (props) => {

    const [matches,setMatches] = useState([]);
    const [isloading,setLoading] = useState(true)

    useEffect(()=>{
       firebaseMatches.once('value').then(snap=>{
               let matches = firebaseLooper(snap)
                 matches = reverseArray(matches)
               setMatches(matches)
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
                         <TableCell>Date</TableCell>
                         <TableCell>Match</TableCell>
                         <TableCell>Result</TableCell>
                         <TableCell>Final</TableCell>
                     </TableRow>
                 </TableHead>

                 <TableBody>
                     {
                         matches ? matches.map((match,i)=>(
                             <TableRow>
                                 <TableCell>{match.date}</TableCell>
                                 <TableCell>
                                     <Link to={`/admin_matches/edit_match/${match.id}`}>
                                     {match.away} <strong>-</strong> {match.local}
                                     </Link>
                                 </TableCell>
                                 <TableCell>{match.resultAway} <strong>-</strong> {match.resultLocal}</TableCell>
                                 <TableCell>{
                                        match.final === 'Yes' ? <span className="matches_tag_red">Final</span> :
                                        <span className="matches_tag_green">Not Played Yet</span>
                                     }</TableCell>
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

         isloading ? <CircularProgress thickness={7} style={{color: '#98c5e9'}} /> : ''

     }

    </div>
    </AdminLayout>
   )

 }

export default AdminMatches