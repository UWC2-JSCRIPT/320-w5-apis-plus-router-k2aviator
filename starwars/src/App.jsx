import React from 'react';
import StarwarsChar from './StarwarsChar';
import StarwarsDetails from './StarwarsDetails'
import './Starwars.css'
import { Route, Routes } from 'react-router-dom'


function App() {
  // const [charid, setCharid] = useState('')
  // const onFormSubmit = (event) =>{
  //   event.preventDefault()
  //   //console.log(event.target[0].value)
  //   setCharid(event.target[0].value)
  // }
  
  return (


    <div className="App">
      <Routes>
        <Route path="/" element={<StarwarsDetails />} />
        <Route path="starwars-char/:charid" element={<StarwarsChar />}/>
      </Routes>
    {/*   <form onSubmit={onFormSubmit}>
    //     <label htmlFor="charid-input">Charachter id: </label>
    //     <input type="text" id="chardid-input"></input>
    //     <button type="submit">Search</button>

    //   </form>
  //   <StarwarsChar charid={charid}/>*/}
    </div>
  );
}

export default App;
