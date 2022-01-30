import { useState } from "react";
import { dataFrases } from "../helpers/data";
import '../style/App.css'
import {AiOutlineTwitter} from 'react-icons/ai'


const QuoteBox = ({ frases, handleNew }) => (
  <div id="quote-box">
    <p id="text">{frases.frase}</p>  
    <h2 id="author">{frases.autor}</h2>
    <div className="actions">
      <button id="new-quote" className="btn" onClick={handleNew} >
        Nueva Frase
      </button>
      <a target="_top" href="https://twitter.com/intent/tweet" id="tweet-quote"><AiOutlineTwitter className="icono" /></a>
    </div>
  </div>
);



const frasesRandom = () => 
  Math.round(Math.random() * ((dataFrases.length-1) - 0) + 0);

const App = () => {
  const [frases, setFrases] = useState({autor:"Jacinto Benavente", frase:"Lo peor que hacen los malos es obligarnos a dudar de los buenos"})

  const handleNew = () => {
    setFrases(dataFrases[frasesRandom()])
  }

  return (
    <div class="main">
      <QuoteBox frases={frases} handleNew={handleNew}  />
    </div>
  )
}


export default App;
