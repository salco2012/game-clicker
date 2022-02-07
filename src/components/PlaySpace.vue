<template>
  <div class="play-space">
    <div class="top-wrapper">
      <div class="play-space__balans">{{ currentBalans }}</div>
      <switch-radio class="play-space__switch" @change="ringtoneStatus" />
    </div>
    <business-passive-income />
    <button class="balans-btn" @click="addMoney()">
      Заработать
      <i class="fas fa-coins"></i>
    </button>
    <audio src="../assets/audio/click-btn-coin.mp3" ref="audiocoin"></audio>
    <audio
      src="../assets/audio/background-melody.mp3"
      loop="true"
      ref="backgroundMelody"
    ></audio>
  </div>
</template>

<script>
import SwitchRadio from '../components/SwitchRadio.vue';
import BusinessPassiveIncome from '../components/BusinessPassiveIncome.vue';

export default {
  components: {
    SwitchRadio,
    BusinessPassiveIncome,
  },
  data() {
    return {
      balans: 0,
    };
  },
  methods: {
    addMoney() {
      this.balans += 1;
      this.soundClick();
    },
    soundClick() {
      this.$refs.audiocoin.play();
    },
    ringtoneStatus(event) {
      if (event === true) {
        this.$refs.backgroundMelody.play();
      } else {
        this.$refs.backgroundMelody.pause();
      }
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

  &__balans {
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
    margin: 0 20px 100px 0;
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

  &__switch {
  }
}

.balans-btn {
  @extend %baseButton;
}

.top-wrapper {
  display: flex;
  justify-content: center;
  margin-left: 80px;
}
</style>
