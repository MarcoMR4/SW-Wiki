import { useEffect, useState } from 'react'
import './App.css'
import swService from './services/swService'

import Character from './components/Character'
import { characterImages } from './constants/characters'


function App() {
  const [characters, setCharacters] = useState([])

  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        const charactersFound = await swService.getCharacters(); 
        setCharacters(charactersFound); 
      } 
      catch (error) {
        console.error("Error fetching characters:", error);
      }
    };
    fetchCharacters(); 
  }, [])

  return (
    <>
      <div style={{color: 'yellow'}}>
        <p className='h1 text-warning'>Star Wars Characters Wiki By MarkMR</p>
        <br />
        {/* <label htmlFor="character">Search by name: </label>
        <input type="text" /> */}

        <div className="container">
          <div className='row'>
            {characters.length > 0 ? (
              characters.map((char) => {
                const imageUrl = characterImages[char.name] || characterImages['Default']; 
                return (
                  <Character  
                    key={char.url} 
                    name={char.name} 
                    imageUrl={imageUrl} 
                    url={char.url}
                    birth={char.birth_year}
                    height={char.height}
                    eyes={char.eye_color}
                  />
                );
              })
            ) : (
              <p>Loading characters...</p>
            )}
          </div>
        </div>
      </div>
    </>
  )
}

export default App
