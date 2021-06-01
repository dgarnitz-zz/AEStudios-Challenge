import React, { useState } from 'react';
import { Input, FormLabel, Button } from '@material-ui/core'
import { red, green } from '@material-ui/core/colors'

export default function AddNote(props){
    
    //state
    const [noteToAdd, setNoteToAdd] = useState("")
    
    //UI Text
    const placeholderText = `Add note about ${props.username}`
    const addButtonText = "Add"
    const cancelButtonText = "Cancel"

    //UI Configuration
    const buttonVariant = "contained";

    //styling
    const addNoteOverlay = {
        width: '100%',
        height: '100%',
        zIndex: 2,
        position: 'fixed',
        backgroundColor: 'rgba(117, 117, 117, 0.8)',
        opacity: 1,
        top: 0,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    }

    const addNoteContainer = {
        width: '30%',
        border: '2px solid black',
        backgroundColor: 'white',
        padding: '4em'
    }

    const inputStyling = {
        paddingTop: '1em',
        paddingBottom: '1em',
        display: 'block',
        marginBottom: '1em'
    }
    
    const addButtonStyling = {
        backgroundColor: green[500],
        marginRight: '1em'
    }

    const cancelButtonStyling = {
        backgroundColor: red[500],
        marginLeft: '1em'
    }

    //method
    const onClickAdd = () => {
        let notesAboutUser = localStorage.getItem(props.username)
        if(notesAboutUser) {
            notesAboutUser = JSON.parse(notesAboutUser)
            notesAboutUser.push(noteToAdd)
        }
        else {
            notesAboutUser = new Array(noteToAdd)
        }

        localStorage.setItem(props.username, JSON.stringify(notesAboutUser))
        resetNoteTextAndHideInput()
    }

    const resetNoteTextAndHideInput = () => {
        setNoteToAdd("")
        props.setAddingNote(false)
    }
    
    return (
        <div style={addNoteOverlay}>
            <div style={addNoteContainer}>
                <FormLabel>Note</FormLabel>
                <Input 
                    multiline={true} 
                    placeholder={placeholderText} 
                    style={inputStyling}
                    onChange={(event)=>setNoteToAdd(event.target.value)} 
                />
                <div>
                    <Button 
                        style={addButtonStyling} 
                        variant={buttonVariant}
                        onClick={() => onClickAdd()}
                    >
                        {addButtonText}
                    </Button>
                    <Button 
                        style={cancelButtonStyling} 
                        variant={buttonVariant}
                        onClick={() => resetNoteTextAndHideInput()}
                    >
                        {cancelButtonText}
                    </Button>
                </div>
            </div>
        </div>
    )
}