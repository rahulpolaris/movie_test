import React, { useEffect, useRef, useState } from "react";
import Form from './Form'

export default function MovieSummaryPage({ currentMovie }) {
    const[buttonFormState, setbuttonFormState]=useState(false)
  const { name, summary, image } = currentMovie;
  const [formData, setFormData] = useState({movie_name:name,movie_date:"",movie_time:""});
  const handleFormData = (e) =>{
      const {name , value} = e.target
    //   setFormData(pv=>{pv.movie_name=e.target.value; return pv})
    console.log("input detedcted")
    setFormData(pv=>{
        if(name==='movie_name')
        {
            return {
                movie_name:value,
                movie_date:pv.movie_date,
                movie_time:pv.movie_time
            }
        }
    })
    // console.log(formData.movie_name)
  }
  const summarry = useRef();
  useEffect(() => {
    console.log(summarry);
    summarry.current.innerHTML = summary;
  }, [currentMovie.summary]);
  const handleButtonFormState = () =>{
    setbuttonFormState(pv=>!pv)
  }

  return (
    <div className="movie-summary">
      <img src={image.original} alt="image" style={{ maxWidth: "50vh" }} />
      <div className="summary-body">
        <h1>{name}</h1>
        <div
          ref={summarry}
          style={{ margin: "0 auto", maxWidth: "80vh", padding: "2em 1em" }}
        ></div>
      </div>
      <div
      
        className="book-button"
        style={{
          padding: "1em 2em",
          background: "lightgreen",
          color: "Black",
          borderRadius: "50px",
        }}
      >
        {buttonFormState?<div><h2>Go back</h2><Form handleFormData={handleFormData} formData={formData} /></div>:<div onClick={handleButtonFormState} style={{width:"100%",height:"100%"}} >Book Ticket</div>}
      </div>
    </div>
  );
}
