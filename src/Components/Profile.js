import React from 'react';
import { Typography } from '@material-ui/core'
import Stats from './Stats';
import Languages from './Languages'


export default function Profile(props){

    //styling
    const usernameAndLocationStyle = {
        display: "flex",
        justifyContent: "center",
        marginBottom: '2em'
    }
    
    const imageAndStatsContainerStyle = {
        display: 'flex',
        justifyContent: 'center'
    }
    
    const imageStyle = {
        height: 200,
        width: 200,
        marginRight: '2em'
    }

    return (
        <div>
            <div style={usernameAndLocationStyle}>
                <Typography variant="h5" style={{marginRight: '2em'}}>
                    {props.userData.login}
                </Typography>
                <Typography variant="h5" style={{marginLeft: '2em'}}>
                    { `Location: 
                    ${(props.userData.location === null)? "Unknown" : 
                        props.userData.location}`}
                </Typography>
            </div>
            <div style={imageAndStatsContainerStyle}>
                <img src={props.userData.avatar_url} alt="unable to load" style={imageStyle}/>
                {(props.userData && props.stats) ? 
                <Stats stats={props.stats} userData={props.userData} />
                : null }
            </div>
            <Languages languages={props.stats.languages} />
        </div>
    );
}