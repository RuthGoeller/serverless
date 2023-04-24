import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav>
        <div>
        <Link to = "/">Home</Link>
        </div>
        <ul>
            
        <li>  <Link to = "/game">Game</Link></li>
        <li>  <Link to = "/gameover">GameOver</Link></li>
        <li>  <Link to = "/highscores">Highscores</Link></li>
        
        </ul>
    </nav>
  )
}

export default Navbar