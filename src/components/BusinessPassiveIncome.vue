<template>
  <div class="business">
    <img
      class="business__img"
      :src="require(`../assets/img/businessPassive/${img}`)"
    />
    <div class="business__info">
      <h2 class="business__title">{{ title }}</h2>
      <p class="business__description">
        + {{ income * factor }} монет <br />
        <span class="business__description-black">к пассивному доходу</span>
      </p>
      <div class="business__acquisition">
        <p class="business__price">
          Стоимость: <span class="business__price-bold">{{ price }} монет</span>
        </p>
        <p class="business__bought">
          Купленно: <span class="business__bought-bold">{{ bought }}</span> ед.
        </p>
        <p class="business__total-income-point">
          Общий доход с точки:
          <span class="business__total-income-point-bold">
            {{ totalIncomePoint * factor }} монет
          </span>
        </p>
        <button
          class="business__buy"
          :disabled="!isAvailablePurchase"
          @click="$emit('byu-business', { price, income, title })"
        >
          Купить
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    img: {
      type: String,
      require: true,
    },
    title: {
      type: String,
    },
    income: {
      type: Number,
    },
    price: {
      type: Number,
    },
    bought: {
      type: Number,
      default: 0,
    },
    isAvailablePurchase: {
      type: Boolean,
      require: true,
      default: false,
    },
    totalIncomePoint: {
      type: Number,
      default: 0,
    },
    factor: {
      type: Number,
    },
  },
};
</script>

<style lang="scss" scoped>
.business {
  width: 580px;
  height: 200px;
  background-color: rgba(255, 255, 255, 0.507);
  border-radius: 20px;
  box-shadow: 2px 2px 5px black;
  display: flex;
  align-items: center;
  margin: 0 20px 20px 20px;
  &:nth-child(4) {
    margin-bottom: 0;
  }
  &__img {
    display: block;
    width: 230px;
    height: 100%;
    border-radius: 20px 0 0 20px;
    margin-right: 20px;
    object-fit: cover;
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
    &-black {
      color: black;
      text-shadow: none;
      font-weight: 400;
    }
  }
  &__price {
    &-bold {
      font-weight: bold;
    }
  }

  &__bought {
    &-bold {
      font-weight: bold;
    }
  }

  &__total-income-point {
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
    &:disabled {
      transform: none;
      background-color: rgba(155, 153, 153, 0.938);
    }
  }
}
</style>
