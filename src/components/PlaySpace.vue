<template>
  <div class="play-space">
    <div class="balans">{{ currentBalans }}</div>
    <button
      class="balans-btn"
      @click="
        addMoney();
        soundClick();
      "
    >
      Заработать
      <i class="fas fa-coins"></i>
    </button>
    <audio src="../assets/audio/click-btn-coin.mp3" ref="audiocoin">
      АУДИО
    </audio>
  </div>
</template>

<script>
export default {
  data() {
    return {
      balans: 0,
    };
  },
  methods: {
    addMoney() {
      this.balans += 1;
    },
    soundClick() {
      this.$refs.audiocoin.play();
    },
  },
  computed: {
    currentBalans() {
      return Math.floor(this.balans);
    },
    passiveProfit() {
      return 1;
    },
  },
  created() {
    const balansHistory = JSON.parse(localStorage.getItem('balans'));
    if (balansHistory) {
      this.balans = balansHistory;
    }
  },
  mounted() {
    setInterval(() => {
      this.balans += this.passiveProfit;
    }, 1000);
  },
  watch: {
    balans() {
      localStorage.setItem('balans', JSON.stringify(this.balans));
    },
  },
};
</script>

<style lang="scss" scoped>
.play-space {
  padding-top: 50px;
  background-image: url('../assets/img/backround.jpg');
  min-height: calc(100vh - 50px);
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}

.balans {
  margin: 0 auto;
  position: relative;
  height: 40px;
  width: 300px;
  background-color: #0000004d;
  border-radius: 20px;
  box-shadow: 2px 3px rgba(0, 0, 0, 0.562);
  font-size: 25px;
  color: white;
  font-weight: bold;
  text-shadow: 2px 2px black;
  display: flex;
  align-items: center;
  justify-content: center;
  &::before {
    content: '';
    position: absolute;
    left: -10px;
    top: -5px;
    width: 50px;
    height: 50px;
    background-image: url('../assets/img/gold-coin.png');
    background-size: 50px 50px;
  }
}
.balans-btn {
  cursor: pointer;
  background-color: gold;
  color: black;
  padding: 10px 20px;
  font-size: 22px;
  border-radius: 10px;
  border: none;
  position: relative;
  left: 50%;
  transform: translate(-50%);
  box-shadow: 0 10px 0 rgb(196, 160, 2), 0 5px 20px;
  transition: all 0.2 ease;
  &:hover {
    top: 2px;
    box-shadow: 0 8px 0 rgb(196, 160, 2), 0 5px 20px;
  }
  &:active {
    box-shadow: none;
    top: 10px;
  }
}
</style>
