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
      let monsterMaxDmg = 10
      let monsterMinDmg = 3
      this.monsterHealth -= this.calculateDamage(monsterMaxDmg, monsterMinDmg)

      if (this.monsterHealth <= 0) {
        alert('You won!')
        this.gameIsRunning = false
        return
      }

      let playerMaxDmg = 12
      let playerMinDmg = 5
      this.playerHealth -= this.calculateDamage(playerMaxDmg, playerMinDmg)

      if (this.playerHealth <= 0) {
        alert('You lost!')
        this.gameIsRunning = false
      }
    },

    specialAttack() {},

    heal() {},

    giveUp() {},

    calculateDamage(minDmg, maxDmg) {
      return Math.max(Math.floor(Math.random() * maxDmg) + 1, minDmg)
    }
  }
})
