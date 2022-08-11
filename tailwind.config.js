module.exports = {
  content: ["./src/**/*.{html,js,vue}"],
  purge: {
    content: [
      './src/**/*.vue',
      './src/**/*.js',
      './src/**/*.jsx',
      './src/**/*.html',
      './src/**/*.pug',
      './src/**/*.md',
      './node_modules/tw-elements/dist/js/**/*.js'
    ]
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    
    
    extend: {
      colors : {
        'pale-black' : "rgb(64, 64, 86)",
        'light-purple' : "rgb(88, 69, 207)",
        'light-gray' : "rgb(168, 168, 168)"
      },
      fontFamily : {
        SFBold: ['SF-Bold'],
        InterExtraBold: ['Inter-ExtraBold'],
        
      },
    },
  },
  variants: {
    extend: {},
  },

  plugins: [
    function ({ addComponents }) {
      addComponents({
        '.container': {
          maxWidth: '100%',
          '@screen sm': {
            maxWidth: '600px',
          },
          '@screen md': {
            maxWidth: '700px',
          },
          '@screen lg': {
            maxWidth: '1100px',
          },
          '@screen xl': {
            maxWidth: '1200px',
          },
        }
      })
    },
    require('tw-elements/dist/plugin')
  ],
}
