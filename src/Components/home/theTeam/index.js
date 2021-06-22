import React, { useEffect, useState } from 'react'
import PlayerCard from '../../ui/playerCard';
import Otamendi from '../../../Resources/images/players/Otamendi.png';
import {firebase, firebasePlayers } from '../../../firebase';
import Reveal from 'react-reveal/Reveal';
import { Fade } from '@material-ui/core';
import {Promise} from 'core-js';
import { firebaseLooper } from '../../ui/misc';

/**
* @author
* @function theTeam
**/

const TheTeam = (props) => {
 

    const [players,setplayers] = useState([]);
    const positionPlayer = ['Keeper','Defence','Midfield','Striker'];

    const style_upper = { fontSize: '80px',
        fontFamily: 'Righteous',
        opacity: '0.7',
        color: '#98c6e9',
        padding: '30px 20px 20px 20px' }
    const wholething = {marginTop: '100px',
    display: 'flex',
    flexDirection: 'column',
    background: '#d5ebfd'}
    



 
 useEffect(()=>{

   firebasePlayers.once('value').then(snapshot => {
        const playersArr = firebaseLooper(snapshot)
        let promises = [];

        for( let key in playersArr){
          promises.push(
            new Promise((resolve,reject)=>{
               firebase.storage().ref('players').child(playersArr[key].image).getDownloadURL()
               .then(url => {
                 playersArr[key].url = url;
                 resolve();
               })
            })
          )
        }

        Promise.all(promises).then(()=>{
          setplayers(playersArr)
        })
   })



  
    // firebasePlayers.on("value", function(snapshot) {

    //    const arr = []
       
    //    snapshot.forEach(function(childSnapshot) {
    //     var key = childSnapshot.key;
    //     var data = childSnapshot.val();
    //     // ...
    
    //     arr.push({ key: key, name: data.name, lastname: data.lastname,
    //       position: data.position,number:data.number,image:data.image});
    //   });

     
    //   setplayers(arr)
       
    // }, function (errorObject) {
    //     console.log("The read failed: " + errorObject.code);
    //   });
    


    
},[])


 const players_card = (place) => {
  
   const cards =
  players.slice(0,6).map((player, index) => {

    if(player.position === place){
      
      return  <Reveal
      fraction={0.5} > <div style= {{
        margin: '2px 7px 5px  15px'
     }}>  <PlayerCard
                      number={'khan'}
                      name={player.name}
                      lastname={player.lastname}
                      bck={Otamendi}
                  />  </div> </Reveal>
    }

    
      
  })

  return cards
}



  return(
   <div style={{...wholething}}>

   
   {positionPlayer.map(place=>(
     <div>
     <div style={{...style_upper}}>
     {place}
   </div>
   <div style={{display:"flex"}}>{ 
   players_card(place)} </div>
   </div>

   ))}   

   </div>
   )

 }

export default TheTeam