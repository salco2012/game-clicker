<template>
  <div class="wrapper" v-if="windowUpgradeIsActive">
    <div class="modal">
      <div
        class="modal__card card"
        v-for="upgrade in upgradeList"
        :key="upgrade.upgradeName"
      >
        <h3 class="card__title">{{ upgrade.title }}</h3>
        <p class="card__level">
          Уровень: {{ upgrade.currentLevel }}/{{ upgrade.maxLevel }}
        </p>
        <p class="card__description">{{ upgrade.description }}</p>
        <img
          class="card__img"
          :src="require(`../assets/img/couinClickIcon/${upgrade.Img}`)"
          alt="coin"
        />
        <p class="card__price">Стоимость: {{ upgrade.priceUpgrade }} монет</p>
        <button
          class="card__btn"
          @click="$emit('buy-upgrade', upgrade)"
          :disabled="isDisabledBuyUpgrade(upgrade)"
        >
          Купить улучшение
        </button>
      </div>
      <button class="modal__close" @click="$emit('close-upgrade')">
        &#10006;
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      upgradeList: [
        {
          title: 'Скорость Дохода',
          description: 'Cкорость дохода -0.1 сек.',
          priceUpgrade: 500,
          intervalReduction: 0.1,
          Img: 'time-icon.png',
          currentLevel: 0,
          maxLevel: 9,
        },
        {
          title: 'Улучшение клика 1lvl',
          description: '+ 5 монет к клику',
          increaseInClick: 5,
          priceUpgrade: 50,
          Img: 'lvl-1.png',
          currentLevel: 0,
          maxLevel: 10,
        },
        {
          title: 'Улучшение клика 2lvl',
          description: '+ 25 монет к клику',
          increaseInClick: 25,
          priceUpgrade: 5000,
          Img: 'lvl-3.png',
          currentLevel: 0,
          maxLevel: 10,
        },
        {
          title: 'Улучшение клика 3lvl',
          description: '+ 100 монет к клику',
          increaseInClick: 100,
          priceUpgrade: 75000,
          Img: 'lvl-4.png',
          currentLevel: 0,
          maxLevel: 10,
        },
        {
          title: 'Улучшение клика 4lvl',
          description: '+ 500 монет к клику',
          increaseInClick: 500,
          priceUpgrade: 500000,
          Img: 'lvl-5.png',
          currentLevel: 0,
          maxLevel: 10,
        },
        {
          title: 'Улучшение клика 5lvl',
          description: '+ 1000 монет к клику',
          increaseInClick: 1000,
          priceUpgrade: 2000000,
          Img: 'lvl-6.png',
          currentLevel: 0,
          maxLevel: 10,
        },
      ],
    };
  },
  methods: {
    isDisabledBuyUpgrade({ priceUpgrade, currentLevel, maxLevel }) {
      if (this.balans >= priceUpgrade && currentLevel < maxLevel) {
        return false;
      }
      return true;
    },
    dataCardСhange(titleCard) {
      const currentCard = this.upgradeList.find(
        (card) => card.title === titleCard
      );
      currentCard.currentLevel += 1;
      currentCard.priceUpgrade *= 3;
    },
    resetCardProgress() {
      this.upgradeList = [
        {
          title: 'Скорость Дохода',
          description: 'Cкорость дохода -0.1 сек.',
          priceUpgrade: 500,
          intervalReduction: 0.1,
          Img: 'time-icon.png',
          currentLevel: 0,
          maxLevel: 9,
        },
        {
          title: 'Улучшение клика 1lvl',
          description: '+ 5 монет к клику',
          increaseInClick: 5,
          priceUpgrade: 50,
          Img: 'lvl-1.png',
          currentLevel: 0,
          maxLevel: 10,
        },
        {
          title: 'Улучшение клика 2lvl',
          description: '+ 25 монет к клику',
          increaseInClick: 25,
          priceUpgrade: 5000,
          Img: 'lvl-3.png',
          currentLevel: 0,
          maxLevel: 10,
        },
        {
          title: 'Улучшение клика 3lvl',
          description: '+ 100 монет к клику',
          increaseInClick: 100,
          priceUpgrade: 75000,
          Img: 'lvl-4.png',
          currentLevel: 0,
          maxLevel: 10,
        },
        {
          title: 'Улучшение клика 4lvl',
          description: '+ 500 монет к клику',
          increaseInClick: 500,
          priceUpgrade: 500000,
          Img: 'lvl-5.png',
          currentLevel: 0,
          maxLevel: 10,
        },
        {
          title: 'Улучшение клика 5lvl',
          description: '+ 1000 монет к клику',
          increaseInClick: 1000,
          priceUpgrade: 2000000,
          Img: 'lvl-6.png',
          currentLevel: 0,
          maxLevel: 10,
        },
      ];
    },
  },
  created() {
    const upgradeList = JSON.parse(localStorage.getItem('upgradeList'));
    if (upgradeList !== null) {
      this.upgradeList = upgradeList;
    }
  },
  watch: {
    upgradeList: {
      handler: function () {
        localStorage.setItem('upgradeList', JSON.stringify(this.upgradeList));
      },
      deep: true,
    },
  },
  props: {
    windowUpgradeIsActive: {
      type: Boolean,
      default: false,
    },
    balans: {
      type: Number,
    },
  },
};
</script>

<style lang="scss" scoped>
.modal {
  background: white;
  width: 900px;
  border-radius: 20px;
  position: relative;
  padding: 20px;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  &__close {
    cursor: pointer;
    border: none;
    background: none;
    font-weight: bold;
    font-size: 20px;
    position: absolute;
    top: 5px;
    right: 5px;
  }
}

.card {
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
  text-align: center;
  border: 2px solid black;
  height: 320px;
  width: 250px;
  border-radius: 15px;
  box-shadow: 5px 7px 15px black;
  margin: 15px 0 25px 0;
  background-color: #0d151c;
  color: white;
  padding-bottom: 20px;
  transition: 0.5s ease-in;
  &:hover {
    transform: scale(1.05);
  }

  &__title {
    color: $color_2;
    margin-bottom: 0;
  }

  &__description {
    color: $color_1;
  }

  &__price {
    margin-bottom: 10px;
  }

  &__img {
    width: 120px;
  }

  &__btn {
    @extend %baseButton;
    background-color: $color_2;
    box-shadow: 0 10px 0 $color_3, 0 5px 20px;
    &:hover {
      top: 2px;
      box-shadow: 0 8px 0 $color_3, 0 5px 20px;
    }
    &:active {
      box-shadow: none;
      top: 10px;
    }
    &:disabled {
      background-color: #ccc;
      color: grey;
      box-shadow: 0 10px 0 rgb(138, 138, 138), 0 5px 5px;
      cursor: not-allowed;
    }
  }
}

.wrapper {
  background-color: rgba(0, 0, 0, 0.8);
  position: absolute;
  z-index: 5;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
