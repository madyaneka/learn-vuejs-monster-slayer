new Vue({
  el: '#app',

  data: {
    playerHealth: 100,
    monsterHealth: 100,
    gameIsRunning: false
  },

  methods: {
    startGame() {
      this.gameIsRunning = true
      this.playerHealth = 100
      this.monsterHealth = 100
    },

    attack() {
      let player, monster

      player = { maxDmg: 12, minDmg: 5 }

      monster = { maxDmg: 10, minDmg: 3}

      this.monsterHealth -= this.calculateDamage(monster)
      if (this.checkWin()) { return }

      this.playerHealth -= this.calculateDamage(player)
      this.checkWin()
    },

    specialAttack() {},

    heal() {},

    giveUp() {},

    calculateDamage({ minDmg, maxDmg }) {
      return Math.max(Math.floor(Math.random() * maxDmg) + 1, minDmg)
    },

    checkWin() {
      if (this.monsterHealth <= 0) {
        if (confirm('You won! Start New Game?')) {
          this.startGame()
        } else {
          this.gameIsRunning = false
        }
        return true
      } else if (this.playerHealth <= 0) {
        if (confirm('You lost! Start New Game?')) {
          this.startGame()
        } else {
          this.gameIsRunning = false
        }
        return true
      }
      return false
    }
  }
})
