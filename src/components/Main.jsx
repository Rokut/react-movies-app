import React from 'react'
import Films from './Films'
import Search from './Search'

const Main = () => {
    //tevinis komponentas, kuriam gausim duomenis is API
    //kuris tures du child komponentus: search ir card
  return (
    <div>
        <h1>Main</h1>
        <Search/>
        <Films/>
    </div>
  )
}

export default Main