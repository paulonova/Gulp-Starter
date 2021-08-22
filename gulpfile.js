var gulp = require('gulp');
var sass = require('gulp-sass')(require('sass'));

//Sass task
gulp.task("sass", function(){
  return gulp
      .src(['./src/sass/**/*.scss', '!./src/sass/widgets.scss'])    
      .pipe(sass())
      .pipe(gulp.dest('./dist/css'));
});



// DOC

// .src => where gulp will get the code
// .dest => where gulp will save the compiled code
// ! => means that this source will not be executed
// *.scss - all files at the end of the path  
//  **/*.scss - Match all files at the end of the path plus all children files and folders
//