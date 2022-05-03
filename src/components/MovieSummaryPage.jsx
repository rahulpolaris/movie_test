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
        else if(name==='movie_date')
        {
          return {
            movie_name:pv.movie_date,
            movie_date:value,
            movie_time:pv.movie_time
        }


        }
        else if(name==='movie_time'){
          return {
            movie_name:pv.movie_date,
            movie_date:pv.movie_date,
            movie_time:value
        }


        }
        // pv[name] = value; return pv;
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
      <img src={image?image.original:""} alt="movie/show image" style={{ maxWidth: "50vh" ,minHeight:"30vh"}} />
      {/* {image.orignal? <img src={image.original} alt="image" style={{ maxWidth: "50vh" }} />:<img src="" alt="movie image"/>} */}
      <div className="summary-body">
        <h1>{name}</h1>
        <div
          ref={summarry}
          style={{ margin: "0 auto", maxWidth: "80vh", padding: "2em 1em" }}
        ></div>
      </div>
      <div
      
        className="book-button"
        style={buttonFormState?{
          padding: "1em 2em",
          background: "lightgreen",
          color: "Black",
          borderRadius: "50px",
        }:{
          padding: "",
          background: "pink",
          color: "Black",
          borderRadius: "50px",
        }}
      >
        {buttonFormState?<div><h2 onClick={handleButtonFormState} style={{backgroundColor:"rgba(0,0,0,0.4)"}}>Go back</h2><Form handleFormData={handleFormData} formData={formData} /></div>:<div onClick={handleButtonFormState} style={{width:"100%",height:"100%",padding:"1em 2em"}} >Book Ticket</div>}
      </div>
    </div>
  );
}
