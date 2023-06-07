import React, {useState, useEffect} from 'react';
import Card from './components/Card'
import './style.css'

function App() {
  const [cards, setCards] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {

    fetchData()
    
    async function fetchData() {
      const newCards = await fetch("https://api.magicthegathering.io/v1/cards?random=true&pageSize=15");
      const cardsJson = await newCards.json();
      setCards(cardsJson.cards);
      setIsLoading(false)
    }
  }, [])

  async function refreshCards() {
    var newCards = await fetch("https://api.magicthegathering.io/v1/cards?random=true&pageSize=15");
    var cardsJson = await newCards.json();
    setCards(cardsJson.cards);
  }

    return (
      <>
        {
          isLoading ? (
            <h1>Carregando...</h1>
          ) : (
            <>
              <button id='refreshButton' onClick={() => refreshCards()}>Trocar cartas</button>
              <div id='container'>
                {
                  cards.map(card => {
                    if (card.imageUrl == null)
                      card.imageUrl = "https://wallingford.librarycalendar.com/sites/default/files/2022-11/Magic_the_gathering-card_back.jpg"

                    return <Card name={card.name} image={card.imageUrl} id={card.id} />

                  })
                }
              </div>
            </>
          )
        }
      </>
    );
  }

export default App;
