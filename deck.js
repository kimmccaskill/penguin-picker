class Deck {
  constructor() {
    this.cards = [];
    this.selectedCards = [];
    this.matchedCards = [];
    this.matches = [];
  }

  shuffle() {

  }

  checkSelectedCards() {

  }

  selectCard(clickedId) {
    for (var i = 0; i < this.cards.length; i++) {
      if(this.cards[i].id === clickedId) {
        this.selectedCards.push(this.cards[i]);
      }
    }
  }

  moveToMatched() {

  }
}
