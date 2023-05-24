type Data = {
  [key: number]: {
    years: string[];
    events: {
      year: string;
      description: string;
    }[];
  };
};

const data4: Data = {
  1: {
    years: ['1987', '1991'],
    events: [
      {
        year: '1987',
        description: '«Хищник»/Predator, США (реж. Джон Мактирнан).',
      },
      {
        year: '1988',
        description:
          '«Кто подставил кролика Роджера»/Who Framed Roger Rabbit, США (реж. Роберт Земекис).',
      },
      {
        year: '1989',
        description:
          '«Назад в будущее 2»/Back To The Future 2, США (реж. Роберт Земекис)',
      },
      {
        year: '1990',
        description: '«Крепкий Орешек 2»/Die Hard 2, США (реж. Ренни Харлин).',
      },
      {
        year: '1991',
        description:
          '«Семейка Аддамс»/The Add Family, США (реж. Барри Зонненфельд)',
      },
    ],
  },
  2: {
    years: ['1992', '1997'],
    events: [
      {
        year: '1992',
        description:
          'Нобелевская премия по литературе — Дерек Уолкотт, «За блестящий образец карибского эпоса в 64 разделах».',
      },
      {
        year: '1994',
        description: '«Бессоница» — роман Стивена Кинга.',
      },
      {
        year: '1995',
        description: 'Нобелевская премия по литературе — Шеймас Хини',
      },
      {
        year: '1997',
        description: '«Гарри Поттер и философский камень». Джоан Роулинг.',
      },
    ],
  },
  3: {
    years: ['1999', '2004'],
    events: [
      {
        year: '1999',
        description:
          '«премьера балета «Золушка» в постановке Жан-Кристофа Майо, сценография Эрнеста Пиньона.',
      },
      {
        year: '2000',
        description: '«возоновлено издание журнала «Театр».',
      },
      {
        year: '2002',
        description:
          'премьера трилогии Тома Стоппарда «Берег Утопии», Королевский Национальный театр, Лондон.',
      },
      {
        year: '2003',
        description: 'В Венеции что-то произошло, но у меня нет текста =)',
      },
    ],
  },
  4: {
    years: ['2015', '2022'],
    events: [
      {
        year: '2015',
        description:
          '13 сентября — частное солнечное затмение, видимое в Южной Африке и части Антарктиды.',
      },
      {
        year: '2016',
        description:
          '«Телеском «Хаббл» обнаружил самую удалённую из всех обнаруженных галактик, получившую название GN–z11.',
      },
      {
        year: '2017',
        description:
          '«Компания Tesla официально представила первый в мире электрический грузовик Tesla Semi.',
      },
      {
        year: '2018',
        description:
          'Старт космического аппарата Solar Probe Plus, предназначенного для изучения Солнца.',
      },
      {
        year: '2019',
        description:
          'Google объявил о создании 53-кубитного квантового компьютера.',
      },
      {
        year: '2020',
        description:
          'Корабль Crew Dragon вернулся на Землю из первого пилотируемого полёта.',
      },
    ],
  },
};

export default data4;
