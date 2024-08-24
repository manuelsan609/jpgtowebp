Ejemplo 1

```
import sharpOptimizeImages from 'gulp-sharp-optimize-images';
import gulp from 'gulp';

export function yourImages() {
  return gulp
    .src('yourSrcImagePath')
    .pipe(
      sharpOptimizeImages({
        webp: {
          quality: 80,
          lossless: false,
          alsoProcessOriginal: true,
        },
        avif: {
          quality: 100,
          lossless: true,
          effort: 4,
        },
        jpg_to_heif: {
          quality: 90,
        },
        png_to_avif: {},

        jpg_to_jpg: {
          quality: 80,
          mozjpeg: true,
        },
      })
    )

    .pipe(gulp.dest('yourDistImagePath'));
}
```

Ejemplo 2


```
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

```
