module.exports = {
  publicPath: '/game-clicker/',
  css: {
    loaderOptions: {
      scss: {
        prependData: `
        @import '@/scss/pattern-selectors.scss';
        @import '@/scss/variables.scss';
        `,
      },
    },
  },
};
