# Doc24
Тестовое задание для компании "Экосистема Альфа"

## Задача
Создать SPA со списком карточек, на каждой из которых 
выводится картинка и название, пришедшие с эндпоинта или созданные пользователем.

Открытый апи, который используется в проекте: https://rickandmortyapi.com/api

1. Задача вывести список карточек
   
    Маршрут: /products
   * появляется список карточек с открытого апи
   * реализована логика постановки лайка, удаления карточки и добавления ее в избранное
   * есть возможность фильтровать карточки по логике "все/избранное"
   * клике на любом месте карточки (кроме иконки лайка и кнопки удаления) мы попадаем на отдельную страницу карточки.
2. Задача оформить страницу карточки

   Маршрут: /products/:id
    * появляется подробное описание карточки
    * присутствует кнопка "назад" для возврата к списку карточек
   
3. Задача создать страницу "Создание карточки"

   Маршрут: /create-products
   * реализована форма создания карточки
   * присутствует минимальная валидация формы
   * присутствует кнопка "назад" для возврата на главную страницу

## Стек технологий

![Static Badge](https://img.shields.io/badge/HTML5-white?style=flat&logo=HTML5&logoColor=%2366CDAA&labelColor=grey&color=grey)
![Static Badge](https://img.shields.io/badge/CSS3-white?style=flat&logo=CSS3&logoColor=%2366CDAA&labelColor=grey&color=grey)
![Static Badge](https://img.shields.io/badge/GIT-white?style=flat&logo=GIT&logoColor=%2366CDAA&labelColor=grey&color=grey)
![Static Badge](https://img.shields.io/badge/REACT-white?style=flat&logo=React&logoColor=%2366CDAA&labelColor=grey&color=grey)
![Static Badge](https://img.shields.io/badge/VITE-white?style=flat&logo=VITE&logoColor=%2366CDAA&labelColor=grey&color=grey)
   
### Примеры url для создания карточек (/create-products)
* https://images.unsplash.com/photo-1738447429433-69e3ecd0bdd0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D
* https://images.unsplash.com/photo-1739030026689-f73631404ff4?q=80&w=1937&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D
* https://plus.unsplash.com/premium_photo-1734549547929-9219737132db?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D
* https://images.unsplash.com/photo-1738969197189-72def464dde3?q=80&w=1896&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D
* https://images.unsplash.com/photo-1739054239615-02944e9c338b?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D


