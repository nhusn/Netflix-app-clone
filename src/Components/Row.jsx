import React, { useEffect, useState } from 'react'
import tmdbAxiosInstances from '../tmdbAxiosInstances'
import  './Row.css'

function Row({title,fetchUrl,isPoster}) {

  const [allMovies,setAllMovies] = useState()
  const base_url = "https://image.tmdb.org/t/p/original/";

  const fetchData= async ()=>{
    const {data}=  await tmdbAxiosInstances.get(fetchUrl)
    setAllMovies(data.results)
  }

  // console.log(allMovies);

  useEffect(()=>{
    fetchData()

  },[])
  
  return (
    <div className='row'>
      <h1>{title}</h1>
      <div className="movie-row">
        {allMovies?.map(item=>(
            <img className={`${isPoster && 'movie-poster'} movie`} src={`${base_url}/${isPoster?item?.poster_path:item?.backdrop_path}`} alt={item?.name} />
        ))}
      </div>
      </div>
    
  )
}

export default Row