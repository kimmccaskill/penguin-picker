class Player {
  constructor(user) {
    this.id = user.id;
    this.name = user.name;
    this.time = user.time;
  }

  saveToStorage(Player) {
    var userString = JSON.stringify(Player);
    localStorage.setItem("userArray", userString);
  }
}
