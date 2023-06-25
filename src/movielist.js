import React from 'react'

const Movielist=(props)=>{
  const Favouritecomponent=props.addfavouriteicon;
    return (
        <> 
      
           {props.movies.map((movie,index) => (
               <div key={index} className='image-container  justify-content-start m-3'>

               <br></br>
               <img src={movie.Poster} alt='movie' />
               < div 
               onClick={()=>{
                props.handlefavouriteclick(movie)
                console.log('icon was touched')
               }
               }
               className='overlay d-flex align-items-center justify-content-center'
               >
                <Favouritecomponent />
               </div>
             </div>
            
           )
           )}
             </>
    )
}
export default Movielist