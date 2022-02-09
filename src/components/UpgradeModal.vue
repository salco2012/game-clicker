<template>
  <div class="wrapper" v-if="windowUpgradeIsActive">
    <div class="modal">
      <div
        class="modal__card card"
        v-for="upgrade in upgradeList"
        :key="upgrade.upgradeName"
      >
        <h3 class="card__title">{{ upgrade.title }}</h3>
        <p class="card__description">{{ upgrade.description }}</p>
        <img
          class="card__img"
          :src="require(`../assets/img/couinClickIcon/${upgrade.Img}`)"
          alt="coin"
        />
        <p class="card__price">Стоимость: {{ upgrade.priceUpgrade }} монет</p>
        <button class="card__btn">Купить улучшение</button>
      </div>
      <button class="modal__close" @click="$emit('close-upgrade')">&#10006;</button>
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
          description: 'Cкорость дохода -0.2 сек.',
          priceUpgrade: 20000,
          Img: 'time-icon.png',
        },
        {
          title: 'Улучшение клика 1lvl',
          description: '+ 5 монет к клику',
          priceUpgrade: 50,
          Img: 'lvl-1.png',
        },
        {
          title: 'Улучшение клика 2lvl',
          description: '+ 25 монет к клику',
          priceUpgrade: 5000,
          Img: 'lvl-3.png',
        },
        {
          title: 'Улучшение клика 3lvl',
          description: '+ 100 монет к клику',
          priceUpgrade: 75000,
          Img: 'lvl-4.png',
        },
        {
          title: 'Улучшение клика 4lvl',
          description: '+ 500 монет к клику',
          priceUpgrade: 500000,
          Img: 'lvl-5.png',
        },
        {
          title: 'Улучшение клика 5lvl',
          description: '+ 1000 монет к клику',
          priceUpgrade: 2000000,
          Img: 'lvl-6.png',
        },
      ],
    };
  },
  props: {
    windowUpgradeIsActive: {
      type: Boolean,
      default: false,
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

  &__title {
    color: $color_2;
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
