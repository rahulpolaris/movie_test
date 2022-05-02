import { useEffect, useState } from 'react'
import logo from './logo.svg'
import './App.css'
import MovieCard from './components/MovieCard'
import MovieCards from './components/MovieCards'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import MovieSummaryPage from './components/MovieSummaryPage'

function App() {
  const [movieArray, setMovieArray] = useState([])
  const [currentMovie,setCurrentMovie]=useState({name:"",summary:""})
  async function  getMovieArrays()
  {
    const url = "https://api.tvmaze.com/search/shows?q=all"
    const options = { method: 'GET',
     headers:{
       "Content-Type":"application/json"
     }}
     const dataJson = await fetch(url)
     const moviedata = await dataJson.json()
     setMovieArray(moviedata)
  }
  useEffect(()=>{
    getMovieArrays()
  },[])

  return (
    <div className="App">
    <h1>Hello</h1>
    <Router>
    <Routes>
      <Route path="/" element={<MovieCards movies={movieArray} setCurrentMovie={setCurrentMovie}/>}/>
      <Route path = "/:movieid" element={<MovieSummaryPage currentMovie={currentMovie}/>}/>

    </Routes>

    </Router>
    
    </div>
  )
}

export default App
