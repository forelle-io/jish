# 🎣 Jish - Forelle IO Web Client

<p align="center">
    <img width="250" src="./static/logos/Forelle.io.png">
</p>

SSR-приложение на [React](https://reactjs.org) & [Next](https://nextjs.org/) для организации проведения рыбалок и кооперации между собой людей, интересующихся ловлей рыбы.

Ссылка: В процессе работы

## Зависимости

* Node.js LTS
* npm 6.x
* React 16.10.x
* Redux 7.x
* Next 9.x
* Koa 2.7
* Typescript 7.x

## Структура проекта
Название | Содержание файла | Подробнее
----------------|-----------------------|-----------------
package.json       | Файл с зависимостями проекта и npm-командами | [Package.json docs](https://docs.npmjs.com/files/package.json)
next.config.ts       | Конфигурации Next, Webpack и прочего для сборки | [Next config docs](https://nextjs.org/docs#custom-configuration)
jest.config.js       | Конфигурация Jest для unit-тестов | [Jest docs](https://jestjs.io/docs/en/configuration)
.babelrc    | Конфигурация Babel | [Babel docs](https://babeljs.io/docs/en/configuration)
enzyme.js | Конфигурация Enzyme для тестирования React | [Enzyme docs](https://airbnb.io/enzyme/)
api    | Обертки для работы с API | -
assets     | Ресурсы сайта: css, шрифты | -
components    | "Глупые" React-компоненты: формы, кнопки и прочее | -
layouts      | Шаблоны для сайта | -
pages    | Страницы сайта | [Next pages](https://nextjs.org/docs#dynamic-routing)
public      | Статичные файлы сайта | [Next static](https://nextjs.org/docs#static-file-serving-eg-images)
server      | Кастомный Koa-сервер | [Koa docs](https://koajs.com/)
static      | Статический файлы | [Next static](https://nextjs.org/docs#static-file-serving-eg-images)
store     | State-менеджер (Redux) | [Redux docs](https://redux.js.org/api/api-reference)
tests    | Unit и e2e тесты и их покрытие | -

## Окружение разработки

Устанавливаем node.js для Ubuntu. Для других систем смотрим [здесь](https://nodejs.org/en/download/package-manager/)
```shell
sudo apt-get install curl
curl -sL https://deb.nodesource.com/setup_10.x | sudo -E bash -
sudo apt-get install nodejs
```

Проверяем версию (Должна быть 10.x)
```shell
node -v
```

Клонируем репозиторий в любую папку
```shell
git clone https://github.com/forelle-io/jish
```

Заходим в папку проекта и устанавливаем зависимости
```shell
cd /path/to/repository
npm i
```

### Запуск локального сервера

Запуск сервера в режиме разработки с Koa и hot-reload
```shell
npm run dev
```

## Тестирование

Unit-тестирование:
```shell
npm run unit
```

## Сборка
Запустить сборку  production-версии:
```shell
npm run build
```