import 'bootstrap/dist/css/bootstrap.min.css'; // Импортируем CSS Bootstrap
import { DateTime } from 'luxon';

const hh = document.getElementById('hh'); // Получаем элемент h1

setInterval(() => {
    hh.textContent = DateTime
        .local()
        .setLocale('ru')
        .toFormat('dd.LL.y HH:mm:ss');
}, 1000);

