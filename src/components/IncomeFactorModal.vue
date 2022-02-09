<template>
  <div class="wrapper" ref="wrapper" :class="{ hide: isHideModal }">
    <div class="factor-modal">
      <button class="factor-modal__close" @click="$emit('close-modal')">
        &#10006;
      </button>
      <p class="factor-modal__title">
        Для увеличения множителя, <br />
        требуется сбросить весь прогресс. <br />
      </p>
      <p class="factor-modal__description">Вы согласны?</p>
      <div class="buttons-wrapper">
        <button
          class="buttons-wrapper__btn-yes"
          @click="$emit('reset-progress')"
        >
          Да
        </button>
        <button class="buttons-wrapper__btn-no" @click="$emit('no-reset-progress')">
          Нет
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    isHideModal: {
      type: Boolean,
    },
  },
};
</script>

<style lang="scss" scoped>
.factor-modal {
  position: relative;
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
  background: white;
  text-align: center;
  padding: 20px;
  border-radius: 20px;
  color: black;
  &__title {
    width: 600px;
    color: black;
    font-size: 22px;
    font-weight: normal;
  }
  &__description {
    margin-bottom: 10px;
  }

  .buttons-wrapper {
    margin-bottom: 10px;
    &__btn-yes {
      @extend %baseButton;
      padding: 10px 35px;
      background-color: $color_2;
      margin-right: 20px;
      box-shadow: 0 10px 0 $color_3, 0 5px 10px;
      &:hover {
        top: 2px;
        box-shadow: 0 8px 0 $color_3, 0 5px 10px;
      }
      &:active {
        box-shadow: none;
        top: 10px;
      }
    }

    &__btn-no {
      @extend %baseButton;
      padding: 10px 35px;
      background-color: $color_4;
      margin-right: 20px;
      box-shadow: 0 10px 0 $color_5, 0 5px 10px;
      &:hover {
        top: 2px;
        box-shadow: 0 8px 0 $color_5, 0 5px 10px;
      }
      &:active {
        box-shadow: none;
        top: 10px;
      }
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

.hide {
  display: none;
}
</style>
