import React, { useState } from 'react';
import { Input, FormLabel, Button } from '@material-ui/core'

const inputPlaceholder = "username";
const buttonColor = "primary";
const buttonVariant = "contained";
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

export default function Search(props){
    
    const [searchTerm, setSearchTerm] = useState("");

    return (
        <form onSubmit={(event) => props.searchGithub(event, searchTerm)}>
        <div style={searchBarStyle}>
          <FormLabel style={formLabelStyle}>Search for Github Profile</FormLabel>
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
            Search
          </Button>
        </div>
      </form>
    );
}