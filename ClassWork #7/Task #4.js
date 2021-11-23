class Shiritori {
  constructor() {
    this.words = [];
    this.game_over = false;
  }
  play(word) {
    if (!this.game_over) {
      const arr = this.words;
      let len = arr.length;
      let lastOne = arr[len - 1];
      if (arr.length > 0)
        if (word[0] != lastOne[lastOne.length - 1] || arr.includes(word)) {
          this.game_over = true;
          return "Game Over";
        }
      arr.push(word);

      return arr;
    }
    return "Restart Game";
  }
  restart() {
    this.words = [];
    this.game_over = false;
    return "You can start new game";
  }
}

const game = new Shiritori();
console.log(game.play("taron"));
console.log(game.play("narek"));
console.log(game.play("xaren"));
console.log(game.restart());
console.log(game.play("kapn"));
console.log(game.play("narek"));
console.log(game.play("kapn"));
