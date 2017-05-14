import gulp from 'gulp'
import sass from 'gulp-sass'
import browserSync from 'browser-sync'

//browserSync.create()

const cssPath = 'src/*.sass'

gulp.task('default', ['sass'], () => {
  browserSync.init({
    server: {
      baseDir: './dist'
    }
  })

  gulp.watch(cssPath, ['sass'])
})

gulp.task('sass', () => {
  return gulp.src(cssPath)
    .pipe(sass())
    .pipe(gulp.dest('dist/assets/css'))
    .pipe(browserSync.stream())
})
