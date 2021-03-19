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
    displayCards: cards,
    score: 0,
    topScore: 0,
    note: "Don't click the same photo twice or you lose.",
  };

  sortCards = () => {
    cards.sort(function (a, b) {
      return 0.5 - Math.random();
    });
  };

  cardClick = (id) => {
    console.log(this.state.cards);
    console.log(this.state.displayCards);

    const clickedCards = this.state.displayCards.find((card) => card.id === id);

    if (clickedCards === undefined) {
      this.setState({
        displayCards: cards,
        topScore:
          this.state.score > this.state.topScore
            ? this.state.score
            : this.state.topScore,
        score: 0,
        note: "Nope!",
      });
    } else {
      const newCardsList = this.state.displayCards.filter(
        (card) => card.id !== id
      );

      this.setState({
        displayCards: newCardsList,
        score: this.state.score + 1,
        note: "Good guess.",
      });
    }
    this.sortCards();
  };

  render() {
    return (
      <Wrapper>
        <Nav score={this.state.score} topScore={this.state.topScore} />
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
      </Wrapper>
    );
  }
}

export default App;
