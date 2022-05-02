
const Form = ({handleFormData, formData}) => {
    return <form action="">
       <label htmlFor="movie_name">Movie:</label>
       <input type="text" value={formData.movie_name} name="movie_name" onInput={handleFormData} />
       <label htmlFor="movie_date">Date:</label>
       <input type="date" name="movie_date" id="" />
       <label htmlFor="movie_time">Time:</label>
       <input type="time" name="movie_time" id="" />
     </form>
   }
export default Form 