import React, { Component } from "react";
import "./App.css";
import Wrapper from "./components/wrapper";
import Nav from "./components/Nav";
import Header from "./components/header";
import Game from "./components/game";
import Card from "./components/card/Card";
import cards from "./cards.json";

class App extends Component {
  state = {
    cards,
    guessedCards: cards,
    currentScore: 0,
    highScore: 0,
    note: "Don't click the same photo twice or you lose.",
  };

  sortCards = () => {
    cards.sort(function (a, b) {
      return 0.5 - Math.random();
    });
  };

  cardClick = (id) => {
    console.log(this.state.cards);
    console.log(this.state.guessedCards);

    const clickedCards = this.state.guessedCards.find((card) => card.id === id);

    if (clickedCards === undefined) {
      this.setState({
        guessedCards: cards,
        highScore:
          this.state.currentScore > this.state.highScore
            ? this.state.currentScore
            : this.state.highScore,
        currentScore: 0,
        note: "nope!",
      });
    } else {
      const newCardsList = this.state.guessedCards.filter(
        (card) => card.id !== id
      );

      this.setState({
        guessedCards: newCardsList,
        currentScore: this.state.currentScore + 1,
        note: "Good guess.",
      });
    }
    this.sortCards();
  };

  render() {
    return (
      <Wrapper>
        <Nav
          currentScore={this.state.currentScore}
          highScore={this.state.highScore}
        />
        <Header note={this.state.note} />
        <Game>
          {this.state.cards.map((card) => (
            <Card
              cardClick={this.cardClick}
              id={card.id}
              key={card.id}
              name={card.name}
              image={card.image}
            />
          ))}
        </Game>
        {/* <Footer /> */}
      </Wrapper>
    );
  }
}

export default App;
