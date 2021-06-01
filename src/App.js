import React, { useState } from 'react';
import './App.css';
import Search from './Components/Search';
import Profile from './Components/Profile';
import AddNote from './Components/AddNote';
import { Typography, LinearProgress } from '@material-ui/core'

//object to control display - similar to a Java enum
var displayOptions = {
  INITIAL: {value: 0, name: "Initial"},
  LOADING: {value: 1, name: "Loading"},
  PROFILE: {value: 2, name: "Profile"},
  ERROR: {value: 3, name: "Error"}
}

function App() {
  
  //state
  const [addingNote, setAddingNote] = useState(false)
  const [display, setDisplay] = useState(displayOptions.INITIAL)
  const [userData, setUserData] = useState(null)
  const [stats, setStats] = useState(null)

  //UI text
  const appTitle = "Github Profiler"
  const errorMessage = 'Error retrieveiving data associatiated with username. Please check spelling and try again'

  //styling
  const appTitleStyle = {
    marginTop: '1em'
  }

  const errorMessageStyle = {
    color: 'red',
    width: '50%',
    margin: 'auto'
  }
  
  //methods
  const displayAddNote = () => {
    if(addingNote && userData && userData.login){
      return <AddNote username={userData.login} setAddingNote={setAddingNote}/>;
    }
  }

  const searchGithub = (event, githubAccount) => {
    event.preventDefault()
    setDisplay(displayOptions.LOADING)
    getInitialUserData(githubAccount)
    .then((username) => {
      getAndSetStats(username)
      setDisplay(displayOptions.PROFILE)
    })
    .catch(err => {
      console.log(err)
      setDisplay(displayOptions.ERROR)
    }) 
  }

  const getInitialUserData = async(githubAccount) => [
    await fetch(`https://api.github.com/users/${githubAccount}`)
    .then(response => {
      if(response.status !== 200) return Promise.reject()
      else return response.json()
    })
    .then(data => {
      setUserData(data)
      return data.login
    })
  ]
  
  const getAndSetStats = async(username) => {
    const result = await fetch(`https://api.github.com/users/${username}/repos`)
                          .then(response => response.json())
    const stats = calculateStats(result)
    setStats(stats)
  }

  const calculateStats = (repoData) => {
    var stars = 0
    var watchers = 0
    var forks = 0
    var languages = new Map()

    for(let i=0; i<repoData.length; i++){
        const repo = repoData[i]
        if(repo.stargazers_count) stars += repo.stargazers_count
        if(repo.watchers) watchers += repo.watchers
        if(repo.forks) forks += repo.forks

        if(languages.has(repo.language)){
          languages.set(repo.language, languages.get(repo.language)+1)
        } 
        else {
          languages.set(repo.language, 1)
        }
    }

    var stats = {
        stars: stars,
        watchers: watchers,
        forks: forks,
        languages: languages
    }
    
    return stats
}
  
  return (
    <div className="App">
      {displayAddNote()}
      <Typography variant="h3" style={appTitleStyle}>{appTitle}</Typography>
      <Search searchGithub={searchGithub} />
      {(display === displayOptions.LOADING) ? <LinearProgress/> : null}
      {(display === displayOptions.PROFILE) ? 
        <Profile 
          userData={userData}
          stats={stats}
          setAddingNote={setAddingNote}
        /> 
        : null}
        {(display === displayOptions.ERROR) ? 
        <Typography variant="h5" style={errorMessageStyle}>{errorMessage}</Typography> 
        : null }
    </div>
  );
}

export default App;
