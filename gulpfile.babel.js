'use strict';

import gulp from 'gulp'; // Подключаем gulp


const build = gulp.series(
    // Таски сборки
);

// Экспортируем build
export default build;

// Создаем таск build для сборки
gulp.task('build', build)
