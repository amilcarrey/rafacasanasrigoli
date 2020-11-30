module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: {
    enabled: process.env.NODE_ENV === 'production',
    content: [
      'components/**/*.vue',
      'layouts/**/*.vue',
      'pages/**/*.vue',
      'plugins/**/*.js',
      'nuxt.config.js',
    ],
  },
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '6rem',
        sm: '4em',
        lg: '6rem',
        xl: '7rem',
        '2xl': '8rem',
      },
    },
    extend: {},
  },
  variants: {},
  plugins: [],
}
