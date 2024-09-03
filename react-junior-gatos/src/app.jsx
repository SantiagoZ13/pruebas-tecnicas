import { useState, useEffect } from 'react'
import "./styles.css"
const App = () =>{
    const [fact, setFact] = useState(null)
    const [gift, setGift] = useState(null)
    useState(() =>{
        getCatFact(setFact, setGift)
    }, [])
    
    return (
        <div className='main-container'>
            <img src={gift} alt="random gift" />
            <p>{fact}</p>
        </div>
        
    )
}
export default App

const getGift = (keywords, setGift) =>{
    const API_KEY = "HSW7sDhiomzypgZa3TJD6Tn3nP2zND6s"
    fetch(`https://api.giphy.com/v1/gifs/search?q=${keywords}&api_key=${API_KEY}`)
    .then((res) => res.json())
    .then((data) => setGift(data.data[0].images.original.url))

}

const getCatFact = (setFact, setGift) => {
    const fact = fetch("https://catfact.ninja/fact")
    .then((res) => res.json())
    .then((data) => {
        const randomKeyWords = data.fact.split(" ").slice(0, 3)
        getGift(randomKeyWords, setGift)
        setFact(data.fact)
    })
}
