import gulp from 'gulp'
import sass from 'gulp-sass'
import concatCss from 'gulp-concat-css'
import browserSync from 'browser-sync'

//browserSync.create()

const paths = {
  css: 'src/*.sass',
  dist: 'dist',
  html: 'dist/*.html'
}

gulp.task('default', ['sass'], () => {
  browserSync.init({
    server: {
      baseDir: './dist'
    }
  })

  gulp.watch(paths.css, ['sass'])
  gulp.watch(paths.html, browserSync.reload)
})

gulp.task('sass', () => {
  return gulp.src(paths.css)
    .pipe(sass())
    .pipe(concatCss('bundle.css'))
    .pipe(gulp.dest('dist/assets/css'))
    .pipe(browserSync.stream())
})
