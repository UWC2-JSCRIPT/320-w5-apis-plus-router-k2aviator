import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';


export default function StarwarsDetails() {
  const [charList,setCharList] = useState(undefined);
  const [loading,toggleLoading] = useState(true);
  const [hasError,setHasError] = useState(false);


  useEffect(() =>{
    fetch(`https://swapi.dev/api/people/`)
      .then(response => response.json())
      .then((data) => {
          setCharList(data.results);
          toggleLoading(false);   
        },
          (error)=>{
            console.log(error)
            toggleLoading(false);
            setHasError(true);
        })  
  },[])

  if (loading) {
    return <p>loading...</p>
  }

  if (hasError) {
    return <p>Error!</p>
  }

  const charListMap = charList.map((char,index) =>{
   console.log(index, char) 
    
    let linkTo = `starwars-char/${index+1}/`
    //
    return(
      <p key={index}><Link to={linkTo}>{char.name}</Link></p>
    )
   })

  return (
    <div>
     <h1>Starwars charachters</h1>
     {charListMap}
    </div>
      
  )
}

StarwarsDetails.propTypes = {

}