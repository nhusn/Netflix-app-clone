import React, { useEffect, useState } from 'react'
import './Banner.css'
import tmdbAxiosInstances from '../tmdbAxiosInstances';

function Banner({fetchUrl}) {
    const [movie,setMovie] = useState({})
    const base_url = "https://image.tmdb.org/t/p/original/";

    const fetchData=async ()=>{
        const {data} = await tmdbAxiosInstances.get(fetchUrl)
        setMovie(data.results[Math.floor(Math.random()*data.results.length)])
    }
    useEffect(()=>{
        fetchData()
    },[])
    console.log(movie);

  return (
    <div style={{height:"600px",backgroundImage:`url(${base_url}/${movie?.backdrop_path})`,backgroundSize:'cover', backgroundAttachment:'fixed'}}>
          <div className='banner-content'>
            <h1>{movie?.name}</h1>
            <h2>{movie?.overview?.slice(0,200)}...</h2>
          </div>
    </div>
  )
}

export default Banner