import { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Movieheading from './movieheading';
import Searchbox from './searchbox';
import Movielist from './movielist'
import Addfavourite from './addfavourites';
import Favouritemovielistheading from './favouriteheading'
import RemoveFavourite from './removefavourite'
function App() {
   const [movies, setMovies] = useState([]);
	const [favourites, setFavourites] = useState([]);
	const [searchValue, setSearchValue] = useState('');

	const getMovieRequest = async (searchValue) => {
		const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=263d22d8`;

		const response = await fetch(url);
		const responseJson = await response.json();

		if (responseJson.Search) {
			setMovies(responseJson.Search);
		}
	};


 useEffect(()=>{
  getMovieRequest(searchValue)
 },[searchValue])

 useEffect(()=>{
  const moviefavourites=JSON.parse(
    localStorage.getItem('react-movie-app-favourites')
  )
  if(moviefavourites){
    setFavourites(moviefavourites)
  }
 }
  ,[])

 const saveToLocalStorage = (items) => {
  localStorage.setItem('react-movie-app-favourites', JSON.stringify(items));
};

 const addFavouriteMovie = (movie) => {
  const newFavouriteList = [...favourites, movie];
  setFavourites(newFavouriteList);
  saveToLocalStorage(newFavouriteList);
};
  


	const removeFavouriteMovie = (movie) => {
		const newFavouriteList = favourites.filter(
			(favourite) => favourite.imdbID !== movie.imdbID
		);
    
		setFavourites(newFavouriteList);
		saveToLocalStorage(newFavouriteList);
	};

  return (
    <div className='row '>
    

   <Movieheading heading='Movies Collection' />
    
   <Searchbox searchValue={searchValue} setSearchValue={setSearchValue}/>
   <div className='col d-flex'>
   <Movielist 
   movies={movies} 
   handlefavouriteclick={addFavouriteMovie}
    addfavouriteicon={Addfavourite} />
   </div>

    <Favouritemovielistheading heading='Favourite Movies'/>
   

   <div className='col '>
				< Movielist movies={favourites}
         handlefavouriteclick={removeFavouriteMovie} 
         addfavouriteicon={RemoveFavourite}
         />
				
			</div>
   {/* this is not something we are used to particularly we are not gonna be in the best of the regards we are gonna be somewhere we don't know this is not gonna tomorrow  */}
    </div>
  );
}

export default App;
