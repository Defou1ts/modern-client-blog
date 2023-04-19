# Tестовое задание Modsen Client Blog


## Содержание


- [Техническое задание](#Техническое-задание)
- [Используемые технологии](#Используемые-технологии)
- [Необходимый функционал](#Необходимый-функционал)
- [Дополнительный функционал](#Дополнительный-функционал)
- [Описание экранов](#Описание-экранов)
- [Полезные ссылки](#Полезные-ссылки)


## Техническое задание


Необходимо реализовать React приложение "Modsen Client Blog" по предоставленному дизайну из Figma
с использование server-side rendering(NextJS).


## Используемые технологии


- **_yarn_** - менеджер пакетов.
- **_TS_** - инструмент строгой типизации
- **_react-router-dom_** - инструмент управления состоянием.
- **_email-js_** - библиотека позволяющая отправлять электронные письма на почту
- **_SCSS_** - препроцессор, позволяющий писать код для стилей CSS.
- ***cypress*** — e2e тестирование для web-приложений
- ***jest*** — unit-тестирование
- **_yup_** - библиотека для валидации форм
- **_nextJS_** - фреймворк на JavaScript, использующий React для построения server-side render



## Необходимый функционал:


Приложение должно предоставлять возможность:


- отправки писем на электронную почту
- реализацию elastic search
- реализацию infinity scroll
- просмотр интерактивной карты
- смены языка (продумать самостоятельно)


## Дополнительный функционал


- Развернуть приложение на хостинге (heroku, vercel)
- Настроить CI/CD, используя [GitHub Actions](https://github.com/features/actions).
- Собрать проект с нуля(с настройками всех конфигов: webpack, eslint, prettier, husky и тд.)


### Пример графического представления:


Ссылка на макет: [Макет "Modsen Client Blog"](<https://www.figma.com/file/fhmK69xjYdFpfoVhY7t6u1/Client-Blog-Modsen-Template?node-id=0%3A1&t=FIUQOCF7mw0vjeF8-0>).


### Также проект предполагает:


- Организацию файловой структуры описанной в [structure](https://github.com/mkrivel/structure).
- Обработку ошибок через паттерн _"Error Boundaries"_.
- Использование TypeScript для типизирования и уменьшения количества потенциальных багов.
- Использование алиасов для импортирования файлов.
- Реализация должна быть выполнена без использования UI библиотек.
- Обязательная валидация всех текстовых полей с использованием _yup_.
- Оптимизацию дизайна под мобильные устройства.
- Покрытие тестами всего приложения (cypress, jest, ...).
- Создание UI библиотеки компонентов, используя storybook.
- Обязательную анимацию при наведения, нажатии на кнопки, прокрутки карусели и слайдеров, появлении элементов на странице при рендере и скролле.
- Творчество в контексте анимации, помимо обязательной выше, приветствуется.


## Описание экранов


1. [Главная Home](<https://www.figma.com/file/fhmK69xjYdFpfoVhY7t6u1/Client-Blog-Modsen-Template?node-id=2%3A509&t=5YoUOACNZ3dRVibl-0>).


Все страницы включают в себя верхний блок, который предполагает реализацию перехода между страницами и при нажатии на кнопку "Video about us" открывается модальное окно, в котором сразу начинает проигрываться видео(выбранное выполняющим).
На странице необходимо реализовать загрузку контента с помощью infinity scroll.
В блоке "Step-by-step" при нажатии на кнопку "read more" происходит переход на страницу поста, который представлен на [экране](https://www.figma.com/file/fhmK69xjYdFpfoVhY7t6u1/Client-Blog-Modse-Template?node-id=14%3A919&t=5YoUOACNZ3dRVibl-0).
В блоке "Featured Post" при нажатии на кнопку "read more" происходит переход на страницу Blog Post.
В блоке "All Posts" при нажатии на кнопку "View All" происходит переход на страницу происходит переход на BLog.
В блоке "About Us" при нажатии на кнопку "read more" происходит переход на страницу About Us.
В блоке "Choose A Category" при нажатии на одну из категорий, пользователь попадает на страницу Category.
В блоке "Why we started" при нажатии на кнопку "Discover our story" пользователь попадает на страницу About Us.
В блоке "List of Authors" при нажатии на одного из авторов, пользователь попадает на Author.
В блоке "TESTIMONIALS" реализована карусель, которая имеет горизонтальный список включающий в себя 1 карточку с отзывом и есть возможность навигации на следующую страницу списка с использованием двух стрелок навигации.
В блоке "Join our team to be a part of our story" при нажатии на кнопку "Join Now" пользователь попадает на страницу Contact.
На каждой странице в блоке "Subscribe to our news letter" должна быть реализована форма отправки сообщения на электронную почту выполняющего.
При нажатии на ссылку "Privacy Policy", которая находится в футере, должна открываться страница Privacy Policy.


2. [Главная Blog](<https://www.figma.com/file/fhmK69xjYdFpfoVhY7t6u1/Client-Blog-Modsen-Template?node-id=14%3A738&t=5YoUOACNZ3dRVibl-0>).


В блоке "Step-by-step" при нажатии на кнопку "Read more" происходит переход на страницу поста, который представлен на [экране](https://www.figma.com/file/fhmK69xjYdFpfoVhY7t6u1/Client-Blog?node-id=2%3A323&t=mb2rG2iYAU6MVs3n-0)
На странице расположен список постов с разными категориями. С помощью кнопок prev/next можно листать список постов.
При нажатии на любой из постов, открывается страница Blog Post, на которой для каждого из постов располагается своё содержимое.
В блоке "All Categories" при нажатии на определенную категорию, пользователь попадает на страницу Category.
В блоке "Join our team to be a part of our story" при нажатии на кнопку "Join Now" пользователь попадает на Contact.




3. [Главная Blog Post](<https://www.figma.com/file/fhmK69xjYdFpfoVhY7t6u1/Client-Blog-Modsen-Template?node-id=14%3A919&t=5YoUOACNZ3dRVibl-0>).


На данной странице помимо содержимого определенного поста, в блоке "What to read next" находится список с постами с той же категорией, что и основной пост на странице.
В блоке "Join our team to be a part of our story" при нажатии на кнопку "Join Now" пользователь попадает на страницу Contact.
В блоке "Subscribe to our news letter" должна быть реализована форма отправки сообщения на электронную почту пользователя.


4. [Главная About Us](<https://www.figma.com/file/fhmK69xjYdFpfoVhY7t6u1/Client-Blog-Modsen-Template?node-id=14%3A1045&t=5YoUOACNZ3dRVibl-0>).


В блоке "List of Authors" находится список авторов, при нажатии на определенного автора, открывается страница с информацией о нём на странице About Us.
Каждая из иконок социальных сетей является уникальной для каждого автора.
В блоке "Join our team to be a part of our story" при нажатии на кнопку "Join Now" пользователь попадает на страницу Contact.


5. [Главная Category](<https://www.figma.com/file/fhmK69xjYdFpfoVhY7t6u1/Client-Blog-Modsen-Template?node-id=14%3A1304&t=5YoUOACNZ3dRVibl-0>).


На данной странице расположен список постов с той же категорией, которую первоначально выбрал пользователь на странице Blog.
К каждому посту привязаны один и более тегов. В блоке "Search for tag..." можно найти посты с определенным тегом, который введет пользователь.
Такой поиск реализован с помощью elastic search. В блоке "Categories" при выборе категории должен отображаться список постов с выбранной категорией.
В блоке "All Tags" происходит поиск постов по тегу, таким образом происходит дополнительная фильтрация постов с текущей категорией.
Если же пользователь ввел определенный тег в "Search for tag...", то при выборе тега в "All tags" отображение постов тоже должно измениться.
Если же никаких совпадений нет, то необходимо отображать альтернативный текст на странице пользователя.


6. [Главная Author](<https://www.figma.com/file/fhmK69xjYdFpfoVhY7t6u1/Client-Blog-Modsen-Template?node-id=14%3A1483&t=5YoUOACNZ3dRVibl-0>).


На данной странице отображается краткая информация об авторе и список его социальных сетей.
В блоке "My Posts" отображается список его постов, если же они принадлежат автору.
В случае отсутствия постов, которые принадлежат автору, если же постов нет, то должен отображаться альтернативный текст.
При нажатии на один из постов, происходит переход на страницу Blog Post.


7. [Главная Contact](<https://www.figma.com/file/fhmK69xjYdFpfoVhY7t6u1/Client-Blog-Modsen-Template?node-id=14%3A1581&t=5YoUOACNZ3dRVibl-0>).


Данная страница хранит в себе форму для связи, которая отправляется на почту (выбранную пользователем) с заранее заготовленным текстом.
Карта является интерактивной, на которой отображаются точки (минимум 3) удаленные друг от друга (точки определяет выполняющий, но они должны быть расположены в разных странах).


8. [Главная Privacy Policy](<https://www.figma.com/file/fhmK69xjYdFpfoVhY7t6u1/Client-Blog-Modsen-Template?node-id=14%3A1678&t=5YoUOACNZ3dRVibl-0>).




## Полезные ссылки


[React](https://reactjs.org/docs/getting-started.html)


[React hooks](https://reactjs.org/docs/hooks-intro.html)


[React router dom](https://reacttraining.com/react-router/web/guides/quick-start)


[React redux](https://react-redux.js.org/introduction/quick-start)


[NextJS](https://nextjs.org/docs)


[Тестирование Cypress](https://docs.cypress.io/guides/overview/why-cypress.html#In-a-nutshell)


[Тестирование Jest](https://jestjs.io/ru/docs/getting-started)


[Email-js](https://www.emailjs.com/docs/examples/reactjs/)


[SCSS](https://sass-lang.com/documentation/)


[Yup](https://www.npmjs.com/package/yup)


[Storybook](https://dev.to/iamrishupatel/how-to-create-a-react-component-library-using-storybook-typescript-scss-and-rollup-4pin)


[i18next](https://react.i18next.com/)


[GitHub Actions](https://github.com/features/actions)


[Heroku](https://devcenter.heroku.com/articles/heroku-cli)



