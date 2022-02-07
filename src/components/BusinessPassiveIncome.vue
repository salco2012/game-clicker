<template>
  <div class="business">
    <img
      class="business__img"
      :src="require(`../assets/img/businessPassive/${img}`)"
    />
    <div class="business__info">
      <h2 class="business__title">{{ title }}</h2>
      <p class="business__description">
        + {{ income }} монет <br/> <span class="business__description-black">к пассивному доходу</span>
      </p>
      <div class="business__acquisition">
        <p class="business__price">
          Стоимость: <span class="business__price-bold">{{ price }} монет</span>
        </p>
        <button class="business__buy" @click="$emit('byu-business', $event)">Купить</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    img: {
      typeof: String,
      require: true,
    },
    title: {
      typeof: String,
    },
    income: {
      typeof: Number,
      default: '-',
    },
    price: {
      typeof: Number,
      default: '-',
    },
  },
};
</script>

<style lang="scss" scoped>
.business {
  width: 580px;
  height: 180px;
  background-color: rgba(255, 255, 255, 0.507);
  border-radius: 20px;
  box-shadow: 2px 2px 5px black;
  display: flex;
  align-items: center;
  margin: 0 0 20px 20px;
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
    margin-bottom: 10px;
    &-black{
       color: black;
       text-shadow: none;
       font-weight: 400;
    }
  }
  &__price {
     margin-bottom: 10px;
    &-bold {
      font-weight: bold;
    }
  }
  &__buy {
    cursor: pointer;
    padding: 5px 10px;
    transition: 0.5s ease;
    font-size: 18px;
    border: none;
    border-radius: 20px;
    &:hover {
      background-color: $color_2;
      transform: scale(1.1);
    }
  }
  &__acquisition{

  }
}
</style>
