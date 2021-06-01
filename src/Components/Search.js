import React, { useState } from 'react';
import { Input, FormLabel, Button } from '@material-ui/core'

export default function Search(props){
    //state
    const [searchTerm, setSearchTerm] = useState("");

    //UI text
    const formLabelText = "Search for Github Profile"
    const inputPlaceholder = "username";
    const buttonText = "Search"
    

    //styling
    const formLabelStyle = {
      marginRight: '2em'
    }
    const searchBarStyle = {
      marginTop: '2em',
      marginBottom: '2em'
    }
    const buttonStyle = {
      marginLeft: '2em'
    }

    //UI Configuration
    const buttonColor = "primary";
    const buttonVariant = "contained";

    return (
      <form onSubmit={(event) => props.searchGithub(event, searchTerm)}>
        <div style={searchBarStyle}>
          <FormLabel style={formLabelStyle}>{formLabelText}</FormLabel>
          <Input 
            placeholder={inputPlaceholder} 
            onChange={(event)=>setSearchTerm(event.target.value)}
            />
          <Button 
            color={buttonColor} 
            variant={buttonVariant} 
            onClick={(event) => props.searchGithub(event, searchTerm)}
            style={buttonStyle}
          >
            {buttonText}
          </Button>
        </div>
      </form>
    );
}