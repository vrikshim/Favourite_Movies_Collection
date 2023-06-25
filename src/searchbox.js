import React from 'react'
const Searchbox=(props)=>{
    // console.log(props.searchValue)
return (
    <div className='movie_padding'> 
        <input
         value={props.searchValue}
         placeholder='type here ...'
         onChange={(event) => props.setSearchValue(event.target.value)}
         
         > 
         </input>
    </div>
)
}
export default Searchbox