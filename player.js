class Player {
  constructor(user) {
    this.name = user.name;
    this.time = user.time;
    this.simpleTime = user.simpleTime;
  }

  saveToStorage(Player) {
    var userString = JSON.stringify(Player);
    localStorage.setItem("userArray", userString);
  }
}
