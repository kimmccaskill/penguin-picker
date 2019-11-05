class Card {
  constructor(matchInfo, id) {
    this.matchInfo = matchInfo;
    this.matched = false;
    this.id = id;
  }

  match() {
    this.matched = true;
  };
};
