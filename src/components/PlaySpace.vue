<template>
  <div class="play-space">
    <div class="play-space__top-content">
      <div class="play-space__balans">{{ currentBalans }}</div>
      <switch-radio class="play-space__switch" @change="ringtoneStatus" />
    </div>
    <div class="play-space__statistics statistics">
      <p class="statistics__passiveIncome">
        Текущий пассивный доход:
        <span class="statistics__passiveIncome-bold"
          >{{ userInfo.passiveIncome }} ед.</span
        >
      </p>
      <p class="statistics__clickIncome">
        Доход при клике:
        <span class="statistics__clickIncome-bold"
          >{{ userInfo.clickIncome }} ед.</span
        >
      </p>
      <p class="statistics__factor">
        Множитель:
        <span class="statistics__factor-bold">x{{ userInfo.factor }}</span>
      </p>
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
          :bought="bisines.bought"
          :isAvailablePurchase="bisines.isAvailablePurchase"
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
          :isAvailablePurchase="bisines.isAvailablePurchase"
          @byu-business="byuBusiness"
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
      userInfo: {
        balans: 0,
        passiveIncome: 1,
        clickIncome: 1,
        factor: 1,
        incomeInterval: 1,
      },
      allBusiness: [
        {
          img: 'flea-market.jpg',
          title: 'Местовое на барахолке',
          income: 5,
          price: 150,
          bought: 0,
          isAvailablePurchase: false,
        },
        {
          img: 'shawarma-stall.jpg',
          title: 'Ларек шаурмы',
          income: 25,
          price: 900,
          bought: 0,
          isAvailablePurchase: false,
        },
        {
          img: 'mine.jpg',
          title: 'Рудниковая шахта',
          income: 125,
          price: 5400,
          bought: 0,
          isAvailablePurchase: false,
        },
        {
          img: 'woodworking.jpg',
          title: 'Завод по обработке дерева',
          income: 625,
          price: 32400,
          bought: 0,
          isAvailablePurchase: false,
        },
        {
          img: 'hypermarket.jpg',
          title: 'Гипермаркет',
          income: 3125,
          price: 194400,
          bought: 0,
          isAvailablePurchase: false,
        },
        {
          img: 'jewelry-stores.jpg',
          title: 'Сеть ювелирных магазинов',
          income: 78125,
          price: 1166400,
          bought: 0,
          isAvailablePurchase: false,
        },
        {
          img: 'avia.jpg',
          title: 'Авиакомпания',
          income: 15625,
          price: 3000000,
          bought: 0,
          isAvailablePurchase: false,
        },
        {
          img: 'petroleum.jpg',
          title: 'Нефтедобывающее производство',
          income: 390625,
          price: 6998400,
          bought: 0,
          isAvailablePurchase: false,
        },
      ],
    };
  },
  methods: {
    addMoney() {
      this.userInfo.balans += 15;
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
    soundBuy(price, income, isAvailablePurchase) {
      console.log(price, income, isAvailablePurchase);
      const audioBuy = new Audio(soundBuy);
      audioBuy.play();
    },
    byuBusiness({ price, income, title }) {
      this.userInfo.balans -= price; // Уменьшаем баланс
      this.userInfo.passiveIncome += income; // Увеличиваем пассивный доход

      // Перезаписываем кол-во купленных бизнесов и увеличиваем стоимость последующего.
      this.allBusiness.filter((item) => {
        if (item.title === title) {
          item.bought += 1;
          item.price += Math.floor((item.price / 100) * 10);
        }
      });

      this.soundBuy(); // Проигрываем мелодию при покупке
    },
  },
  computed: {
    currentBalans() {
      return Math.floor(this.userInfo.balans);
    },
  },
  created() {
    const balansHistory = JSON.parse(localStorage.getItem('balans'));
    if (balansHistory) {
      this.userInfo.balans = balansHistory;
    }
  },
  mounted() {
    setInterval(() => {
      this.userInfo.balans += this.userInfo.passiveIncome;
    }, 1000);
  },
  watch: {
    userInfo: {
      handler: function () {
        localStorage.setItem('balans', JSON.stringify(this.userInfo.balans));
        this.allBusiness.forEach((item) => {
          if (this.userInfo.balans >= item.price) {
            item.isAvailablePurchase = true;
          } else {
            item.isAvailablePurchase = false;
          }
        });
      },
      deep: true,
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
    margin: 0 20px 20px 0;
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

  &__statistics {
    margin: 0 auto;
    width: 350px;
    height: 80px;
    position: relative;
    background-color: rgba(255, 255, 255, 0.507);
    border-radius: 20px;
    box-shadow: 2px 2px 5px black;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    &::before {
      content: '';
      position: absolute;
      left: -20px;
      top: 10px;
      width: 60px;
      height: 60px;
      background-image: url('../assets/img/statistics.png');
      background-size: 60px 60px;
    }
  }
}

.statistics__passiveIncome-bold,
.statistics__clickIncome-bold,
.statistics__factor-bold {
  font-weight: bold;
}

.balans-btn {
  @extend %baseButton;
}
</style>
