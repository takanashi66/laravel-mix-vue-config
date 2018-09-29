const mix = require('laravel-mix');

mix.vue('src/js/script.js', 'htdocs/common/js')
   .sourceMaps()
   
mix.sass('src/scss/style.scss', 'htdocs/common/css')
   .options({
      processCssUrls: false,
      postCss: [
        require('css-mqpacker')()
      ],
      autoprefixer: {
        browsers: ['last 2 versions'],
        options: {
          grid: true,
        }
      }
   })
   .sourceMaps()

mix.browserSync({
  server: 'htdocs',
  proxy: false,
  files: [
    'htdocs/**/*.html',
    'htdocs/**/*.php',
    'htdocs/common/js/*.js',
    'htdocs/common/css/*.css',
  ]
})
