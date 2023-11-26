# StandUp_intensive2023

- Интенсив my.methed.ru 21.11.2023.
- макет https://www.figma.com/file/S8tWzyFV28xy3RCHdgu0qV/Stand-Up-(Maraphone)
- серверная часть Node.js
- frontend библиотека ViteJS
- https://tom-select.js.org/ - плагин для кастомизации select
- https://just-validate.dev/ - валидация
- https://github.com/RobinHerbots/Inputmask -стилизация input
- запуск проекта после клонирования. api_stand-up - package.json - npm install, npm run start. Далее standup - package.json - npm install, dev vite --open.
- При ошибке plugin:vite:import-analysis] Failed to resolve import "fsevents" проверить нет ли main.js строки с импортами из vite, например: import { createFilter } from "vite";
