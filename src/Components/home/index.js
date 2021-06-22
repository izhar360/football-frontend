import React from 'react';
import Featured from './featured';
import Matches from './matches';
import MeetPlayers from './meetplayer/index';
import Promotion from './Promotion';


const Home = () => {
    return (
        <div className="bck_blue">
            <Featured/>
            <Matches/>
            <MeetPlayers />
            <Promotion />
        </div>
    );
};

export default Home;