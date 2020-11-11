import { render } from '@testing-library/react'
import React from 'react'

const Header = () => {
   
    return(
    <header> 
        <img src='https://makeameme.org/media/templates/250/trollface.jpg' 
             alt='Problem?' />
        <p>Meme Generator</p>
    </header>
    )
    
}

export default Header