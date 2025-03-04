import { useEffect, useState } from 'react'
import './App.css'
import swService from './services/swService'

import Character from './components/Character'
import { characterImages } from './constants/characters'


function App() {

  const [characters, setCharacters] = useState([])
  const [currentPage, setCurrentPage] = useState(1)

  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        const charactersFound = await swService.getCharacters(currentPage); 
        setCharacters(charactersFound.results); 
      } 
      catch (error) {
        console.error("Error fetching characters:", error);
      }
    };
    fetchCharacters(); 
  }, [currentPage])

  console.log(characters)

  const handleChangePage = (direction) => {
    if(currentPage === 3 && direction === "plus"){
      setCurrentPage(1)
    }
    else if (direction === "plus"){
      setCurrentPage(currentPage + 1)
    }
    else if (direction === "minus" && currentPage === 1){
      setCurrentPage(currentPage)
    }
    else if (direction === "minus"){
      setCurrentPage(currentPage - 1)
    }
  }
 

  return (
    <>
      <div style={{color: 'yellow'}}>
        <p className='h1 text-warning'>Star Wars Characters Wiki By MarkMR</p>
        <br />
        {/* <label htmlFor="character">Search by name: </label>
        <input type="text" /> */}

        <div className="container">
          <div className='row'>
          <nav aria-label="Page navigation example">
            <ul className="pagination">
              <li className="page-item"><a className="page-link" onClick={() => handleChangePage("minus")}>Previous</a></li>
              <li className="page-item"><a className="page-link" >Page: {currentPage}</a></li>
              <li className="page-item"><a className="page-link" onClick={() => handleChangePage("plus")}>Next</a></li>
            </ul>
          </nav>
          </div>
          <div className='row'>
            {characters.length > 0 ? (
              characters.map((char, index) => {
                const imageUrl = characterImages[char.name] || characterImages['Default']; 
                return (
                  <Character  
                    key={index} 
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
              <p>Loading...</p>
            )}
            
          </div>
        
        </div>

      </div>
    </>
  )
}

export default App
