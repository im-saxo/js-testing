# Тестирование в js #

## Настройка karma ##

Установить зависимости
```
npm install --save-dev karma mocha chai karma-mocha karma-chai karma-chrome-launcher karma-webpack webpack
```
Создать конфиг
```
./node_modules/.bin/karma init
```
Используем `mocha` в качестве тестового фреймворка

karma не поддерживает ES6 modules, поэтому нужно добавить препроцессинг, например, с помощью пакета [karma-webpack](https://github.com/webpack-contrib/karma-webpack)
```
preprocessors: {
	'./src/**/*.spec.js': ['webpack']
},

webpack: {
},
 
webpackMiddleware: {
	stats: 'errors-only'
}
```

Запуск тестов
```
./node_modules/.bin/karma start --single-run
```
