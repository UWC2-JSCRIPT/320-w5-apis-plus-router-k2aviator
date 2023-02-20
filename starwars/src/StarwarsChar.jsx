import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types'
import {useParams} from 'react-router-dom';

  //set charachter attributes
  // const charGender = profile.gender
  // <p>Gender: {charGender}</p>
  // const charBdy = profile.birth_year
  // const charHairColor = profile.hair_color
  
  // <p>Birth year: {charBdy}</p>
  // <p>Hair color: {charHairColor}</p>

export default function StarwarsChar() {
  const [profile,setProfile] = useState(undefined);
  const [loading,toggleLoading] = useState(true);
  const [hasError,setHasError] = useState(false);

  const {charid} = useParams()
  console.log(charid)


  useEffect(() =>{
    fetch(`https://swapi.dev/api/people/${charid}/`)
      .then(response => response.json())
      .then((data) => {
          setProfile(data);
          toggleLoading(false);   
        },
          (error)=>{
            console.log(error)
            toggleLoading(false);
            setHasError(true);
        })  
  },[charid])

  if (loading) {
    return <p>loading...</p>

  }

  if (hasError) {
    return <p>Error!</p>
  }
  console.log("chard id", charid)
  console.log("chard id name", charid)
  console.log("profile", profile)
   
  return (
    <div>
    <p><a href="/">Home</a></p>
     <h3>Starwars charachter profile for {profile.name} </h3>
     <p>Birth year: {profile.birth_year} </p>
     <p>Eye color: {profile.eye_color} </p>
     <p>Gender: {profile.gender} </p>
     <p>Height: {profile.height} </p>
    </div>
      
  )
}

StarwarsChar.propTypes = {
  charid: PropTypes.string
}