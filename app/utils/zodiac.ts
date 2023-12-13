import { pickRandomItems, shuffleArray } from "./arrays";
import { Quiz } from "./questions-with-answers";

const zodiacSigns = [
  {
    name: "Aries",
    element: "Fuego",
    modality: "Cardinal",
    polarity: "Masculina",
    animal: "Carnero",
    animalArticle: "un",
    opposite: "Libra",
    regent: "Marte",
    body: "Cabeza",
    bodyArticle: "la",
    glyph: "♈️",
    temperament: "Caliente y seco",
    number: 1,
    date: "21 de Marzo",
    endDate: "20 de Abril",
  },
  {
    name: "Tauro",
    element: "Tierra",
    modality: "Fijo",
    polarity: "Femenina",
    animal: "Toro",
    animalArticle: "un",
    opposite: "Escorpio",
    regent: "Venus",
    body: "Cuello",
    bodyArticle: "el",
    glyph: "♉️",
    temperament: "Frío y seco",
    number: 2,
    date: "21 de Abril",
    endDate: "20 de Mayo",
  },
  {
    name: "Géminis",
    element: "Aire",
    modality: "Mutable",
    polarity: "Masculina",
    animal: "Mellizos",
    animalArticle: "",
    opposite: "Sagitario",
    regent: "Mercurio",
    body: "Manos y brazos",
    bodyArticle: "los",
    glyph: "♊️",
    temperament: "Caliente y húmedo",
    number: 3,
    date: "21 de Mayo",
    endDate: "20 de Junio",
  },
  {
    name: "Cáncer",
    element: "Agua",
    modality: "Cardinal",
    polarity: "Femenina",
    animal: "Cangrejo",
    animalArticle: "un",
    opposite: "Capricornio",
    regent: "Luna",
    body: "Pecho",
    bodyArticle: "el",
    glyph: "♋️",
    temperament: "Frío y húmedo",
    number: 4,
    date: "21 de Junio",
    endDate: "20 de Julio",
  },
  {
    name: "Leo",
    element: "Fuego",
    modality: "Fijo",
    polarity: "Masculina",
    animal: "León",
    animalArticle: "un",
    opposite: "Acuario",
    regent: "Sol",
    body: "Corazón",
    bodyArticle: "el",
    glyph: "♌️",
    temperament: "Caliente y seco",
    number: 5,
    date: "21 de Julio",
    endDate: "20 de Agosto",
  },
  {
    name: "Virgo",
    element: "Tierra",
    modality: "Mutable",
    polarity: "Femenina",
    animal: "Virgen",
    animalArticle: "una",
    opposite: "Piscis",
    regent: "Mercurio",
    body: "Intestino delgado",
    bodyArticle: "el",
    glyph: "♍️",
    temperament: "Frío y seco",
    number: 6,
    date: "21 de Agosto",
    endDate: "20 de Septiembre",
  },
  {
    name: "Libra",
    element: "Aire",
    modality: "Cardinal",
    polarity: "Masculina",
    animal: "Balanza",
    animalArticle: "una",
    opposite: "Aries",
    regent: "Venus",
    body: "Riñones",
    bodyArticle: "los",
    glyph: "♎️",
    temperament: "Caliente y húmedo",
    number: 7,
    date: "21 de Septiembre",
    endDate: "20 de Octubre",
  },
  {
    name: "Escorpio",
    element: "Agua",
    modality: "Fijo",
    polarity: "Femenina",
    animal: "Escorpión",
    animalArticle: "un",
    opposite: "Tauro",
    regent: "Marte y Plutón",
    body: "Sistema excretor",
    bodyArticle: "el",
    glyph: "♏️",
    temperament: "Frío y húmedo",
    number: 8,
    date: "21 de Octubre",
    endDate: "20 de Noviembre",
  },
  {
    name: "Sagitario",
    element: "Fuego",
    modality: "Mutable",
    polarity: "Masculina",
    animal: "Flecha",
    animalArticle: "una",
    opposite: "Géminis",
    regent: "Júpiter",
    body: "Hígado",
    bodyArticle: "el",
    glyph: "♐️",
    temperament: "Caliente y seco",
    number: 9,
    date: "21 de Noviembre",
    endDate: "20 de Diciembre",
  },
  {
    name: "Capricornio",
    element: "Tierra",
    modality: "Cardinal",
    polarity: "Femenina",
    animal: "Cabra",
    animalArticle: "una",
    opposite: "Cáncer",
    regent: "Saturno",
    body: "Huesos y dientes",
    bodyArticle: "los",
    glyph: "♑️",
    temperament: "Frío y seco",
    number: 10,
    date: "21 de Diciembre",
    endDate: "20 de Enero",
  },
  {
    name: "Acuario",
    element: "Aire",
    modality: "Fijo",
    polarity: "Masculina",
    animal: "Aguatero",
    animalArticle: "un",
    opposite: "Leo",
    regent: "Saturno y Urano",
    body: "Sistema circulatorio",
    bodyArticle: "el",
    glyph: "♒️",
    temperament: "Caliente y húmedo",
    number: 11,
    date: "21 Enero",
    endDate: "20 de Febrero",
  },
  {
    name: "Piscis",
    element: "Agua",
    modality: "Mutable",
    polarity: "Femenina",
    animal: "Pez",
    animalArticle: "un",
    opposite: "Virgo",
    regent: "Júpiter y Neptuno",
    body: "Pies",
    bodyArticle: "los",
    glyph: "♓️",
    temperament: "Frío y húmedo",
    number: 12,
    date: "19 de Febrero",
    endDate: "20 de Marzo",
  },
];

export const questionElement = (): Quiz => {
  // check this
  const randomSign =
    zodiacSigns[Math.floor(Math.random() * zodiacSigns.length)];
  const options = pickRandomItems(
    zodiacSigns.filter((sign) => sign.element === randomSign.element),
  ).map((sign) => sign.name);

  const correctOption = pickRandomItems(
    zodiacSigns.filter(
      (sign) =>
        sign.element !== randomSign.element && !options.includes(sign.name),
    ),
    1,
  ).map((sign) => sign.name);

  // CATEGORIA FACIL
  return {
    question: `¿Cuál signo no es de ${randomSign.element.toLowerCase()}?`,
    correctAnswer: correctOption[0],
    options: shuffleArray([correctOption[0], ...options]),
  };
};
export const questionModality = (): Quiz => {
  const randomSign =
    zodiacSigns[Math.floor(Math.random() * zodiacSigns.length)];
  const options = pickRandomItems(
    zodiacSigns.filter((sign) => sign.modality !== randomSign.modality),
    11,
  ).map((sign) => sign.modality);

  const optionSet = Array.from(new Set(options));

  // CATEGORIA FACIL
  return {
    question: `¿Cuál es la cualidad del signo ${randomSign.name}?`,
    correctAnswer: randomSign.modality,
    options: shuffleArray([randomSign.modality, ...optionSet.slice(0, 3)]),
  };
};

const questionPolarity = (): Quiz => {
  const randomSign =
    zodiacSigns[Math.floor(Math.random() * zodiacSigns.length)];
  const options = pickRandomItems(
    zodiacSigns.filter((sign) => sign.polarity !== randomSign.polarity),
  ).map((sign) => sign.name);

  // CATEGORIA DIFICIL
  return {
    question: `¿Cuál de estos signos tiene polaridad ${randomSign.polarity}?`,
    correctAnswer: randomSign.name,
    options: shuffleArray([randomSign.name, ...options]),
  };
};

const questionAnimal = (): Quiz => {
  const randomSign =
    zodiacSigns[Math.floor(Math.random() * zodiacSigns.length)];
  const options = pickRandomItems(
    zodiacSigns.filter((sign) => sign.animal !== randomSign.animal),
  ).map((sign) => sign.name);

  // CATEGORIA FACIL
  return {
    question: `¿Qué signo zodiacal está asociado a ${
      randomSign.animalArticle
    } ${randomSign.animal.toLowerCase()}?`,
    correctAnswer: randomSign.name,
    options: shuffleArray([randomSign.name, ...options]),
  };
};

const questionAnimalV2 = (): Quiz => {
  const randomSign =
    zodiacSigns[Math.floor(Math.random() * zodiacSigns.length)];
  const options = pickRandomItems(
    zodiacSigns.filter((sign) => sign.animal !== randomSign.animal),
  ).map((sign) => sign.name);

  // CATEGORIA FACIL
  return {
    question: `¿Cuál es el signo del Zodíaco representado por ${
      randomSign.animalArticle
    } ${randomSign.animal.toLowerCase()}?`,
    correctAnswer: randomSign.name,
    options: shuffleArray([randomSign.name, ...options]),
  };
};

const questionOpposite = (): Quiz => {
  const randomSign =
    zodiacSigns[Math.floor(Math.random() * zodiacSigns.length)];
  const options = pickRandomItems(
    zodiacSigns.filter(
      (sign) =>
        sign.name !== randomSign.name && sign.name !== randomSign.opposite,
    ),
  ).map((sign) => sign.opposite);

  // CATEGORIA FACIL
  return {
    question: `¿Cuál es el signo opuesto de ${randomSign.name}?`,
    correctAnswer: randomSign.opposite,
    options: shuffleArray([randomSign.opposite, ...options]),
  };
};

const questionRegent = (): Quiz => {
  const randomSign =
    zodiacSigns[Math.floor(Math.random() * zodiacSigns.length)];
  const options = pickRandomItems(
    zodiacSigns.filter((sign) => sign.regent !== randomSign.regent),
    11,
  ).map((sign) => sign.regent);

  const optionSet = Array.from(new Set(options));
  // CATEGORIA FACIL
  return {
    question: `¿Qué planeta o luminaria rige a ${randomSign.name}?`, // check regent no duplication
    correctAnswer: randomSign.regent,
    options: shuffleArray([randomSign.regent, ...optionSet.slice(0, 3)]),
  };
};

const questionRegentV2 = (): Quiz => {
  const randomSign =
    zodiacSigns[Math.floor(Math.random() * zodiacSigns.length)];
  const options = pickRandomItems(
    zodiacSigns.filter((sign) => sign.regent !== randomSign.regent),
  ).map((sign) => sign.name);

  // CATEGORIA FACIL
  return {
    question: `¿Cuál de estos signos es regido por ${randomSign.regent}?`,
    correctAnswer: randomSign.name,
    options: shuffleArray([randomSign.name, ...options]),
  };
};

const questionBody = (): Quiz => {
  const randomSign =
    zodiacSigns[Math.floor(Math.random() * zodiacSigns.length)];
  const options = pickRandomItems(
    zodiacSigns.filter((sign) => sign.body !== randomSign.body),
  ).map((sign) => sign.body);

  // CATEGORIA DIFICIL
  return {
    question: `¿Qué parte del cuerpo rige el signo de ${randomSign.name}?`,
    correctAnswer: randomSign.body,
    options: shuffleArray([randomSign.body, ...options]),
  };
};

const questionBodyV2 = (): Quiz => {
  const randomSign =
    zodiacSigns[Math.floor(Math.random() * zodiacSigns.length)];
  const options = pickRandomItems(
    zodiacSigns.filter(
      (sign) => sign.body !== randomSign.body && randomSign.name !== sign.name,
    ),
  ).map((sign) => sign.name);

  // CATEGORIA FACIL
  return {
    question: `¿Cuál es el signo que rige ${
      randomSign.bodyArticle
    } ${randomSign.body.toLowerCase()}?`,
    correctAnswer: randomSign.name,
    options: shuffleArray([randomSign.name, ...options]),
  };
};

const questionGlyph = (): Quiz => {
  const randomSign =
    zodiacSigns[Math.floor(Math.random() * zodiacSigns.length)];
  const options = pickRandomItems(
    zodiacSigns.filter((sign) => sign.glyph !== randomSign.glyph),
  ).map((sign) => sign.glyph);

  // CATEGORIA FACIL
  return {
    question: `¿Cuál de estos glifos representa a ${randomSign.name}?`,
    correctAnswer: randomSign.glyph,
    options: shuffleArray([randomSign.glyph, ...options]),
  };
};

const questionTemperament = (): Quiz => {
  const randomSign =
    zodiacSigns[Math.floor(Math.random() * zodiacSigns.length)];
  const options = pickRandomItems(
    zodiacSigns.filter((sign) => sign.temperament !== randomSign.temperament),
    11,
  ).map((sign) => sign.temperament);

  const optionSet = Array.from(new Set(options));

  // CATEGORIA DIFICIL
  return {
    question: `El signo de ${randomSign.name} es:`,
    correctAnswer: randomSign.temperament,
    options: shuffleArray([randomSign.temperament, ...optionSet.slice(0, 3)]),
  };
};

const questionTemperamentV2 = (): Quiz => {
  const randomSign =
    zodiacSigns[Math.floor(Math.random() * zodiacSigns.length)];
  const options = pickRandomItems(
    zodiacSigns.filter((sign) => sign.temperament === randomSign.temperament),
    11,
  ).map((sign) => sign.name);

  const optionSet = Array.from(new Set(options));

  const correctOption = pickRandomItems(
    zodiacSigns.filter((sign) => sign.temperament !== randomSign.temperament),
  ).map((sign) => sign.name);

  // CATEGORIA DIFICIL
  return {
    question: `¿Qué signo no es ${randomSign.temperament.toLowerCase()}?`,
    correctAnswer: correctOption[0],
    options: shuffleArray([correctOption[0], ...optionSet.slice(0, 3)]),
  };
};

const questionNumber = (): Quiz => {
  const randomSign =
    zodiacSigns[Math.floor(Math.random() * zodiacSigns.length)];
  const options = pickRandomItems(
    zodiacSigns.filter((sign) => sign.number !== randomSign.number),
  ).map((sign) => sign.number.toString());

  // CATEGORIA FACIL
  return {
    question: `¿Qué posición ocupa el signo de ${randomSign.name} en el Zodíaco?`,
    correctAnswer: randomSign.number.toString(),
    options: shuffleArray([randomSign.number.toString(), ...options]),
  };
};

const questionNumberV2 = (): Quiz => {
  const randomSign =
    zodiacSigns[Math.floor(Math.random() * zodiacSigns.length)];
  const options = pickRandomItems(
    zodiacSigns.filter((sign) => sign.number !== randomSign.number),
  ).map((sign) => sign.name);

  // CATEGORIA DIFICIL
  return {
    question: `¿Qué signo ocupa la ${randomSign.number}º posición en la rueda zodiacal?`,
    correctAnswer: randomSign.name,
    options: shuffleArray([randomSign.name, ...options]),
  };
};

const questionStartDate = (): Quiz => {
  const randomSign =
    zodiacSigns[Math.floor(Math.random() * zodiacSigns.length)];
  const options = pickRandomItems(
    zodiacSigns.filter((sign) => sign.date !== randomSign.date),
  ).map((sign) => sign.date);

  // CATEGORIA FACIL
  return {
    question: `¿Qué día comienza el signo de ${randomSign.name}?`,
    correctAnswer: randomSign.date,
    options: shuffleArray([randomSign.date, ...options]),
  };
};

const questionStartDateV2 = (): Quiz => {
  const randomSign =
    zodiacSigns[Math.floor(Math.random() * zodiacSigns.length)];
  const options = pickRandomItems(
    zodiacSigns.filter((sign) => sign.date !== randomSign.date),
  ).map((sign) => sign.date);

  // CATEGORIA DIFICIL
  return {
    question: `¿Cuál es la fecha de comienzo de ${randomSign.name}?`,
    correctAnswer: randomSign.date,
    options: shuffleArray([randomSign.date, ...options]),
  };
};

const questionEndDate = (): Quiz => {
  const randomSign =
    zodiacSigns[Math.floor(Math.random() * zodiacSigns.length)];
  const options = pickRandomItems(
    zodiacSigns.filter((sign) => sign.endDate !== randomSign.endDate),
  ).map((sign) => sign.endDate);

  // CATEGORIA DIFICIL
  return {
    question: `¿Cuál es la fecha de finalización de ${randomSign.name}?`,
    correctAnswer: randomSign.endDate,
    options: shuffleArray([randomSign.endDate, ...options]),
  };
};

const combinedQuestions = [
  questionElement, // CATEGORIA FACIL
  questionModality, // CATEGORIA FACIL
  questionPolarity, // CATEGORIA DIFICIL
  questionAnimal, // CATEGORIA FACIL
  questionAnimalV2, // CATEGORIA FACIL
  questionOpposite, // CATEGORIA FACIL
  questionRegent, // CATEGORIA FACIL
  //questionRegentV2, // CATEGORIA FACIL
  questionBody, // CATEGORIA DIFICIL
  questionBodyV2, // CATEGORIA FACIL
  questionGlyph, // CATEGORIA FACIL
  questionTemperament, // CATEGORIA DIFICIL
  questionTemperamentV2, // CATEGORIA DIFICIL
  questionNumber, // CATEGORIA FACIL
  questionNumberV2, // CATEGORIA DIFICIL
  questionStartDate, // CATEGORIA FACIL
  questionStartDateV2, // CATEGORIA DIFICIL
  //questionEndDate,
];

const easyQuestions = [
  questionElement, // CATEGORIA FACIL
  questionModality, // CATEGORIA FACIL
  questionAnimal, // CATEGORIA FACIL
  questionAnimalV2, // CATEGORIA FACIL
  questionOpposite, // CATEGORIA FACIL
  questionRegent, // CATEGORIA FACIL
  //questionRegentV2, // CATEGORIA FACIL
  questionBodyV2, // CATEGORIA FACIL
  questionGlyph, // CATEGORIA FACIL
  questionNumber, // CATEGORIA FACIL
  questionStartDate, // CATEGORIA FACIL
];

const hardQuestions = [
  questionPolarity, // CATEGORIA DIFICIL
  questionBody, // CATEGORIA DIFICIL
  questionTemperament, // CATEGORIA DIFICIL
  questionTemperamentV2, // CATEGORIA DIFICIL
  questionNumberV2, // CATEGORIA DIFICIL
  questionStartDateV2, // CATEGORIA DIFICIL
];

// const combinedQuestions = [questionElement, questionTemperamentV2];

export function generatePool() {
  const pool = [
    ...shuffleArray(
      easyQuestions.map((question) => {
        return question();
      }),
    ),
    ...shuffleArray(
      hardQuestions.map((question) => {
        return question();
      }),
    ),
  ];

  return pool
    .map((item, index) => ({ ...item, id: index.toString() }))
    .slice(0, 10);
}
