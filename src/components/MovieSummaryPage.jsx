import React, { useEffect, useRef } from 'react'

export default function MovieSummaryPage({currentMovie}) {
    const {name,summary,image} = currentMovie
    const summarry = useRef()
    useEffect(()=>{
        console.log(summarry)
        summarry.current.innerHTML = summary
    },[currentMovie.summary])
  return (
    <div className='movie-summary'>
        <img src={image.original} alt="image"  style={{maxWidth:"50vh"}}/>
        <div className="summary-body">
            <h1>{name}</h1>
            <div ref={summarry} style={{margin:"0 auto",maxWidth:"80vh",padding:"2em 1em"}}></div>
        </div>

        <form action="">
            <label htmlFor="movie_name">Movie:</label>
            <input type="text" value={name} name="movie_name" />
        </form>
    </div>
  )
}
