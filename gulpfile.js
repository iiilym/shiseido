//引入模块
var gulp=require("gulp");
var htmlmin=require("gulp-htmlmin");
var sass=require("gulp-sass");
var cleanCss=require("gulp-clean-css");
var uglify=require("gulp-uglify");
var babel=require("gulp-babel");
var connect=require("gulp-connect");
//制定任务
//压缩html
gulp.task("html",()=>{
    gulp.src("src/**/*.html")
		.pipe(htmlmin({
			removeComments: true,//清除HTML注释
            collapseWhitespace: true,//压缩HTML
            collapseBooleanAttributes: true
		}))
		.pipe(gulp.dest("dist"))
        .pipe(connect.reload())
        
})
//sass转css  压缩css
gulp.task("css",()=>{
    gulp.src("src/scss/**/*.scss")
        .pipe(sass())
        .pipe(cleanCss())
        .pipe(gulp.dest("dist/css"))
        .pipe(connect.reload())
})
//压缩js
gulp.task("js",()=>{
    gulp.src("src/js/**/*.js")
        .pipe(babel({
            presets:['@babel/env']
        }))
        .pipe(uglify())
        .pipe(gulp.dest("dist/js"))
        .pipe(connect.reload())

})
//开启server
gulp.task("server",()=>{
    connect.server({
        livereload:true,
        port:3000,
        root:"dist"
    });
})
//移动静态资源
gulp.task("static",function(){
    gulp.src("src/static/**/*")
        .pipe(gulp.dest("dist/static"))
        .pipe(connect.reload())
})
//移动libs
gulp.task("libs",()=>{
    gulp.src("src/libs/**/*")
        .pipe(gulp.dest("dist/libs"))
})
//监听文件改变
gulp.task("watch",()=>{
    gulp.watch("src/**/*.html",["html"]);
    gulp.watch("src/scss/**/*.scss",["css"]);
    gulp.watch("src/js/**/*.js",["js"])

})
gulp.task("default",["html","css","js","server","watch","static","libs"])
