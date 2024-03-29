global.$ = {
  browserSync: require('browser-sync').create(),
  del: require('del'),
  gulp: require('gulp'),
  autoprefixer: require('gulp-autoprefixer'),
  cache: require('gulp-cache'),
  cleanCSS: require('gulp-clean-css'),
  concat: require('gulp-concat'),
  formatHtml: require('gulp-format-html'),
  notify: require('gulp-notify'),
  pug: require('gulp-pug'),
  rename: require('gulp-rename'),
  sass: require('gulp-sass'),
  uglify: require('gulp-uglify-es').default,
  webp: require('gulp-webp'),
  webpack: require('webpack'),
  webpackStream: require('webpack-stream'),
  path: {
    tasks: require('./gulp/config/tasks.js'),
    src: {
      html: 'src/layout/pages/*.pug',
      sass: 'src/layout/common/*.{scss,sass}',
      js: 'src/layout/common/*.js',
      svg: 'src/layout/common/img/icons/svg/*.svg',
			img: [
				'src/layout/components/sprite/svg/*.svg',
				'src/layout/**/*.{jpg,jpeg,png,gif,svg}',
				'!src/layout/common/img/**/*',
				'src/layout/common/img/**/*.{jpg,jpeg,png,gif,svg}',
			],
			video: 'src/layout/blocks/**/*.{mp4,ogv,webm}',
			json: 'src/layout/blocks/**/*.json',
			files: ['src/files/**/*'],
			robots: 'src/robots.txt',
			libsCSS: ['src/layout/components/libs/scrollbars/OverlayScrollbars.min.css'],
			libsJS: ['src/layout/components/libs/Inputmask/inputmask.min.js', 'src/layout/components/libs/scrollbars/OverlayScrollbars.min.js'],
    },
    build: {
			clean: 'build/',
      html: 'build/',
      css: 'build/css/',
			libsCSS: 'build/css/',
      js: 'build/js/',
			libsJS: 'build/js/',
      svg: 'build/img/icons/',
      img: 'build/',
      video: 'build/',
			json: 'build/',
      files: 'build/files/',
			robots: 'build/',
    },
    watch: {
      html: 'src/layout/**/*.pug',
      sass: 'src/layout/**/*.{scss,sass}',
      js: 'src/layout/**/*.js',
			svg: 'src/layout/common/img/icons/svg/*.svg',
			img: [
				'src/layout/components/sprite/svg/*.svg',
				'src/layout/**/*.{jpg,jpeg,png,gif,svg}',
				'!src/layout/common/img/**/*',
				'src/layout/common/img/**/*.{jpg,jpeg,png,gif,svg}',
			],
			video: 'src/layout/blocks/**/*.{mp4,ogv,webm}',
			files: ['src/files/**/*'],
			robots: 'src/robots.txt',
			json: 'src/layout/blocks/**/*.json',
    }
  }
};

$.path.tasks.forEach(taskPath => require(taskPath)());

$.gulp.task('common', 
	$.gulp.series(
		'clean', 
		$.gulp.parallel(
			'html', 
			'svg',
			'images',
			'video',
			'files',
			'json',
			'robots',
			'libs:css',
			'libs:js',
		)
	)
);

$.gulp.task('dev',
  $.gulp.series(
    'sass:dev', 
		'js:dev'
	)
);

$.gulp.task('default',
  $.gulp.series(
    'common',
		$.gulp.parallel('dev', 'watch', 'server'),
  )
);

$.gulp.task('build', 
	$.gulp.series(
		'common', 
		$.gulp.parallel(
			'sass:prod', 
			'js:prod', 
		),
	)
);