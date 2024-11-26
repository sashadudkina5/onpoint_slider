# Тестовое задание для Onpoint

## Описание проекта

Слайдер с горизонтальным свайпом, реализованный с помощью **React** и **JavaScript**. Приложение адаптировано для экранов с разрешением **1024x768**.

## Технологии

- **React.js**: библиотека для построения пользовательского интерфейса.
- **HTML5 и CSS**: разметка, стилизация и анимации.
- **JavaScript**: обработка событий и взаимодействие с элементами, включая использование нативного JS.

## Функционал проекта

1. **Горизонтальный свайп между слайдами**  
   Перемещение между слайдами с помощью свайпа, обработка touch-событий на сенсорных экранах. Плавный переход между слайдами с обновлением фона через CSS-трансформации.

2. **Кнопка навигации**  
   Фиксированная кнопка в виде иконки домика, которая при клике плавно переносит пользователя на первый слайд.

3. **Модальное окно на третьем слайде**  
   Модальное окно на третьем слайде с анимацией появления/исчезновения содержимого и переключаемым списком.

4. **Кастомный скроллбар**  
   Скроллбар на втором слайде с поддержкой перетаскивания на сенсорных экранах. Позиция ползунка обновляется динамически в зависимости от прокрутки.

5. **CSS анимации и переходы**  
   Используются для плавных визуальных эффектов. На втором слайде анимация запускается только при переходе с первого.

## Установка и запуск

1. Для установки зависимостей:  
   `npm install`

2. Для запуска проекта:  
   `npm start`