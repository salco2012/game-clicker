<template>
  <div class="income-factor">
    <div class="income-factor__wrapper">
      <div class="income-factor__description">
        Множитель:
        <span class="income-factor__description-bold">x{{ factor }}</span>
      </div>
      <button
        class="income-factor__reset-progress"
        :disabled="!multiplierAllowed"
        :title="`Необходимо накопить: ${priceReset} монет `"
        @click="isHideModal = false"
      >
        Увеличить множитель
      </button>
    </div>
    <IncomeFactorModal
      :isHideModal="isHideModal"
      @close-modal="closeModal"
      @reset-progress="
        $emit('reset-progress');
        isHideModal = true;
      "
    />
  </div>
</template>

<script>
import IncomeFactorModal from './IncomeFactorModal.vue';

export default {
  components: {
    IncomeFactorModal,
  },
  data() {
    return {
      isHideModal: true,
    };
  },
  props: {
    factor: {
      type: Number,
    },
    balans: {
      type: Number,
    },
  },
  methods: {
    closeModal() {
      this.isHideModal = true;
    },
  },
  computed: {
    priceReset() {
      return 100000 * this.factor;
    },
    multiplierAllowed() {
      return this.balans >= this.priceReset;
    },
  },
};
</script>

<style lang="scss" scoped>
.income-factor {
  color: $color_2;
  font-size: 32px;
  font-weight: bold;
  margin-right: 50px;
  margin-top: -10px;
  &__wrapper{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  &__description {
    font-size: 16px;
    font-weight: normal;
    text-transform: uppercase;
    margin-right: 10px;
    &-bold {
      font-weight: bold;
      font-size: 32px;
    }
  }
  &__reset-progress {
    cursor: pointer;
    border: none;
    padding: 10px 20px;
    height: 40px;
    border-radius: 20px;
  }
}
</style>
