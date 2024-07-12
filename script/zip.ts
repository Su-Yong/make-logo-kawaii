import gulp from 'gulp';
import zip from 'gulp-zip';

import packageJson from '../package.json';

gulp
  .src('dist/**')
  .pipe(zip(`${packageJson.name}.zip`))
  .pipe(gulp.dest('./'));
