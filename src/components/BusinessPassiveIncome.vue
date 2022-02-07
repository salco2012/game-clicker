<template>
  <div class="business">
    <img
      class="business__img"
      src="../assets/img/businessPassive/mine.jpg"
      alt="mine"
    />
    <div class="business__info">
      <h2 class="business__title">Угольная шахта</h2>
      <p class="business__description">+ 20 монет <br />к пассивному доходу</p>
      <p class="business__price">
        Стоимость: <span class="business__price-bold">100 монет</span>
      </p>
      <button class="business__buy">Купить</button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.business {
  margin-left: 20px;
  width: 550px;
  height: 150px;
  background-color: rgba(255, 255, 255, 0.507);
  border-radius: 20px;
  box-shadow: 2px 2px 5px black;
  display: flex;
  &__img {
    display: block;
    width: 230px;
    height: 100%;
    border-radius: 20px 0 0 20px;
    margin-right: 20px;
  }
  &__title {
    font-size: 20px;
    color: black;
    margin: 0;
    text-shadow: 1px 1px 1px $color_2;
  }
  &__description {
    padding: 2px;
    font-weight: bold;
    color: $color_1;
    text-shadow: 1px 1px 1px black;
  }
  &__price {
    margin: 10px 0;
    &-bold {
      font-weight: bold;
    }
  }
  &__buy {
    cursor: pointer;
    padding: 5px 10px;
    transition: 0.5s ease;
    font-size: 16px;
    border: none;
    border-radius: 20px;
    &:hover {
      background-color: $color_2;
      transform: scale(1.1);
    }
  }
}
</style>
