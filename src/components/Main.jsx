import React, { useEffect, useState } from 'react'
import Films from './Films'
import Search from './Search'

const Main = () => {
//tevinis komponentas, kuriam gausim duomenis is API
//kuris tures du child komponentus: search ir card

    //pirmas state saugoja paieskos zodi
    const [searchValue, setSearch] = useState('');
    //antras state saugoja gautus duomenys is API
    const [films, SetFilms] = useState('');

    //fnkcija, kuri uzsetina paieskos zodi i Main state
    const setSearchValue = (val) =>{
        //state updatemetodas iskvieciamas
        setSearch(val);
    }

//aprasyti fetch metoda. Bus asinchronine funkcija
const getFilms = async (searchValue) => {
    const url= `https://www.omdbapi.com/?s=${searchValue}&apikey=29169370`
        const response = await fetch(url)
        const responseJson = await response.json();
        SetFilms(responseJson);
        console.log(films);

}

//reik pasitikrinti kada verta daryt request.
//pvz jeigu ta pati search daro kelis kartus is eiles, neverta daryt vel ir vel request


//atsakingas uz metodo getFilms iskvietima
//patikrinti ar pasikeite paieskos zodis(state reiksme => searchValue)
//jeigu pasikeite, vykdo viduje aprasyta metoda => getFilms
useEffect(()=>{
    getFilms(searchValue); //funkcijos iskvietimas
}, [searchValue])



  return (
    <div>
        <h1>Main</h1>
        <Search setSearchValue={setSearchValue}/>
        <Films films={films}/>
    </div>
  )
}

export default Main