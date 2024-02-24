// imgs
import project1 from "./../img/projects/01.jpg";
import project2 from "./../img/projects/02.jpg";
import project3 from "./../img/projects/03.jpg";
import project4 from "./../img/projects/04.jpg";
import project5 from "./../img/projects/05.jpg";
import project6 from "./../img/projects/06.png";
import project7 from "./../img/projects/07.jpg";

const projects = [
  {
    id: 1,
    title: "Умная Копилка",
    img: project1,
  },
  {
    id: 2,
    title: "Часы Из Часов",
    description:
      " \
          Графический дисплей из 7-сегментных индикаторов. \
          Реальный размер: 24х6 индикатора. \
          Виртуальное разрешение: 96х36 пикселей. \
          Очень круто выглядит! \
        ",
    components: [
      "Arduino Nano",
      "Wemos mini",
      "MAX7219EWG",
      "7-сег 4 bit 0.56″ common cathode",
    ],
    img: project2,
    links: {
      gitHubLink: "https://github.com/AlexGyver/SegmentMonitor",
      projectLink: "https://alexgyver.ru/disp-clock/",
      youtubeLink: "https://www.youtube.com/watch?v=jAGm5IdTssY",
    },
  },
  {
    id: 3,
    title: "Шпаргалка На Arduino",
    description:
      "Девайс, который выводит текст с SD карты на OLED дисплей. Питание от батарейки. 3 бесшумные кнопки. Режим энергосбережения",
    components: [
      "Arduino Nano",
      "ATmega328p голая",
      "Программатор USB ASP",
      "OLED дисплей 0.96″ 4 пина",
      "Модуль карты памяти",
      "Кнопки (размер любой)",
      "Модуль с батарейкой",
      "Батарейка CR2025/2032",
      "Резистор 10 кОм (маркировка 103) размер 1206. Вообще должно работать без него, но на свой страх и риск",
    ],
    img: project3,
    links: {
      gitHubLink: "https://github.com/AlexGyver/SDreader/",
      projectLink: "https://alexgyver.ru/sdreader/",
      youtubeLink: "https://www.youtube.com/watch?v=l5bCSHHwxUk",
    },
  },
  {
    id: 4,
    title: "Сворачиватель Окон",
    description:
      "GyverTripper – пародия на девайс DayTripper от dekuNukem. Девайс является сигнализацией, которая при срабатывании сворачивает окна на компьютере.",
    components: [
      "Digispark",
      "Радио модуль",
      "Генератор",
      "PIR",
      "Транзисторы",
      "Резисторы 220R",
      "Отсек для батарейки",
    ],
    img: project4,
    links: {
      gitHubLink: "https://github.com/AlexGyver/GyverTripper/",
      projectLink: "https://alexgyver.ru/gyvertripper/",
      youtubeLink: "https://www.youtube.com/watch?v=ZOJf2LdWTIk",
    },
  },
  {
    id: 5,
    title: "Многоканальная Система Автополива",
    description:
      "Многоканальная система автополива растений для установки в умную теплицу, на огород или в квартиру. Особенности: \
      Поддержка от 1 до 15 помп (Arduino NANO / UNO). \
      Индивидуальная настройка периода и времени работы. \
      Дисплей 1602 с отображением настроек. \
      Индивидуальное название каждого канала (можно по-русски!). \
      Удобное управление и настройка энкодером. \
      Хранение настроек в энергонезависимой памяти. \
      Настройка уровня управляющего сигнала. \
      Настройка часы/минуты/секунды работы. \
      Параллельный режим работы / очередь.",
    components: [
      "Arduino Nano",
      "Помпа 5V",
      "Помпа 12V",
      "Дисплей LCD 1602 I2C",
      "Энкодер",
      "Реле",
      "Макетная плата",
      "Блоки питания",
      "Разветвитель потока с краниками",
      "Разветвитель потока без краников",
      "Шланг силиконовый",
      "Тройник пластиковый",
    ],
    img: project5,
    links: {
      gitHubLink: "https://github.com/AlexGyver/Auto-Pumps",
      projectLink: "https://alexgyver.ru/auto-pumps/",
      youtubeLink: "https://www.youtube.com/watch?v=zV0Yx5-yNdw",
    },
  },
  {
    id: 6,
    title: "Автоматическое Мусорное Ведро",
    description:
      "Это ведро само открывает крышку, если поднести к нему руку. В проекте использована Arduino в качестве бортового компьютера мусорного ведра.",
    components: ["Arduino Nano", "Сервопривод", "Датчик расстояния"],
    img: project6,
    links: {
      gitHubLink: "https://github.com/AlexGyver/Trashcan",
      projectLink: "https://alexgyver.ru/trashcan/",
      youtubeLink: "https://www.youtube.com/watch?v=CnMkOTXKPAI",
    },
  },
  {
    id: 7,
    title: "Динамическая Фоновая Подсветка",
    description:
      "Динамическая фоновая подсветка экрана телевизора или монитора компьютера. Работает под управлением Arduino, на компьютере вертится программа Ambibox. Arduino управляет адресной светодиодной лентой на чипах WS2812. В схему добавлен фоторезистор для адаптивной подстройки яркости ленты в зависимости от интенсивности освещения в помещении.",
    components: [
      "Arduino Nano",
      "Адресная лента",
      "Беспаечные угловые соединители для ленты, 3 pin",
      "Блоки питания",
      "Фоторезисторы",
      "Резисторы ЧипДип 10 кОм",
      "Резисторы ЧипДип 300 Ом",
    ],
    img: project7,
    links: {
      gitHubLink: "https://github.com/AlexGyver/Arduino_Ambilight",
      projectLink: "https://alexgyver.ru/arduino_ambilight/",
      youtubeLink: "https://www.youtube.com/watch?v=tx5GxvFgkh0",
    },
  },
];

export default projects;
