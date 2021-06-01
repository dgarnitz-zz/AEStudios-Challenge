import React from 'react';
import { Typography, Button } from '@material-ui/core'
import Stats from './Stats';
import Languages from './Languages'
import Notes from './Notes'


export default function Profile(props){

    //UI text
    const profileTypographyVariant = "h5"
    const imageAltText = "unable to load"
    const notesButtonText = "Add Note"

    //UI configuration
    const buttonColor = "primary"
    const buttonVariant = "contained"

    //styling
    const usernameAndLocationStyle = {
        display: "flex",
        justifyContent: "center",
        marginBottom: '2em'
    }

    const locationStyle = {
        marginLeft: '2em',
        marginRight: '2em'
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
                <Typography 
                    variant={profileTypographyVariant} 
                >
                    {props.userData.login}
                </Typography>
                <Typography 
                    variant={profileTypographyVariant} 
                    style={locationStyle}
                >
                    { `Location: 
                    ${(props.userData.location === null)? "Unknown" : 
                        props.userData.location}`}
                </Typography>
                <Button
                    variant={buttonVariant}
                    color={buttonColor}
                    onClick={() => props.setAddingNote(true)}
                >
                    {notesButtonText}
                </Button>
            </div>
            <div style={imageAndStatsContainerStyle}>
                <img src={props.userData.avatar_url} alt={imageAltText} style={imageStyle}/>
                {(props.userData && props.stats) ? 
                <Stats stats={props.stats} userData={props.userData} />
                : null }
            </div>
            {(props.stats) ? 
                <Languages languages={props.stats.languages} repos={props.userData.public_repos}/>
                : null }
            <Notes 
                username={props.userData.login}
            />
        </div>
    );
}