import React from 'react';
import Card from './components/Card'
import './style.css'

class App extends React.Component {
  state = {
    cards: [],
    isLoading: true
  }

  async componentDidMount() {
    const newCards = await fetch("https://api.magicthegathering.io/v1/cards?random=true&pageSize=15");
    const cardsJson = await newCards.json();
    this.setState({ cards: cardsJson.cards, isLoading: false });
  }

  async refreshCards() {
    var newCards = await fetch("https://api.magicthegathering.io/v1/cards?random=true&pageSize=15");
    var cardsJson = await newCards.json();
    this.setState({cards: cardsJson.cards});
  }

  render() {
    return (
      <>
      <button id='refreshButton' onClick={() => this.refreshCards()}>Trocar cartas</button>
      <div id='container'>
        {
          this.state.isLoading ? (
            <h1>Carregando...</h1>
          ) : (
            this.state.cards.map(card => {
              if (card.imageUrl == null)
                card.imageUrl = "https://wallingford.librarycalendar.com/sites/default/files/2022-11/Magic_the_gathering-card_back.jpg"

              return <Card name={card.name} image={card.imageUrl} id={card.id} />

            })
          )
        }
      </div>
      </>
    );
  }
}

export default App;
