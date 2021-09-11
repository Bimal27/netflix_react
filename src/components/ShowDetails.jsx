import { useState } from "react"
import { useEffect } from "react"
import { Modal } from "react-bootstrap"
import AddComment from "./AddComment";
import DisplayComments from "./DisplayComments";



const ShowDetails = ({match})=>{

    const [movie, setMovie] = useState(null)
    const [comments,setComments] = useState([])
    const [show, setShow] = useState(false)
   


    const handleModal=() => {
     setShow( !show )
     
   }
   useEffect(()=>{
       const movies = async ()=>{
           let id= match.params.imdbID
           if(id){
               let response= await fetch('http://www.omdbapi.com/?apikey=f7c25f33&i=' + id)
               let data= await response.json()
               setMovie(data)
           }
       }
       movies()
   },[match.params.imdbID])

   useEffect(()=>{
    const getComment = async ()=>{
        let id= match.params.imdbID
        if(id){
            let response= await fetch('https://striveschool-api.herokuapp.com/api/comments/' + id,{
                headers:{
                    "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGRjNzMzNGIzNTgxNzAwMTVjMjI3NWIiLCJpYXQiOjE2Mjk5NzkzNzUsImV4cCI6MTYzMTE4ODk3NX0.8oPWQmDkjhZppxF1O_JjqR5vYAfRMCIn_4zUs7p9_OM",

                },
            })
            let comment= await response.json()
            setComments(comment)
        }
    }
    getComment()
   },[match.params.imdbID])


    return(
        <>
        <h2 className='text-light text-center my-5'>Movie Details...</h2>
        {
            movie && (<div className="text-center text-light mb-5">
                <img src={movie.Poster} alt="movie poster" onClick={handleModal}/>
                <h4 className="mt-3">{movie.Title} ( {movie.Actors} )</h4>
                <div><p>{movie.Released} - {movie.Runtime}</p></div>
                <p>{movie.Plot}</p>

                <ul style={{listStyle:'none'}}>
                    <h5 style={{textDecoration:'underline'}}>Comments</h5>
                    {
                        comments.map(c =>
                            <li key={c._id}>{c.comment}</li>
                        )
                    }
                </ul>

            </div>)

        }
           { movie && <Modal show={show} onHide={() => handleModal()}>
              <Modal.Header closeButton>
                {movie.Title} (<i>{movie.Year}</i>)
              </Modal.Header>
              <Modal.Body>
                <DisplayComments selectedMovie={movie.imdbID} />
                <AddComment selectedMovie={movie} />
              </Modal.Body>
            </Modal>
           }  
        </>
    )
}
export default ShowDetails