import React from 'react'
import { Typography, List, ListItem, ListItemText } from '@material-ui/core'

export default function Notes(props){

    //UI Text
    const notesTitle = `Notes about ${props.username}:`

    //UI Configuration
    const notesTitleVariant = "h5"
    const noteItemVariant ="body1"

    //styling
    const notesContainerStyle = {
        paddingTop: '1em',
        paddingBottom: '2em'
    }

    const notesTitleStyle = {
        textDecoration: 'underline'
    }

    const listItemStyle = {textAlign: 'center'}

    //methods
    const renderNotesList = () => {
        let notesAboutUser = localStorage.getItem(props.username)
        if(notesAboutUser) {
            let notesAboutUserArray = JSON.parse(notesAboutUser)
            if(notesAboutUserArray){
                return (
                    <div>
                        <Typography 
                            variant={notesTitleVariant}
                            style={notesTitleStyle}
                        >
                            {notesTitle}
                        </Typography>
                        <List>
                            {generateNotes(notesAboutUserArray)}
                        </List>
                    </div>
                )
            }
        }
    }

    const generateNotes = (notes) => {
        return notes.map((text) => {
            return (
                <ListItem 
                variant={noteItemVariant}
                key={text}
                style={listItemStyle}
                >
                    <ListItemText>
                        {text}
                    </ListItemText>
                </ListItem >
            )
        })
    }


    return (
        <div style={notesContainerStyle}>
            {renderNotesList()}
        </div>
    )
}