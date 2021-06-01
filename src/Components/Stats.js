import React from 'react';
import { List, ListItem, ListItemText } from '@material-ui/core';


export default function Stats(props) {

    //styling
    const listStyle = {
        marginLeft: '2em'
    }

    const listItemStyle = {
        paddingTop: 0,
        paddingBottom: 0
    }

    const statNameStyle = {
        width: '10em',
        display: 'inline-block'
    }

    return (
        <List style={listStyle}>
            <ListItem style={listItemStyle}>
                    <ListItemText>
                        <span style={statNameStyle}>Followers: </span>{props.userData.followers}
                    </ListItemText>
            </ListItem>
            <ListItem style={listItemStyle}>
                    <ListItemText>
                        <span style={statNameStyle}>Following: </span>{props.userData.following}
                    </ListItemText>
            </ListItem>
            <ListItem style={listItemStyle}>
                    <ListItemText>
                        <span style={statNameStyle}>Public Repos: </span>{props.userData.public_repos}
                    </ListItemText>
            </ListItem>
            <ListItem style={listItemStyle}>
                    <ListItemText>
                        <span style={statNameStyle}>Stars: </span>{props.stats.stars}
                    </ListItemText>
            </ListItem>
            <ListItem style={listItemStyle}>
                    <ListItemText>
                        <span style={statNameStyle}>Watchers: </span>{props.stats.watchers}
                    </ListItemText>
            </ListItem>
            <ListItem style={listItemStyle}>
                    <ListItemText>
                        <span style={statNameStyle}>Forks: </span>{props.stats.forks}
                    </ListItemText>
            </ListItem>
        </List>
    )
}