import { useEffect, useState, useContext } from 'react'
import { AppContext } from '../contexts/AppContext';
import { FetchData } from '../functions/getData';
import { PostContext } from '../contexts/PostContext';

function Header() {

  const [isLoading, setIsLoading] = useState(true);
  const {loadPersons} = useContext(AppContext)
  const {loadPokemons} = useContext(PostContext)

  useEffect(() => {

    if (isLoading) {
      
      // [1] Using .then 
      let URL = 'https://jsonplaceholder.typicode.com/users'
      try {
        const responseData = FetchData.getData('async_await', URL)
        responseData.then((data) => {
          loadPersons(data)
          setIsLoading(false)
        })
      } catch (err) {
        console.log(err)
        loadPersons()
        setIsLoading(false)
      }

      // [1] Using .then 
      URL = 'https://pokeapi.co/api/v2/pokemon?limit=10&offset=0'
      try {
        const responseData = FetchData.getData('async_await', URL)
        responseData.then((data) => {
          loadPokemons(data)
          setIsLoading(false)
        })
      } catch (err) {
        console.log(err)
        loadPokemons()
        setIsLoading(false)
      }
      

      // [2] Using async await autoinvocada
      // (async () => {
      //   try {
      //     const responseData = await FetchData.getData('async_await');
      //     loadPersons(responseData)
      //     setIsLoading(false)
      //   } catch (error) {
      //     console.error(error);
      //   }
      // })()

      // [3] Using async await creating and calling a function
      // const responseData = async() => {
      //   const res = await FetchData.getData('async_await')
      //   loadPersons(res)
      //   setIsLoading(false)
      // } 
      // responseData()


    }
  }, [isLoading])

  if (isLoading) { // ⬅️ si está cargando, mostramos un texto que lo indique
    return (
      <div className="App">
        <h1>Header component Cargando...</h1>
      </div>
    );
  }

  return (
    <>
        <h1>Header Component - Cargar data</h1>
        <button onClick={() => {setIsLoading(true)}}> Load again</button>
    </>
    
  )
}

export default Header