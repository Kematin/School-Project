// imgs
import project1 from "./../img/projects/01.jpg";
import project2 from "./../img/projects/02.jpg";
import project3 from "./../img/projects/03.jpg";

const projects = [
  {
    id: 1,
    title: "Умная копилка",
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
    title: "Gaming streaming portal",
    description: "React, Node.JS, MongoDB",
    components: [],
    img: project3,
    links: {
      gitHubLink: "https://github.com/Kematin/School-Project",
      projectLink: "https://github.com/Kematin/School-Project",
      youtubeLink: "https://github.com/Kematin/School-Project",
    },
  },
];

export default projects;
