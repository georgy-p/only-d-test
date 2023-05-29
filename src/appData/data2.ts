type Data = {
  [key: number]: {
    years: string[];
    events: {
      year: string;
      description: string;
    }[];
  };
};

const data2: Data = {
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
};

export default data2;
