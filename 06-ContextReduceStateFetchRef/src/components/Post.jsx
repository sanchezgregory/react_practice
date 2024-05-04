import { useContext, useEffect, useState } from "react"
import { useNavigate, useLocation } from "react-router-dom"
import { PostContext } from "../contexts/PostContext"
import { initialData } from "../constants/postsConstants"
import { Link } from "react-router-dom"
import { FetchData } from '../functions/getData';


export default function Post() {

    const {loadPokemons} = useContext(PostContext)

  // Get all query string from url  ?limit=10&offset=0
  let LIMIT = 10;	
  const { search } =  useLocation();
  let query = new URLSearchParams(search);
  let offset = query.get("offset") ? parseInt(query.get("offset")) :  0;
  let qty = query.get("qty") ? parseInt(query.get("qty")) : LIMIT;
  const queryString = `?offset=${offset}&qty=${qty}`

  const [page, setPage] = useState(queryString)
  
    // Load queryString with new data
  let navigate = useNavigate()
  const handlePrev = ()=>{
    if((offset-LIMIT) >= 0){
		navigate({search: `?offset=${offset - LIMIT}&qty=${qty - LIMIT}`})
        setPage(queryString)
    }
  };
  const handleNext = ()=>{
	navigate({search: `?offset=${offset + LIMIT}&qty=${qty + LIMIT}`})
    setPage(queryString)
  };
  // end pagination


  useEffect(() => {
    let URL = `https://pokeapi.co/api/v2/pokemon?limit=${qty}&offset=${offset}`
    try {
      const responseData = FetchData.getData('async_await', URL)
      responseData.then((data) => {
        loadPokemons(data)
        
      })
    } catch (err) {
      console.log(err)
      loadPokemons()
    }
  }, [page])

    const {pokemons, createPokemon} = useContext(PostContext)
    const [pokemon, setPost] = useState(initialData)
    const {name, url} = pokemon

    const handleAddPost = (name, value) => {
        setPost((prevState) => {
            return {
                ...prevState,
                [name]: value
            }
        })
    }

    return (
        <>
            <form onSubmit={(e)=>{e.preventDefault()}}>
                <input type="text" name='name' defaultValue={name} onChange={(e) => handleAddPost(e.target.name, e.target.value)} />
                <label htmlFor="name">Name</label>
                <br />
                <input type="text" name='url' defaultValue={url} onChange={(e) => handleAddPost(e.target.name, e.target.value)} />
                <label htmlFor="url">Url</label>
                <br />
                <button onClick={() => createPokemon(pokemon)}>Agregar pokemon</button>
            </form>

            <button type="button" onClick={handlePrev}>Prev</button>
            <button type="button" onClick={handleNext}>Next</button>
            <hr />
            <p>Mostrando pokemons desde {offset} la cantidad de: {qty}</p>
            <p></p>
            {pokemons && pokemons.length > 0 ? pokemons.map( (pokemon,i) => (
                    // console.log(i, post.name)
                    <li key={i}>
                        <Link to={`/pokemon/${pokemon.name}`} >  {pokemons.name} </Link>|| {pokemons.name} || {pokemons.url}
                    </li>
                )) : 'nada'
            }   

        </>
    )
}