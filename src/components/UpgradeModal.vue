<template>
  <div class="wrapper">
    <div class="modal">
      <div
        class="modal__card card"
        v-for="upgrade in upgradeList"
        :key="upgrade.upgradeName"
      ></div>
      <button class="modal__close">&#10006;</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      upgradeList: [
        {
          upgradeName: 'Скорость Дохода',
          upgradeDescription: 'Увеличивает скорость дохода на 0.1 сек.',
          currentUpgradeLevel: 0,
          maxUpgradeLevel: 10,
          priceUpgrade: 20000,
          Img: '',
          bgColor: 'tomato',
        },
        {
          upgradeName: 'Улучшение клика 1lvl',
          upgradeDescription: '+ 5 монет к клику',
          currentUpgradeLevel: 0,
          maxUpgradeLevel: 10,
          priceUpgrade: 50,
          Img: '',
          bgColor: 'blue',
        },
        {
          upgradeName: 'Улучшение клика 2lvl',
          upgradeDescription: '+ 25 монет к клику',
          currentUpgradeLevel: 0,
          maxUpgradeLevel: 10,
          priceUpgrade: 5000,
          Img: '',
          bgColor: 'blue',
        },
        {
          upgradeName: 'Улучшение клика 3lvl',
          upgradeDescription: '+ 100 монет к клику',
          currentUpgradeLevel: 0,
          maxUpgradeLevel: 10,
          priceUpgrade: 75000,
          Img: '',
          bgColor: 'blue',
        },
        {
          upgradeName: 'Улучшение клика 4lvl',
          upgradeDescription: '+ 500 монет к клику',
          currentUpgradeLevel: 0,
          maxUpgradeLevel: 10,
          priceUpgrade: 500000,
          Img: '',
          bgColor: 'blue',
        },
        {
          upgradeName: 'Улучшение клика 5lvl',
          upgradeDescription: '+ 1000 монет к клику',
          currentUpgradeLevel: 0,
          maxUpgradeLevel: 10,
          priceUpgrade: 2000000,
          Img: '',
          bgColor: 'blue',
        },
      ],
    };
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
  &__card {
    border: 2px solid black;
    height: 350px;
    width: 250px;
    border-radius: 15px;
    box-shadow: 5px 7px 15px black;
    margin: 15px 0 25px 0;
  }
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
