import React, { useState} from 'react'

const Search = ({setSearchValue}) => {
    const [movieTitle, setMovieTitle] = useState('');

    //reikes apsirasyti funkcija
    const handleSubmit = (e) => {
        e.preventDefault();

        if(movieTitle===''){  //jeigu laukas tuscias
            alert("ivest pavadinima")
        } else{
            setSearchValue(movieTitle);
            setMovieTitle(''); //lauko isvalymas po ivykdytos fnkcijos
        }
        
    }
  return (
    <div className='container'>
        <h2 className='row justify-content-center'>Find movie</h2>
        <form className='row justify-content-center' onSubmit={handleSubmit}>
            <div className='form-group'>
                <input 
                type="text"
                name="title"
                className='form-control'
                placeholder='Write title'
                onChange={(e)=>setMovieTitle(e.target.value)} //ivedus reiksme i search, uzsetins i state
                value={movieTitle}/>
            </div>
        </form>
    </div>
  )
}

export default Search