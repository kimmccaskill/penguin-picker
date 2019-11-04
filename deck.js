class Deck {
  constructor() {
    this.cards = [];
    this.selectedCards = [];
    this.matchedCards = [];
    this.matches = 0;
  }

  shuffle() {

  }

  checkSelectedCards() {
    if(this.selectedCards[0].matchInfo === this.selectedCards[1].matchInfo) {
    for(var i = 0;i < this.selectedCards.length; i++) {
    this.matchedCards.push(this.selectedCards[i]);
    };
    this.selectedCards = [];
    this.matches++;
  }
    this.selectedCards = [];

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
