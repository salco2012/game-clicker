<template>
  <div class="play-space">
    <div class="play-space__top-content">
      <div class="play-space__balans">{{ currentBalans }}</div>
      <switch-radio class="play-space__switch" @change="ringtoneStatus" />
    </div>
    <div class="play-space__main-content">
      <div>
        <business-passive-income
          v-for="bisines in allBusiness.slice(0, 4)"
          :key="bisines.title"
          :title="bisines.title"
          :income="bisines.income"
          :price="bisines.price"
          :img="bisines.img"
          @byu-business="byuBusiness"
        />
      </div>
      <div>
        <button class="balans-btn" @click="addMoney()">
          Заработать
          <i class="fas fa-coins"></i>
        </button>
      </div>
      <div>
        <business-passive-income
          v-for="bisines in allBusiness.slice(4, 8)"
          :key="bisines.title"
          :title="bisines.title"
          :income="bisines.income"
          :price="bisines.price"
          :img="bisines.img"
          @byu-business="byu - business"
        />
      </div>
    </div>
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
import soundBuy from '../assets/audio/buy.mp3';

export default {
  components: {
    SwitchRadio,
    BusinessPassiveIncome,
  },
  data() {
    return {
      balans: 0,
      allBusiness: [
        {
          img: 'flea-market.jpg',
          title: 'Местовое на барахолке',
          income: 5,
          price: 150,
        },
        {
          img: 'shawarma-stall.jpg',
          title: 'Ларек шаурмы',
          income: 25,
          price: 900,
        },
        {
          img: 'mine.jpg',
          title: 'Рудниковая шахта',
          income: 125,
          price: 5400,
        },
        {
          img: 'woodworking.jpg',
          title: 'Завод по обработке дерева',
          income: 625,
          price: 32400,
        },
        {
          img: 'hypermarket.jpg',
          title: 'Гипермаркет',
          income: 3125,
          price: 194400,
        },
        {
          img: 'jewelry-stores.jpg',
          title: 'Сеть ювелирных магазинов',
          income: 78125,
          price: 1166400,
        },
        {
          img: 'avia.jpg',
          title: 'Авиакомпания',
          income: 15625,
          price: 3000000,
        },
        {
          img: 'petroleum.jpg',
          title: 'Нефтедобывающее производство',
          income: 390625,
          price: 6998400,
        },
      ],
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
    soundBuy() {
      const audioBuy = new Audio(soundBuy);
      audioBuy.play();
    },
    byuBusiness(event) {
      console.log(event);
      this.soundBuy();
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

  &__main-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &__top-content {
    display: flex;
    justify-content: center;
    margin-left: 80px;
  }
}

.balans-btn {
  @extend %baseButton;
}
</style>
