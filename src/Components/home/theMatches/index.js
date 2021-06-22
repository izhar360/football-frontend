
import React, { useEffect, useState } from 'react'
import { firebaseMatches } from '../../../firebase'
import Reveal from 'react-reveal/Reveal';
import MatchesBlock from '../../ui/matches_block'
import { firebaseLooper, reverseArray } from '../../ui/misc';


/**
* @author
* @function Matches
**/

const Matches = (props) => {

   const [matches,setMatches] = useState([]);
   


   useEffect(()=>{
    firebaseMatches.limitToLast(6).once('value').then((snapshot)=>{
        let matches = firebaseLooper(snapshot);
       matches = reverseArray(matches);
       setMatches(matches)
       
    })

    
   },[])
    

   const showMatches = (matches) => (
        matches ?
         matches.map((match)=>(
            
                  <div style={{display:'flex', borderBottom: '2px solid #00285e',
                  paddingBottom: '5px'}}>
                        <div>
        <Reveal
        fraction={0.5}  key={match.id} >
           
                    <div className="item">
                        <div className="wrapper">
                            <MatchesBlock match={match}/>
                        </div>
                    </div> 
                    </Reveal>
                    </div>

                    <div className="matches_block_left">
                       <p><span>Date</span>: {match.date}</p>
                       <p><span>Referee</span>: {match.referee}</p>
                       <p><span>Stadium</span>: {match.stadium}</p>
                    </div>


 
                    </div>
                
            ))
        :null
    )

    

  return(
    <div className="theMatchesContainer">

    <div className="div1">
                <div className="div1Upper">
                   <div className="div1upper1">
                       <div >Show Matches</div> <div><div>
                              <button className="btnmatches">All</button>
                              <button className="btnmatches">Played</button>
                              <button className="btnmatches">Not Played</button> </div>
                           </div> </div>
                   <div className="div1upper1">
                       <div >Results Game</div> <div> <div>
                              <button className="btnmatches">All</button>
                              <button className="btnmatches">W</button>
                              <button className="btnmatches">L</button>
                              <button className="btnmatches">D</button>
                           </div>
                           </div> </div> <div></div></div>


      <div className="div1Lower">
         {  showMatches(matches)}
      </div>



    </div>


    <div  className="div2">
        league table
    </div>

    </div>
   )

 }

export default Matches