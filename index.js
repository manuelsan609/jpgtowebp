import sharpOptimizeImages from 'gulp-sharp-optimize-images';
import gulp from 'gulp';

export function jpgtowebp(imgPath, destPath) {
  return gulp
    .src(imgPath)
    .pipe(
      sharpOptimizeImages({
        webp: {
          quality: 80,
          lossless: false,
          alsoProcessOriginal: false,
        }
      })
    )

    .pipe(gulp.dest( destPath));
}

jpgtowebp('coche.jpg','./temp')