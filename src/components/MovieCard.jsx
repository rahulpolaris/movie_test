import React from 'react'
import {Link} from 'react-router-dom'

export default function MovieCard({id,name,lang,genre,image,status,movieURL,setCurrentMovie,summary}) {
 function handleClick(){
    setCurrentMovie({
        name,summary,image
    })
 }
  return (
    <div className='movie-card'>
        <picture>
            <img src={image ? image.medium : ""} alt="image" />
        </picture>
        <div className="card-body">
            <h2 className="card-title">{name}</h2>
            <ul>
                <li><b>language:</b> {lang}</li>
                <li><b>genre:</b> {genre.map((gen,i)=><span key={i}>{gen} </span>)}</li>
                <li><b>Status:</b>{status==="Ended"?<span style={{backgroundColor:"red", color:"white",padding:"0 1em"}}>{status}</span>:<span style={{backgroundColor:"green",padding:"0 1em"}}>{status}</span>}</li>
                <li>{id}</li>
                <li><Link to={`/${id}`}><button onClick={handleClick} style={{padding:"0.5em 2em",backgroundColor:"lightgreen",color:"Black",fontSize:"1rem",fontWeight:"600",letterSpacing:"1px",borderRadius:"50px",cursor:"pointer"}}>show</button></Link></li>
            </ul>
        </div>

    </div>
  )
}
